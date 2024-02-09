import { render , createElement} from '../Core/Core.js';
import { router } from "../App.js";
import Component from './Component.js'; // replace with the actual path

class Header extends Component {
    constructor() {
        super();
        this.header = createElement("header", null, 
            createElement("nav", {"id": "navbar", "class": "navbar navbar-expand-lg navbar-light bg-light"}, 
                createElement("a", { onClick: () => router.navigateTo('/') }, "goToHome"), 
                createElement("a", { onClick: () => router.navigateTo('/about') }, "goToAbout"),
                createElement("a", { onClick: () => router.navigateTo('/cars')}, "goToCars")),
            );
    }

    render() {
        return this.header;
    }
}

export default Header;
