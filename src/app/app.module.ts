import * as platformBrowser from '@angular/platform-browser';
import * as core from '@angular/core';
import * as forms from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductFilterPipe } from './components/products/product-filter.pipe';
import { OwlModule } from 'ngx-owl-carousel';
import { SliderComponent } from './components/slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { DiscountedComponent } from './components/discounted/discounted.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { StoreComponent } from './components/store/store.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { HomeComponent } from './components/home/home.component';
import { SpecialofferComponent } from './components/specialoffer/specialoffer.component';
import { WallComponent } from './components/wall/wall.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';








@core.NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductFilterPipe,
    SliderComponent,
    FooterComponent,
    DiscountedComponent,
    StoreComponent,
    OpportunitiesComponent,
    HomeComponent,
    SpecialofferComponent,
    WallComponent,
    ContactComponent,
    ShoppingCartComponent

     
  ],
  imports: [
    platformBrowser.BrowserModule,
    AppRoutingModule,
    forms.FormsModule,
    OwlModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
