import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  goToBack() {
    this.navCtrl.navigateForward('/menu/home');
  }
}
