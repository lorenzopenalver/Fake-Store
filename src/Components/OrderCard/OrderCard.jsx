import PropTypes from 'prop-types'




const OrderCard = ({ id, title, imageUrl, price, handDelete })=>{
    OrderCard.propTypes = {
        id: PropTypes.node.isRequired,
        title: PropTypes.node.isRequired,
        imageUrl: PropTypes.node.isRequired,
        price: PropTypes.node.isRequired,
        handDelete: PropTypes.func

      }
    return(
        <div className='flex justify-between items-center p-8'>
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">${price}</p>
                {handDelete && <button onClick={()=> handDelete(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>}
            </div>
        </div>
    )
}


export { OrderCard }