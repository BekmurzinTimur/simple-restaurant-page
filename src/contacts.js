
const contacts = () => {
    let Content = document.getElementById("body_content");

    while(Content.firstChild) {
        Content.removeChild(Content.firstChild);
    }

    //contact block
    let contacts = document.createElement("h2");
    contacts.textContent = "CONTACT";
    let info = document.createElement("p");
    info.textContent = "Email: example@email.com";
    let info2 = document.createElement("p");
    info2.textContent = "Call us: 123-567-890";


    Content.appendChild(contacts);
    Content.appendChild(info);
    Content.appendChild(info2);

    //location block
    let location = document.createElement("h2");
    location.textContent = "LOCATION";
    let info3 = document.createElement("p");
    info3.textContent = "123 Ipsum St., Lorem City";
    let info4 = document.createElement("p");
    info4.textContent = "Opening Hours: 8:00 - 23:00";

    Content.appendChild(location);
    Content.appendChild(info3);
    Content.appendChild(info4);

    let script = document.createElement('script');
    script.onload = function () {
                // Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        ymaps.ready(init);
        function init(){   
            var myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 17
            });
            var myPlacemark = new ymaps.Placemark([55.76, 37.64]);
            myMap.geoObjects.add(myPlacemark);
        }
    };
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=596dd6f8-0363-4e8d-82e2-4c922dab6361&lang=ru_RU";

    document.head.appendChild(script); //or something of the likes

    let map = document.createElement("div");
    
    map.id = "map";

    let initMap = () => {
        
    }

    Content.appendChild(map);
    Content.classList = null;
    Content.className = "contacts";
}

    export {
        contacts
    }