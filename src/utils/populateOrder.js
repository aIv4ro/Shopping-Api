export const populateOrder = async order => order.populate(
  [
    {
      path: 'orderProducts',
      populate: {
        path: 'product',
        select: 'increment unit name description id'
      }
    },
    {
      path: 'fromUser',
      select: '-hashedPassword -devices -__v'
    },
    {
      path: 'toUser',
      select: '-hashedPassword -devices -__v'
    }
  ]
);