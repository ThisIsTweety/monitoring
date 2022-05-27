export class ProductItem {
  id: number;
  name: string;
  category: string;
  price: number;
  imgPath: string;

  constructor(
    id: number,
    name: string,
    category: string,
    price: number,
    imgPath: string
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.imgPath = imgPath;
  }
}

export class NotificItem {
  name: string;
  price: number;

  constructor(
    name: string,
    price: number
  ) {
    this.name = name;
    this.price = price;
  }
}
