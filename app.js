"use strict"
import {menu} from "./card.js"

let main = function() {
    let buttons = document.querySelectorAll("button");

    for (let btn of buttons) {
        btn.addEventListener("click", event => {
            let element = event.currentTarget.textContent.toLowerCase();

            let displayMenu = filterMenu(element, menu);

            const sectionCenter = document.querySelector(".section-center");

            sectionCenter.innerHTML = displayMenu;
        })
    }
}()

function filterMenu(current, menu) {
    let filtered = menu.filter(element => {
        if (current === "all") {
            return element
        } else {
            if (element.category === current) {
                return element
            }
        }
      
    }).map(element => {
        return htmlData(element)
    })
    
    let displayMenu = filtered.join("");
    return displayMenu
}

function htmlData(item) {
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
