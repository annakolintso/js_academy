'use strict';

function createFamily(mother, father) {
    if (typeof mother !== 'string' || typeof father !== 'string') {
        alert('Message incorrect!');
        return;
    }
    let family = {
        mother: mother,
        father: father,
        children: [],
        makeChild: function (name) {
            let child = {
                name: name,
                parents: `${this.mother} and ${this.father}`,
            }
            this.children.push(child);

        }
    }
    return family;
}

let fullFamily = createFamily("Alla", "Alex");
fullFamily.makeChild("Mile");
fullFamily.makeChild("ываыва");
fullFamily.makeChild("ываыва");
console.log(fullFamily);
let fullFamily2 = createFamily("Allфa", "Alываex");
fullFamily2.makeChild("Mываile");
fullFamily2.makeChild("ываыва");
fullFamily2.makeChild("ываыва");
console.log(fullFamily2);