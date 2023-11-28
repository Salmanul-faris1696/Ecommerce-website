import {RxCross1} from "react-icons/rx"
import { useCartContext } from "../context/CartContext"
interface propsType {
    img : string
    name : string
    price : string
}

const CartProduct:React.FC<propsType> = ({img , name, price}) => {
    const { removeFromCart } = useCartContext(); // Assuming removeFromCart function exists in your context

    const handleRemoveFromCart = () => {
        removeFromCart({ img, name, price }); // Call the removeFromCart function from your context
    };

  return (
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
            <img src={img} alt="" className="h-[100px]" />
            <div>
                <h3 className="font-medium">{name}</h3>
                <p className="text-gray-600">1 X {price}</p>
            </div>
        </div>

        <RxCross1 onClick={handleRemoveFromCart} className="cursor-pointer"/>
    </div>
  )
}

export default CartProduct