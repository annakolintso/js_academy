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
console.log(fullFamily);