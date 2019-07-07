import burger from './assets/burger.jpg';
import pizza from './assets/pizza.jpeg';
import steak from './assets/steak.jpg';

let food = [burger,pizza,steak];

const menu = () => {
    let Content = document.getElementById("body_content");

    while(Content.firstChild) {
        Content.removeChild(Content.firstChild);
    }

    let menuList = document.createElement("ul");
    let names = ["Burger", "Pizza","Steak"];
    for (let i = 0; i < 3; i++) 
    {
        let foodItem = document.createElement("li");
        let foodName = document.createElement("p");
        foodName.textContent = names[i];
        let foodImage = new Image();
        foodImage.src = food[i];

        foodItem.appendChild(foodImage);
        foodItem.appendChild(foodName);

        menuList.appendChild(foodItem);
    }

    Content.appendChild(menuList);



    Content.classList = null;
    Content.className = "menu_page";
    Content.appendChild(menuList);
}

    export {
        menu
    }