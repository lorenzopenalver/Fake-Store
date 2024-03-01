import { useContext } from "react";
import { Card } from "../../Components/Card/Card";
import { Layout } from "../../Components/Layout/Layout";
import { ShoppingCartContext } from "../../Context/Context";
import { PorductDetail } from "../../Components/ProductDetail/ProductDetail";



function OthersPage() {
    const context = useContext(ShoppingCartContext);
    const regEx = "Miscellaneous"&& "Furniture"&& "Electronics" && "Clothes"
    return (
        <Layout>
           <p className="text-white">Others</p>
            <div className="grid grid-cols-4 gap-4 mt-10 w-full max-w-screen-lg">
          {
            context.items?.map( (item)=> (
            !item.category.name.includes(regEx) &&  <Card data={item} key={item.id}/>
            ) )
          }
          </div>
          <PorductDetail />
        </Layout>
    )
}


export {OthersPage}