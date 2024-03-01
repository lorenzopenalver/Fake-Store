import { useContext, } from "react"

import { Card } from "../../Components/Card/Card"
import { Layout } from "../../Components/Layout/Layout"
import { PorductDetail } from "../../Components/ProductDetail/ProductDetail"
import { ShoppingCartContext } from "../../Context/Context";




function Home() {
  const context = useContext(ShoppingCartContext);
  const renderView = ()=>{
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          <div className="grid grid-cols-4 gap-4 mt-10 w-full max-w-screen-lg">
          {
            context.filteredItems?.map( (item)=> (
            <Card data={item} key={item.id}/>
            ) )
          }
          </div>
        )
      }else{
         return (<div>Search Not Found</div>)
      }
      
    }else{
      return (
        <div className="grid grid-cols-4 gap-4 mt-10 w-full max-w-screen-lg">
        {
          context.items?.map( (item)=> (
          <Card data={item} key={item.id}/>
          ) )
        }
        </div>
      )
    }
  }
  return (
    <>
    <Layout>
      <input 
      onChange={(e)=>{
        context.setSearchByTitle(e.target.value)
      }}
      type="text" placeholder="Search Product" className=" w-96 mt-7 bg-black/10 outline-none text-white border border-neutral-500 px-3 py-1 rounded-lg focus:border-white" />
      {renderView()}
       <PorductDetail />
    
      
    </Layout>
    </>
  )
}

export  {Home}
