import dish1 from "../assets/platos/polloLimon.webp";
import dish2 from "../assets/1.jpg";
import dish3 from "../assets/platos/guacamoleAve.webp";
import dish4 from "../assets/platos/dumplings.webp";
import dish5 from "../assets/platos/albondigas.webp";
import dish6 from "../assets/platos/chalupas.webp";
import dish7 from "../assets/cesa.jpg";


import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Inicio", targetId: "init" },
  { text: "Platos", targetId: "dishes" },
  { text: "Sobre Mi", targetId: "about" },
  { text: "Misión", targetId: "mission" },
  // { text: "Experincias", targetId: "expertise" },
  { text: "Filosofia", targetId: "review" },
  // { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Pollo al Limon",
    description: "Creamy pasta with bacon and cheese",
  },
  {
    image: dish2,
    title: "Tacos de Birria",
    description: "Indian curry with tender chicken in spicy sauce",
  },
  {
    image: dish3,
    title: "Guacamole de Ave",
    description: "Fresh tomatoes, mozzarella, and basil with balsamic glaze",
  },
  {
    image: dish4,
    title: "Dumplings",
    description: "Assorted seafood and vegetables wrapped in seaweed and rice",
  },
  {
    image: dish5,
    title: "Albondigas Suecas",
    description: "Decadent chocolate cake with a gooey center",
  },
  {
    image: dish6,
    title: "Chalupas",
    description: "Crisp lettuce, olives, feta cheese, and tangy dressing",
  },
  {
    image: dish7,
    title: "Ensalada Cesar",
    description: "Crisp lettuce, olives, feta cheese, and tangy dressing",
  },
  // {
  //   image: dish7,
  //   title: "Pad Thai",
  //   description: "Stir-fried rice noodles with shrimp, tofu, and peanuts",
  // },
  // {
  //   image: dish8,
  //   title: "Peking Duck",
  //   description: "Crispy duck with pancakes, cucumber, and hoisin sauce",
  // },
  // {
  //   image: dish9,
  //   title: "Beef Wellington",
  //   description: "Tender beef filet wrapped in pastry with mushrooms and herbs",
  // },
  // {
  //   image: dish10,
  //   title: "Tiramisu",
  //   description:
  //     "Italian dessert with layers of coffee-soaked biscuits and mascarpone",
  // },
];

export const ABOUT = {
  header: "Amor por cocinar!",
  content:`
    Mi pasión se centra en la gastronomía regional, con un enfoque particular en las raíces de mi amada, Argentina. 
    Me enamora la rica herencia de la cocina italiana, peruana y francesa, pero también estoy emocionado por explorar nuevas 
    fronteras culinarias. Estamos incursionando en sabores de Oriente y del Medio Oriente, siempre buscando 
    fusionar lo tradicional con lo innovador. Sigo una frace que considero fundamental en mi vida gastronomica: 
    'El mayor logro de un chef, es hacer es que la gente sienta el sabor de la felicidad'. Cada creación que preparo está impregnada
    de esta creencia. Bienvenidos a mi cocina. Espero que disfruten de cada plato tanto como nosotros disfrutamos creándolos. `,
};

export const MISSION = "Ser ese restaurante, en el cual puedes rememorar los momentos mas felices de tu vida y poque no crear uno nuevo.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Italian",
    description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Japanese",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indian",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
];

export const REVIEW = {
  name: "Matias N Zamora",
  profession: "Creador de momentos",
  content: " “El mayor logro de un chef, es que la gente sienta el sabor de la Felicidad.” ",
};

export const CONTACT = [
  { key: "address", value: "La Rioja, Argentina, CP5300" },
  { key: "phone", value: "Phone: 2954-565149" },
  { key: "email", value: "Email: info@elobrero.com.ar" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/matias.zamora.5688/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://www.instagram.com/matynzamora/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  // {
  //   href: "https://x.com/",
  //   icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  // },
];
