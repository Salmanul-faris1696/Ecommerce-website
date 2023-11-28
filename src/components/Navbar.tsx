import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import CartCountBadge from "./CartCountBadge";


const Navbar = () => {
  return (
    <div className=" sticky top-0 bg-white z-10 shadow-md">
        <div className="container hidden lg:block">
            <div className=" flex justify-between items-center p-8">
                <h1 className=" text-4xl font-medium"> Logo</h1>
                <div className="relative w-full max-w-[500px]">
                    <input type="text" name="" id=""  placeholder="search products " className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full  hover:scale-105 duration-300"/>
                    <IoIosSearch size={20} className="absolute top-0 right-0 mt-4 mr-5 text-gray-500 " />
                </div>

                <div className="flex gap-4 ">
                    <div className="icon__wrapper">
                        <FaUser />
                    </div>

                    <div className="icon__wrapper relative">
                        <MdShoppingCart />
                        <CartCountBadge size="w-[25px] h-[25px]"/>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Navbar