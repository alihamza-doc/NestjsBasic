import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    getCategory(){
        return ["mobiles","laptops","computers"]
    }
}
