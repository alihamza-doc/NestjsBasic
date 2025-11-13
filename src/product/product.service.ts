import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
     private products = [
        {id:1 , product: "mobile" , price: 20000},
        {id:2 , product: "table" , price: 10000},
        {id:3 , product: "computer" , price: 30000}
     ]
     getAllProducts(){
        return this.products;
     }
     getProductById(id:number){
        return this.products.find((product)=>
        product.id === id
        )
     }
}
