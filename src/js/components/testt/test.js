import {generalTest} from "./testModel";

const test = document.querySelector('#skrapy');

let testHtml = generalTest.map((a) => {
    return `

    <p>${a.text_1}</p>
    <a>${a.text_2}</a>
    <p>${a.text_1}</p>
    <p>${a.text_1}</p>

    `
}).join(" ");

test.insertAdjacentHTML('beforeend', testHtml); 