let postData = {
    posts: [],
};

function xhr (method, url, body = null){
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = "json";
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = () => resolve(xhr.response);
        xhr.oneerror = reject;
        xhr.send(body);
    })
}

function postLoad(response = []) {
    let promiseArr = [];
    for(let i = 0; i < 10; i++){
        let random = getRandomInt(99);
        let post = response[random];
        let promise = xhr("GET", `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
            .then(res => {
                post['comments'] = res;
                postData.posts.push(post);
            });
        promiseArr.push(promise);
    };
    Promise.all(promiseArr)
        .then(()=>{
            let postDataJson = JSON.stringify(postData);
            window.localStorage.setItem('posts', postDataJson);
            createPosts(postData);
        })
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function createPosts(data) {
    let div = document.createElement('div');
    data.posts.forEach(post => {
        let p = document.createElement('p');
        let ul = document.createElement('ul');
        p.innerHTML = post.title;
        post.comments.forEach(comment => {
            let item = document.createElement('li');
            item.innerHTML = `${comment.name} + ${comment.email} + ${comment.body}`;
            ul.append(item);
        })
        div.append(p);
        div.append(ul);
    })
    document.body.append(div)
}

function getLocalStorage() {
    let postLocalData = JSON.parse(window.localStorage.getItem('posts'));
    if (postLocalData === null){
        xhr('GET', 'https://jsonplaceholder.typicode.com/posts')
            .then(res => postLoad(res));
    }else{
        createPosts(postLocalData)
    }
}

getLocalStorage();
