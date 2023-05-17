import 'dotenv/config.js';
import '../../config/database.js';
import Author from '../Author.js';

let authors = [{
    name: "alejandro",
    city: "buenos aires",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: '6463dd68c0156c9ba5f4ec09'
}, {
    name: "lucas",
    last_name: "silva",
    city: "buenos aires",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: '6463dd68c0156c9ba5f4ec0a'
}, {
    name: "jose",
    last_name: "lopez",
    city: "villa carlos paz",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: '6463dd68c0156c9ba5f4ec0b'
}, {
    name: "eric",
    city: "resistencia",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: '6463dd68c0156c9ba5f4ec0c'
}, {
    name: "igna",
    last_name: "borraz",
    city: "rosario",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: '6463dd68c0156c9ba5f4ec0d'
}];

Author.insertMany(authors);