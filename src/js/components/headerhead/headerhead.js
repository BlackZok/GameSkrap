import {generalHeaderHead} from "./headerheadModel";

const HeaderHead = document.querySelector('#HeaderHead');

let HeaderHeadHtml = generalHeaderHead.map((a) => {
    return `

    <div class="col-md-4">
        <a href="#" class="btn" target="_blank">${a.text}</a>
    </div>
    `
}).join(" ");

HeaderHead.insertAdjacentHTML('beforeend', HeaderHeadHtml);