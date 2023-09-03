require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Pizza = require('./models/pizza');

(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Non Veg'},
    {name: 'Veg'},
    {name:'Beverages'},
    {name: 'Desserts'}
    
  ]);


  await Pizza.deleteMany({});
const pizzas = await Pizza.create([
  {
    name: "PEPPER BARBECUE CHICKEN",
    varients: ["small", "medium", "large"],
    prices: 
      {
        small: 12,
        medium: 15,
        large: 20,
      },
    
    category: categories[0],
    image: "https://www.dominos.co.in/files/items/Pepper_Barbeque.jpg",
    description: "Pepper Barbecue Chicken I Cheese",
  },
  {
    name: "Non Veg Supreme",
    varients: ["small", "medium", "large"],
    prices: 
      {
        small: 12,
        medium: 15,
        large: 20,
      },
    
    category: categories[0],
    image: "https://www.dominos.co.in/files/items/Non-Veg_Supreme.jpg",
    description:
      "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers",
  },
  {
    name: "Golden Corn Pizza",
    varients: ["small", "medium", "large"],
    prices: 
      {
        small: 12,
        medium: 15,
        large: 20,

      
      },
    
    category: categories[1],
    description:
      "Corn over the base makes it look beautiful. It is served with tomato sauce and chili flakes are sprinkled over the topping according the taste. After mixing all the ingredients, it is baked by adding cheese and corn for added flavor to pizza. Corn adds health and sweet taste to the pizza.",
    image: "https://www.crazymasalafood.com/wp-content/images/golden-1.jpg",
  },
  {
    name: "Jalapeno & Red Paprika Pizza",
    varients: ["small", "medium", "large"],
    prices: 
      {
        small: 12,
        medium: 15,
        large: 20,
      },
    
    category: categories[1],
    image: "https://www.crazymasalafood.com/wp-content/images/jalepeno.jpg",
    description:
      "This pizza is amazing and can become more delicious if we will add some more cheese in it. Ingredients are yeast, sugar, olive oil, salt, and all-purpose flour in a big bowl. After mixing all the ingredients, it is baked by adding Jalapeno and Paprika with corns over the cheese layer. The base is made crunchy to give it best taste. It can be made more tasty by sprinkling chili flakes and Oregano as per the taste.",
  },
  {
    name: "Margerita",
    varients: ["small", "medium", "large"],
    prices: 
      {
        small: 12,
        medium: 15,
        large: 20,
      },
    
    category: categories[1],
    image:
      "https://cdn.loveandlemons.com/wp-content/uploads/2019/09/margherita-pizza-500x500.jpg",
    description:
      "The pizza base is made by mixing yeast, sugar, olive oil, salt, and all-purpose flour in a big bowl. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding single layer of cheese over it. It is mouth-watering pizza for cheese lovers.",
  },
  {
    name: "Double Cheese Margherita Pizza",
    varients: ["small", "medium", "large"],
    prices: 
      {
        small: 12,
        medium: 15,
        large: 20,
      },
    
    category: categories[1],
    image: "https://www.crazymasalafood.com/wp-content/images/double-1.jpg",
    description:
      "This is a plain pizza which have cheese on it which is margherita and is delicious because of the loads of cheese. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding double layer of cheese over it",
  },
  {
    name: "Pepsi(475ML)",
    varients: ["small", "medium", "large"],
    prices: 
      {
        small: 5,
        medium: 6,
        large: 7,
      },
    
    category: categories[2],
    image: "https://www.dominos.co.in/files/items/pepsi.png",
    description: "Soft Drink",
  },
  {
    name: "7UP(475ML)",
    varients: ["small", "medium", "large"],
    prices: 
      {
        small: 5,
        medium: 6,
        large: 7,
      },
    
    category: categories[2],
    image: "https://www.dominos.co.in/files/items/7up.png",
    description: "Soft Drink",
  },
  {
    name: "Lipton Ice Tea(250ML)",
    varients: ["small", "medium", "large"],
    prices: 
      {
        small: 5,
        medium: 6,
        large: 7,
      },
    
    category: categories[2],
    image: "https://www.dominos.co.in/files/items/lipton.png",
    description: "Soft Drink",
  },
  {
    name: "Lava Cake",
    varients: ["small", "medium", "large"],
    prices: 
      {
        small: 10,
        medium: 15,
        large: 20,
      },
    
    category: categories[3],
    image: "https://www.dominos.co.in/files/items/choco-lava-cake-771.jpg",
    description: "Filled with delicious molten chocolate inside.",
  },
  {
    name: "ButterScotch Mousse Cake",
    varients: ["small", "medium", "large"],
    prices: 
      {
        small: 10,
        medium: 15,
        large: 20,
      },
    
    category: categories[3],
    image: "https://www.dominos.co.in/files/items/170046_BMC_image_for_Website_272X272.jpg",
    description: "A Creamy & Chocolaty indulgence with layers of rich, fluffy Butterscotch Cream and delicious Dark Chocolate Cake, topped with crunchy Dark Chocolate morsels - for a perfect dessert treat!",
  },


  ]);
  console.log(pizzas)

  process.exit();

})();