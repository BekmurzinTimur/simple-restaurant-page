import './styles/reset.scss';
import './styles/main.scss';

import {about} from "./about";
import {menu} from "./menu";
import {contacts} from "./contacts";

const mainClass = (() => {

    let contentDiv = document.getElementById("content");
    //create header and add it to content
    let header = document.createElement("header");
    let backgroundHeader = document.createElement("div");
    let contentHeader = document.createElement("div");
    let cafeName = document.createElement("p");
    
    //create body and add to content
    let bodyWrapper = document.createElement("section");
    let bodyInner = document.createElement("div");

    let tabsContainer = document.createElement("ul");
    let tabs = [];

    //Element that contains content of each tab
    let bodyContent = document.createElement("div");


    const fillPageOnStart = () => {
        //Appending childs and classes to header
        backgroundHeader.className = "background-header";
        contentHeader.className = "content-header";
        cafeName.textContent = "LOREM IPSUM";
        backgroundHeader.appendChild(cafeName);
        header.appendChild(backgroundHeader);
        contentDiv.appendChild(header);
    
        
        bodyWrapper.className = ("body_wrapper");
        bodyInner.className = ("body_inner");
        bodyWrapper.appendChild(bodyInner);
        contentDiv.appendChild(bodyWrapper);
    
        //making tabs
        tabsContainer.className = "tabs_container";
        bodyInner.appendChild(tabsContainer);
    
        for (let i = 0; i < 3; i++)
        {
            tabs[i] = document.createElement("li");
            tabsContainer.appendChild(tabs[i]);
        }
        tabs[0].textContent = "About";
        tabs[0].addEventListener ("click", () => 
        {
            about(); changeTab(0);
        });
        tabs[1].textContent = "Menu";
        tabs[1].addEventListener ("click", () => 
        {
            menu(); changeTab(1);
        });
        tabs[2].textContent = "Contact Us";
        tabs[2].addEventListener ("click", () => 
        {
            contacts(); changeTab(2);
        });

        //Main content here
        bodyInner.appendChild(bodyContent);
        bodyContent.id = "body_content";
        //Select first tab on the start of the page
        changeTab(0);

        //Footer
        let footer = document.createElement("footer");
        footer.className = "generic_footer";
        footer.textContent = 'Generic footer © 2077';
        contentDiv.appendChild(footer);
    };
    
    //Shows what tab is currently active
    let changeTab = (button) => { 
        for (let i = 0; i < 3; i++)
        {
            tabs[i].id = "";
        }
        tabs[button].id = "selected_tab";
        console.log(tabs[button].className);
    };

    return {
        fillPageOnStart,
    };

})();

mainClass.fillPageOnStart();
about();