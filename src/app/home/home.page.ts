import { NavController } from '@ionic/angular';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage {
  searchString = '';
  constructor(public navCtrl: NavController, private http: HttpClient, public hs: HeroService, public router: Router) {

  }


  items: any = []

  ngOnInit() {

    this.CommonAPI()
  }

  goToCart() {
    this.navCtrl.navigateForward('cart');
  }
  goToProduct(singleItem: any) {
    this.router.navigate(['product-details'], {
      queryParams: singleItem
    });
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.CommonAPI()
      event.target.complete();
    }, 2000);
  };

  ionPull(event: any) {
    console.log('ion pull event triggered!!');
    // console.log(event.target);
  }
  ionStart(event: any) {
    console.log('ion start event triggered!!');
    // console.log(event.target);
  }

  autoComplete: any = [];
  CommonAPI() {
    this.hs.CommonAPI({
      "product": { "_": "commerce.product" },
      "price": { "_": "commerce.price" },
      "color": { "_": "commerce.color" },
      "imageUrl": { "_": "image.imageUrl" },
    })
      .subscribe(resp => {
        console.log('resp=>', resp)
        this.items = resp;
        for (let index = 0; index < this.items.length; index++) {
          this.autoComplete.push(this.items[index].product);
          console.log('autoComplete=>', this.autoComplete)
        }
      })
  }






}







