import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  product: any
  constructor(private productService: ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.router.snapshot.params['id'];
    this.productService.detail(id).subscribe((data) => {
      this.product = data
    })
    console.log(this.product)
    console.log(id)
  }

}
