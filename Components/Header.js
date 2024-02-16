import { createElement} from '../Core/Core.js';
import { render } from '../Core/Dom.js';

import { router } from "../App.js";
import Component from '../Core/Component.js'; // replace with the actual path

class Header extends Component {
    constructor(menu) {
        super();
        this.menu = menu;
        console.log("Menu du Header " + menu);
        if(menu !== undefined){
            this.header = createElement("header", null, 
                createElement("nav", {"id": "navbar", "class": "navbar navbar-expand-lg navbar-light bg-light"}, 
                    createElement("a", { onClick: () => router.navigateTo('/') }, "goToHome"), 
                    createElement("a", { onClick: () => router.navigateTo('/about') }, "goToAbout"),
                    createElement("a", { onClick: () => router.navigateTo('/cars')}, "goToCars")),
                );
        }
    }

    createMenu() {
        this.menu = this.menu.menu;
        const links = this.menu.map(item => createElement("a", { onClick: () => router.navigateTo(item.href) }, item.label));
        this.header = createElement("header", null,
            createElement("nav", { "id": "navbar", "class": "navbar navbar-expand-lg navbar-light bg-light" },
                ...links
            )
        );
    }
    

    render() {
        this.createMenu();
        return this.header;
    }
}

export default Header;
