import { NotFound } from "../Components/Pages.js";

class Router {
    constructor(routes) {
        this.routes = routes;
        this.route();
        window.addEventListener('popstate', () => this.route()); // Listen for popstate event
    }

    route() {
        var path = window.location.toString().split("/");
        path = "/" + path.slice(3).join("/"); // /about for example
        const route = this.routes.find(route => route.path === path);
        if (route) {
            this.renderComponent(route.component);
        } else {
            // Handle 404 - Route Not Found
            this.renderComponent(NotFound);
        }
    }

    renderComponent(component) {
        const appContainer = document.getElementById('root');
        appContainer.innerHTML = '';
        const componentInstance = new component();
        appContainer.appendChild(componentInstance.render());
    }

    // Method to change the route without reloading the page
    navigateTo(path) {
        window.history.pushState({}, '', path); // Change the URL without reloading the page
        this.route(); // Re-route to the new path
    }
}


export default Router;