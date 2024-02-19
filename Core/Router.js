import { NotFound } from "../Components/Pages.js";
import { renderComponent } from "./Core.js";

class Router {
    constructor(routes) {
        this.routes = routes;
        this.route();
        window.addEventListener('hashchange', () => this.route()); // Listen for hashchange event
    }

    // route() {
    //     var path = window.location.toString().split("/");
    //     path = "/" + path.slice(3).join("/"); // /about for example
    //     const route = this.routes.find(route => route.path === path); // default route system


    //     if (route) {
    //         renderComponent(route.component, route.props, route.children); // Render the component with props and children
    //     } else {
    //         // Handle 404 - Route Not Found
    //         renderComponent(NotFound);
    //     }
    // }

    route() {
        const pathParts = window.location.toString().split("/");
        const currentPath = "/" + pathParts.slice(3).join("/"); // Get the current path from URL
        const currentPathParts = currentPath.split("/");

        const route = this.routes.find(route => {
            const routeParts = route.path.split("/");
            // Compare the length of path parts
            if (routeParts.length === currentPathParts.length) {
                // Check each part for exact match or parameter
                for (let i = 0; i < routeParts.length; i++) {
                    if (routeParts[i] !== currentPathParts[i] && !routeParts[i].startsWith(":")) {
                        return false; // Path parts don't match and are not parameters
                    }
                }
                return true; // All parts match
            }
            return false; // Lengths don't match
        });
    
        if (route) {
            const props = {}; // Initialize props object to pass to component
            const pathParams = {}; // Initialize object to hold path parameters
    
            // Extract path parameters
            const routeParts = route.path.split("/");
            for (let i = 0; i < routeParts.length; i++) {
                if (routeParts[i].startsWith(":")) {
                    const paramName = routeParts[i].slice(1); // Remove ':' from parameter name
                    pathParams[paramName] = currentPathParts[i];
                }
            }
    
            // Pass path parameters as props
            Object.assign(route.children[0].props, pathParams); // ajout du param id dans la liste des children
            console.log("les children ici" , route.children);


    
            renderComponent(route.component, route.props, route.children); // Render the component with props and children
        } else {
            // Handle 404 - Route Not Found
            renderComponent(NotFound);
        }
    }
    

    navigateTo(path) {
        window.history.pushState({}, '', path); // Change the URL without reloading the page
        this.route(); // Re-route to the new path
    }
}


export default Router;
