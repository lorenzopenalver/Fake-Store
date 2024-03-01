import { useContext } from "react";
import { Card } from "../../Components/Card/Card";
import { Layout } from "../../Components/Layout/Layout";
import { ShoppingCartContext } from "../../Context/Context";
import { PorductDetail } from "../../Components/ProductDetail/ProductDetail";



function ClothesPage() {
    const context = useContext(ShoppingCartContext);
    return (
        <Layout>
           <p className="text-white">Clothes</p>
            <div className="grid grid-cols-4 gap-4 mt-10 w-full max-w-screen-lg">
          {
            context.items?.map( (item)=> (
            item.category.name === "Clothes" &&  <Card data={item} key={item.id}/>
            ) )
          }
          </div>
          <PorductDetail />
        </Layout>
    )
}


export {ClothesPage}