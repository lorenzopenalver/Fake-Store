import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/Context";

const NavBar = () => {
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4'
    return (
        // Use la etiqueta NavLink y le pasé las propiedades to y className
        <>
            <nav className="flex fixed z-10 justify-between bg-black/60 backdrop-blur items-center top-0 w-full py-5 px-8 text-sm font-light">
                <ul className="flex items-center gap-3">
                    <li className="font-semibold text-lg">
                        <NavLink to={"/"}>
                            Shopi
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                         
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                            to={"/"}>
                            All
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? activeStyle : undefined} to={"/clothes"}>
                            Clothes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? activeStyle : undefined} to={"/electronics"}>
                            Electronics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? activeStyle : undefined} to={"/furnitures"}>
                            Fornitures
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? activeStyle : undefined} to={"/miscellaneous"}>
                        Miscellaneous
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? activeStyle : undefined} to={"/others"}>
                            Others
                        </NavLink>
                    </li>
                </ul>
                <ul className="flex items-center gap-2">
                    <li className="text-white/60">
                        example@gmail.com
                    </li>
                    <li>
                        <NavLink onClick={()=> context.setIsCheckoutSideMenuOpen(false)} className={({ isActive }) => isActive ? activeStyle : undefined} to={"/my-orders"}>
                            My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? activeStyle : undefined} to={"/my-account"}>
                            My Account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? activeStyle : undefined} to={"/sign-in"}>
                            Sign In
                        </NavLink>
                    </li>
                    <li className="text-white flex items-center cursor-pointer" onClick={()=> {
                         context.setIsCheckoutSideMenuOpen(!context.isCheckoutSideMenuOpen)
                         context.closeProductDetail();
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 pr-2 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>

                        {context.cartProducts.length}
                    </li>
                </ul>
            </nav>
        </>
    );
};


export { NavBar }