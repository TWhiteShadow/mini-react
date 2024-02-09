import { render , createElement} from '../Core/Core.js';
import { router } from "../App.js";

var header = createElement("header", null, 
        createElement("nav", {"id": "navbar", "class": "navbar navbar-expand-lg navbar-light bg-light"}, 
            createElement("a", { onClick: () => router.navigateTo('/') }, "goToHome"), 
            createElement("a", { onClick: () => router.navigateTo('/about') }, "goToAbout"),
            createElement("a", { onClick: () => router.navigateTo('/cars')}, "goToCars")),
        );

export default header;