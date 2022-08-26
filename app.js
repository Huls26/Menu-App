"use strict"
import {menu, filterBtn, filtersItems} from "./card.js"

let main = function() {
    const buttonsCatergory = document.querySelector(".filter-btn");

    window.addEventListener("DOMContentLoaded", function () {
        let buttons = filterBtn(menu);

        buttonsCatergory.innerHTML = buttons;

        // for buttons
        let btns = document.querySelectorAll(".category-btn");
        let allBtn = btns[0];
        allBtn.style.backgroundColor = "blue";
        allBtn.style.color = "yellow";

        for (let b of btns) {
           
            b.addEventListener("click", event => {
                removeStyle(btns)
                b.style.backgroundColor = "blue";
                b.style.color = "yellow";
                let element = event.currentTarget.textContent.toLowerCase();
                let displayMenu = filterMenu(element, menu);

                const sectionCenter = document.querySelector(".section-center");

                sectionCenter.innerHTML = displayMenu;
            })
        }
    });
}()

function removeStyle(elements) {
    for (let element of elements) {
        element.style.backgroundColor = "white";
        element.style.color = "rgb(134, 148, 8)"
    }
}

// for buttons
function filterMenu(current, menu) {
    let filtered = menu.filter(element => {

        if (current === "all") {
            return element
        } else {
            if (element.category === current) {
                return element
            }
        }
    })

    let displayMenu = displayMenuItem(filtered);
    return displayMenu
}   

// get all items
export function displayMenuItem(array) {
   let menu = array.map(element => {
        return htmlData(element)
    })
    
    let displayMenu = menu.join("");
    return displayMenu
}   

// make a html
export function htmlData(item) {
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header class="name-price">
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`
}
