import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';

let all_product = [
    {
        id: 1,
        title: "Syltherine",
        description: "Stylish cafe chair",
        newPrice: "2,500,000",
        oldPrice: "3,500,000",
        category: "Chair",
        coverImg: product1,
        discount: 30,
    },
    {
        id: 2,
        title: "Lolito",
        description: "Luxury big sofa",
        newPrice: "7,000,000",
        oldPrice: "14,000,000",
        category: "Sofa",
        coverImg: product2,
        discount: 0,
    },
    {
        id: 3,
        title: "Respira",
        description: "Outdoor bar table and stool",
        newPrice: "500,000",
        oldPrice: "",
        category: "Table",
        coverImg: product3,
        discount: 50,
    },
    {
        id: 4,
        title: "Grifo",
        description: "Night lamp",
        newPrice: "1,500,000",
        oldPrice: "",
        category: "Lamp",
        coverImg: product4,
        discount: 0,
    }
];

export default all_product;
