import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DataService } from './data.service';
import { PriceUpdaterComponent } from './price-updater/price-updater.component';
import { UsersComponent } from './users/users.component';
import { RegistrationComponent } from './registration/registration.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ElectronicsService } from './electronics.service';
import { BooksService } from './books.service';
import {NotificationDialogComponent} from './notification/notification.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    ProductComponent,
    ShoppingCartComponent,
    HeaderComponent,
    FooterComponent,
    PriceUpdaterComponent,
    NotificationDialogComponent,
    UsersComponent,
    RegistrationComponent,
    ElectronicsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [
    { provide: DataService, useClass: DataService },
    { provide: DataService, useClass: ElectronicsService },
    { provide: DataService, useClass: BooksService },
  ],
  bootstrap: [AppComponent],
  entryComponents: [NotificationDialogComponent]
})
export class AppModule {}
