import { shipping } from "./shipping";

export class finalOrder{
    sub_total_price: number | undefined;
    shipping: number | undefined;
    total_price: number | undefined;
    user_id: string | undefined;
    order_date: string | undefined;
    order_details: [] | undefined;
    shipping_info: shipping | undefined;


    constructor(){
        
    }
    

}