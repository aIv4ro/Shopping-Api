export const populateOrder = async order => order.populate('orderProducts.product', 'name description id');