import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
declare const $: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  id: string;
  product: Product = {} as Product;
  quantity:number = 1;
  recommendedProds: Array<Product> = [];
  constructor(private route: ActivatedRoute , private productService:ProductService, private cartService:CartService) {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    
  }

  ngOnInit(): void {
    this.runJqueryForCarousel();
    console.log(this.id);
    this.productService.getProductById(this.id).subscribe((res:any)=>{
      this.product = res.data;
      this.getRecommendedProds(res.data.category_id);
    },(err:any)=>{console.log(err)})
    console.log("hello");
  }

  incQuantity(){
    this.quantity++;
  }
  decQuantity(){
    if(this.quantity>1) this.quantity--;
  }
  addToCart(){
    for (let i = 0; i< this.quantity;i++)
      this.cartService.addToCart(this.product);
  }
  getRecommendedProds(cat_id:string){
    this.productService.getProductsByCat(cat_id).subscribe((res:any)=>{
      this.recommendedProds = res.data;
    },(err:any)=>{console.log(err)})
  }
  runJqueryForCarousel() {
    $('.related-carousel').owlCarousel({
      loop: true,
      margin: 29,
      nav: false,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
      },
    });
  }

 
}
