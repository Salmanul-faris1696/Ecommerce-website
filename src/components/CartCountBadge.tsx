
interface propsType {
    size:string 
}

const CartCountBadge : React.FC<propsType> = ({size}) => {
  return (
    <div>
        <div className={`absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}>
            0
        

        </div>
    </div>
  )
}

export default CartCountBadge