/**
 * This function calculates a total price of an order given  
 * @param {Array} products cartProduct: Array of Objects
 * @returns {Number} Total price
 */

export const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0)
} 