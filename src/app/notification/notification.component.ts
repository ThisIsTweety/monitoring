import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddToCartService} from '../add-to-cart.service';
import {NotificItem} from '../products/productItem';

@Component({
  selector: 'app-notification',
  templateUrl: 'notification.component.html',
})
export class NotificationDialogComponent implements OnInit {
  public notificMess: Array<NotificItem>;
  constructor(private cartNotific: AddToCartService) {
    this.notificMess = cartNotific.notifications;
  }
  ngOnInit() {
    console.log(this.cartNotific.notifications);
    console.log(this.notificMess.length);
  }
  closeNotific(item: NotificItem) {
    this.notificMess.splice(this.notificMess.indexOf(item),1);
  }
}
