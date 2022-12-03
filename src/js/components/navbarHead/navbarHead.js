import { generalnavbarHead } from "./navbarHeadModel";

const navbarHead = document.querySelector('#navbarHead');

let navbarHeadHtml = generalnavbarHead.map((a) => {
   return `
       <div class="navbar__wrapper">
       <div class="navbar">
           <div class="navbar__logo">
               <img src=" ${a.img} " alt="image">
           </div>
           <div class="navbar__links">
               <a href="#" class="btn btn-secondary"> ${a.text1} </a>
               <a href="#" class="btn btn-secondary"> ${a.text2} </a>
               <a href="#" class="btn btn-secondary"> ${a.text3} </a>
           </div>
           <div class="navbar__reg">
               <a href="#" class="btn btn-primary">  ${a.text4} </a>
               <a href="#" class="btn btn-secondary">  ${a.text5} </a>
           </div>
       </div>
    </div>
    `
}).join(" ");

navbarHead.insertAdjacentHTML('beforeend', navbarHeadHtml);