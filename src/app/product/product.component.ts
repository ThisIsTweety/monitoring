import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ProductItem } from '../products/productItem';
import {AddToCartService} from "../add-to-cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Array<ProductItem>;
  constructor(private dataservice: DataService,
              private dataCart: AddToCartService) {}

  ngOnInit(): void {
    this.products = this.dataservice.getProducts();
  }
  setNewPrice(newprice: number, pid: number) {
    this.dataservice.updatePrice(newprice, pid);
    this.dataCart.updatePriceForCard(pid, newprice);
  }
}
