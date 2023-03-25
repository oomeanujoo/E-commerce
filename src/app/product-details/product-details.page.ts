import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  getValue: any;

  constructor(public navCtrl: NavController, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe((resp) => {
      this.getValue = resp
    });
  }


  ngOnInit() {
    console.log('this.getValue=>', this.getValue)

  }
  goToBack() {
    this.navCtrl.navigateForward('/menu/home');
  }
}
