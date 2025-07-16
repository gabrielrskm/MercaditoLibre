import {countItemCart} from '../services/cart-service.ts'

export default function CartButtonNumber() {
   return (
      <>
         {
            countItemCart.value!==0?countItemCart.value:''
         }
      </>
   )
}