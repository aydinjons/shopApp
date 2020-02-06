import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { HomeComponent } from './components/home/home.component';
import { SpecialofferComponent } from './components/specialoffer/specialoffer.component';
import { AppResolver } from './services/app-resolver.service';
import { WallComponent } from './components/wall/wall.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'opportunities',
    component: OpportunitiesComponent
  },
  {
    path: 'specialoffer',
    component: SpecialofferComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'shopcart',
    component: ShoppingCartComponent

  },
  {
    path:'category/:id',
    component: WallComponent,
    resolve:{ rs: AppResolver}

  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AppResolver]
})
export class AppRoutingModule { }


