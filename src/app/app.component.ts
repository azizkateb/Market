import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TrendingComponent } from './trending/trending.component';
import { ProductsComponent } from "./products/products.component";
import { PayementComponent } from "./payement/payement.component";
import { ContactComponent } from "./contact/contact.component";
import { FootComponent } from "./foot/foot.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HomeComponent, SideNavComponent, TrendingComponent, ProductsComponent, PayementComponent, ContactComponent, FootComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // fixed from styleUrl
})
export class AppComponent {
  menuOpen = false;
  title = 'angular';


}
