 const initialProduct = [{
    id:1,
    image:"",
    name:"Product 1",
    description: "product 1 description",
    price:120
},
    {
        id:2,
        image:"",
        name:"Product 2",
        description: "product 2 description",
        price:110
    },
    {
        id:3,
        image:"",
        name:"Product 3",
        description: "product 3 description",
        price:80
    },
    {
        id:4,
        image:"",
        name:"Product 4",
        description: "product 4 description",
        price:36
    },
    {
        id:5,
        image:"",
        name:"Product 5",
        description: "product 5 description",
        price:20
    }

];
const persistedData = localStorage.getItem('product-list');

export default persistedData ? JSON.parse(persistedData) : initialProduct;
