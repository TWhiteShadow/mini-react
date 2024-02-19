import Router from "./Core/Router.js";
import Page from "./Components/Page.js"; // Import the provided routes object
import { createElement } from "./Core/Core.js";
import List from "./Components/List.js";
import CarDetails from "./Components/CarDetails.js";

async function fetchCars() {
    try {
        const response = await fetch("http://172.26.15.76:8003/cars?type=json", {
        // const response = await fetch("http://127.0.0.1:8003/cars?type=json", {
            method: 'GET',
            mode: 'cors',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching cars:', error);
        return [];
    }
}


const cars = [
      { id: 1, model: "Toyota Camry", color: "Blue", year: 2020, mileage: 5000 },
      { id: 2, model: "Honda Accord", color: "Red", year: 2019, mileage: 7000 },
      { id: 3, model: "Ford Mustang", color: "Black", year: 2018, mileage: 10000 }
];

const data = await fetchCars();
const carsApi = [];
data.forEach((car) => carsApi.push(car));

var toto = {
    home: {
      url: '/',
      type: Page,
      props: {
        title: 'Bienvenue sur Lauvni passion auto',
        menu: [
          {
            label: 'Voitures',
            href: '/voitures',
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
              href: '/',
          },
          {
              label: 'Voitures',
              href: '/voitures',
          },
        ]
      },
      children: [
        createElement(List, null , {data: carsApi}),
      ],
    },
    voituresDetail : {
      url: '/voitures/:id',
      type: Page,
      props: {
          title: 'Détails de la voiture',
          menu: [
              {
                  label: 'Accueil',
                  href: '/',
              },
              {
                  label: 'Voitures',
                  href: '/voitures',
              },
          ]
      },
      children: [
           createElement(CarDetails, { carId: 305 }, null ),
      ],
    },
    voituresEdit : {
        url: '/voitures/:id/edit',
        type: Page,
        props: {
            title: 'Edition de la voiture',
            menu: [
                {
                    label: 'Accueil',
                    href: '/',
                },
                {
                    label: 'Voitures',
                    href: '/voitures',
                },
            ]
        },
        children: [
             createElement(CarDetails, { carId: 305 }, null ),
        ],
      },
  };

const routes = Object.entries(toto).map(([key, value]) => ({
    path: value.url,
    component: Page,
    props: value.props,
    children: value.children,
}));

const router = new Router(routes);
export { router }; // Export router here
