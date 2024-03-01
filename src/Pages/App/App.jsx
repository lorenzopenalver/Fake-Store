import { useRoutes, BrowserRouter } from 'react-router-dom'

import { ShoppingCartProvider } from '../../Context/Context'
import { MyAccount } from "../MyAccount/MyAccount"
import { Home } from "../Home/Home"
import { MyOrders } from "../MyOrders/MyOrders"
import { MyOrder } from "../MyOrder/MyOrder"
import { NotFound } from "../NotFound/NotFound"
import { SignIn } from "../SignIn/SignIn"
import { NavBar } from '../../Components/Navbar/NavBar'

import '../../App.css'
import { CheckOutSideMenu } from '../../Components/CheckOutSideMenu/CheckOutSideMenu'
import { ClothesPage } from '../Clothes/Clothes'
import { ElectroncisPage } from '../Electronics/Electronics'
import { FurnituresPage } from '../Fornitures/Fornitures'
import { MiscellaneousPage } from '../Miscellaneous/Miscellaneous'
import { OthersPage } from '../Others/Others'

const AppRoutes = ()=>{
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element:  <MyAccount /> },
    { path: "/my-order", element:  <MyOrder /> },
    { path: "/my-orders",element:  <MyOrders /> },
    { path: "/my-orders/last",element:  <MyOrder /> },
    { path: "/my-orders/:id",element:  <MyOrder /> },
    { path: "/sign-in",element: <SignIn /> },
    { path: "/clothes",element: <ClothesPage /> },
    { path: "/electronics",element: <ElectroncisPage /> },
    { path: "/furnitures",element: <FurnituresPage /> },
    { path: "/miscellaneous",element: <MiscellaneousPage /> },
    { path: "/others",element: <OthersPage /> },
    
    { path: "/*", element: <NotFound /> }
  
  ])
  return routes
}

function App() {



  return (
    <>
    <ShoppingCartProvider>
    <BrowserRouter>
    <AppRoutes />
    <NavBar></NavBar>
    <CheckOutSideMenu />
    </BrowserRouter>
    </ShoppingCartProvider>
    </>
  )
}

export default App
