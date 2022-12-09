import { generalnavbarMain } from "./navbarMainModel";

const navbarMain = document.querySelector('#navbarMain');

let navbarMainHtml = generalnavbarMain.map((a) => {
   return `
  
        <div class="col-md-4"><p class="header-main__text"> ${a.text} </p></div>
    `
}).join(" ");

navbarMain.insertAdjacentHTML('beforeend', navbarMainHtml);