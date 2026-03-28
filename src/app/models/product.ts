
export class Product {
  id! : number;
  name? : string;
  price? : number;
  nuts? : boolean;
  image? : string;
  vegeterian? : boolean;
  spiciness? : spicinessEnum;
  categoryId? : number
}


export enum spicinessEnum {
  noSpice =0,
  lessSpice = 1,
  medSpice = 2,
  moreSpice = 3,
  maxSpice = 4
}


// {
//     "id": 1,
//     "name": "Laab kai chicken salad",
//     "price": 10,
//     "nuts": true,
//     "image": "https://course-jsbasic.javascript.ru/assets/products/laab_kai_chicken_salad.png",
//     "vegeterian": false,
//     "spiciness": 2,
//     "categoryId": 1
//   },