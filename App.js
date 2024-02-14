import Router from "./Core/Router.js";
import Page from "./Components/Page.js"; // Import the provided routes object
import { createElement } from "./Core/Core.js";


var toto = {
    home: {
      url: '/',
      type: Page,
      props: {
        title: 'Bienvenue sur Lauvni passion auto',
        menu: [
          {
            label: 'Calculatrice',
            href: '#/calculatrice',
          },
          {
            label: 'Voitures',
            href: '#/voitures',
          },
        ]
      },
      children: [
        createElement('p', {style: 'background: #222; padding: 30px; color: white; font-size: 20px'},
            'Pour rappel, cette 488 Pista Piloti Ferarri s\'inspire de la 488 GTE  n°51 des pilotes Alessandro Pier Guidi et James Calado.'
        ),
        createElement("img", {class: 'background', alt: 'Background', style: 'width: 100%', src: 'https://i.ytimg.com/vi/r2mWck2aLd4/maxresdefault.jpg'}, null),
      ],
    },
    voitures: {
      url: '/voitures',
      type: Page,
      props: {
        title: 'Liste des Voitures en stock',
        menu: [
          {
            label: 'Accueil',
            href: '#/',
          },
          {
            label: 'Calculatrice',
            href: '#/calculatrice',
          },
        ]
      },
    },
  };

const routes = Object.entries(toto).map(([key, value]) => ({
    path: value.url,
    component: Page,
    props: value.props,
    children: value.children,
}));

console.log(routes);

const router = new Router(routes);
export { router }; // Export router here
