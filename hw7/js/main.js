let empty = ".",
    animal = "@";
const brash = "*";

let matrix = [
    [empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, brash],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, animal, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty],
    [empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty],
    [brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty],
    [empty, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty, empty, empty],
    [empty, empty, brash, empty, empty, empty, empty, empty, brash, empty, empty, empty, empty, empty, empty, empty],
    [empty, brash, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, brash, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
];
let newMessage = tag`${matrix}`;
newMessage = newMessage.map(function (str) {
    str = `<p>${str}</p>`;
    return str;
}).join('');


function tag (strings, values) {
    for (let i = 0; i<values.length; i++) {
        values[i] = values[i].map(function (arrElem) {
            if (arrElem === empty) {
                arrElem = `<span class="empty">${arrElem}</span>`;
            }
            if (arrElem === brash) {
                arrElem = `<span class="brash">${arrElem}</span>`;
            }
            if (arrElem === animal) {
                arrElem = `<span class="animal">${arrElem}</span>`;
            }
            return arrElem;
        });
        values[i] = values[i].join('');
    }
    return values;
}

document.addEventListener('DOMContentLoaded', function () {
    document.body.innerHTML = newMessage;
});