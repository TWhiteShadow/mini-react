import { NotFound } from "../Components/Pages.js";
import { renderComponent } from "./Core.js";

class Router {
    constructor(routes) {
        this.routes = routes;
        this.route();
        window.addEventListener('hashchange', () => this.route()); // Listen for hashchange event
    }

    route() {
        var path = window.location.toString().split("/");
        path = "/" + path.slice(3).join("/"); // /about for example
        const route = this.routes.find(route => route.path === path);
        if (route) {
            console.log(route);
            renderComponent(route.component, route.props, route.children); // Render the component with props and children
        } else {
            // Handle 404 - Route Not Found
            renderComponent(NotFound);
        }
    }
}


export default Router;
