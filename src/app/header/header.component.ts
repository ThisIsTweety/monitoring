import {Component, Inject, OnInit} from '@angular/core';
import {AuthServiceService} from '../auth-service.service';
import {MatDialog} from '@angular/material/dialog';
import {NotificationDialogComponent} from '../notification/notification.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean;
  username: string = 'Guest';
  constructor(private auth: AuthServiceService,
              public dialog: MatDialog){
  }

  ngOnInit() {
    this.username = sessionStorage.getItem('loggedUser');
    if (this.username == 'admin') {
      this.isAdmin = true;
    }
  }

  openDialog() {
    this.dialog.open(NotificationDialogComponent);
  }
}


// // tslint:disable-next-line:component-class-suffix
// export class DialogDataExampleDialog {
//   constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}
// }
