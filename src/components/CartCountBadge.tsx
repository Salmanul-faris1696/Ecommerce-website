import { useCartContext } from "../context/CartContext"

interface propsType {
    size:string 
}

const CartCountBadge : React.FC<propsType> = ({size}) => {
  const {product} = useCartContext()
  return (
    <div>
        <div className={`absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}>
            {product.length}
        

        </div>
    </div>
  )
}

export default CartCountBadge