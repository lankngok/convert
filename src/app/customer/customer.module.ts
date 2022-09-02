import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ProductsComponent } from './page/products/products.component';
import { ContactComponent } from './page/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './page/signin/signin.component';
import { SignupComponent } from './page/signup/signup.component';
import { CartComponent } from './page/cart/cart.component';
import { DetailComponent } from './page/detail/detail.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { FaqComponent } from './page/faq/faq.component';
import { BannerComponent } from './page/banner/banner.component';
import { ContentComponent } from './page/content/content.component';
import { MenuComponent } from './page/menu/menu.component';
import { OverlayComponent } from './page/overlay/overlay.component';
import { SpecialComponent } from './page/special/special.component';
import { ReviewComponent } from './page/review/review.component';




@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    SigninComponent,
    SignupComponent,
    CartComponent,
    DetailComponent,
    HeaderComponent,
    FooterComponent,
    FaqComponent,
    BannerComponent,
    ContentComponent,
    MenuComponent,
    OverlayComponent,
    SpecialComponent,
    ReviewComponent,
  
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
