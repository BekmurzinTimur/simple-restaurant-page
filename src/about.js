import company1 from './assets/company1.png';
import company2 from './assets/company2.png';
import company3 from './assets/company3.png';

let coLogos = [company1,company2,company3];

const about = () => {
let Content = document.getElementById("body_content");

while(Content.firstChild) {
    Content.removeChild(Content.firstChild);
}

    let about = document.createElement("p");
    about.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In facere perspiciatis rerum adipisci explicabo. Minima tempore iste quasi officiis totam ad corporis, pariatur nobis dignissimos aliquid praesentium, sunt amet dolor!"

    Content.appendChild(about);

    let companiesList = document.createElement("ul");
    companiesList.className = "co_list";
    let companies = [];
    for (let i = 0; i <3; i++) {
        companies[i] = document.createElement("li");
        companies[i].className = "companies";
        companiesList.appendChild(companies[i]);
        let img = new Image();
        img.src = coLogos[i];
        companies[i].appendChild(img);
    }
    
    Content.classList = null;
    Content.className = "about_page";
    Content.appendChild(companiesList);
}

export {
    about
}