let theMap = tag`${newMatrix}`;
theMap = theMap.map(function (str) {
    str = `<p>${str}</p>`;
    return str;
}).join('');
function tag (strings, values) {
    let newVal = values;
    for (let i = 0; i<values.length; i++) {
        newVal[i] = newVal[i].map(function (arrElem) {
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
        newVal[i] = newVal[i].join('');
    }
    return newVal;
}