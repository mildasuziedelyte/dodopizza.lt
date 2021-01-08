const pizzasData = {
    selector: '.pizza-menu',
    class: 'pizza',
    title: 'Picos',
    imagePath:'../../img/pizzas/',
    button: 'Pasirinkti',
    menu: [
        {
            id: 'pizza-1',
            img: 'christmas.png',
            title: 'Christmas pizza',
            description: 'Kalakutiena, spanguolių padažas, bruknės, šoninė, raudonieji svogūnai, mocarelos sūris, česnakinis padažas',
            price: 8.75,
            addComponents: [1, 2, 3],
            active: true
        },
        {
            id: 'pizza-2',
            img: 'carbonara.jpeg',
            title: 'Carbonara',
            description: 'Sūrio padažas, granuliuoti česnakai, mocarelos sūris, raudonieji svogūnai, šoninė, vyšniniai pomidorai, itališkos žolelės, parmezanas, čederio sūris',
            price: 8.75,
            addComponents: [3, 2],
            active: true
        },
        {
            id: 'pizza-3',
            img: 'pesto.jpeg',
            title: 'Pesto',
            description: 'Vištiena, fetos sūris, vyšniniai pomidorai, mocarelos sūris, padažas pesto, česnakinis padažas',
            price: 8.75,
            addComponents: [3, 4, 1],
            active: true
        },
        {
            id: 'pizza-4',
            img: 'half&half.jpeg',
            title: 'Half&Half',
            description: '',
            price: 11.70,
            active: true
        },
        {
            id: 'pizza-5',
            img: 'fiesta.jpeg',
            title: 'Fiesta',
            description: 'Vištiena, mocarelos sūris, raudonieji svogūnai, saliamis, pomidorai, žalioji paprika, česnakinis padažas, chipotle padažas, granuliuoti česnakai',
            price: 8.75,
            active: true
        },
        {
            id: 'pizza-6',
            img: 'cheesy-chicken.jpg',
            title: 'Cheesy Chicken',
            description: 'Pomidorai, mocarelos sūris, vištiena, sūrio padažas',
            price: 7.75,
            active: true
        },
        {
            id: 'pizza-7',
            img: 'crazy.jpeg',
            title: 'Crazy',
            description: 'Saldžiarūgštis padažas, vištiena, mocarelos sūris, saliamis, picų padažas',
            price: 8.75,
            spicy: true,
            active: true
        },
        {
            id: 'pizza-8',
            img: 'royal.jpg',
            title: 'Royal',
            description: 'Pievagrybiai, čili padažas, picų padažas, raudonieji svogūnai, vištiena, jautiena, kumpis, mocarelos sūris',
            price: 8.75,  
            spicy: true,
            active: true
        }
    ]
}

export { pizzasData }