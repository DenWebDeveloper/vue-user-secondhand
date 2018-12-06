import * as types from '../../actions.types'

export default {
  [types.ADD_PRODUCT_BASKET]: (state, { name, id, price }) => {
    const products = Object.assign({}, state.products)
    if (typeof products[id] === 'undefined') {
      products[id] = {
        name,
        id,
        price,
        count: 1
      }
    } else {
      products[id].count++
    }
    state.products = products
  },
  [types.CHANGE_COUNT_PRODUCT_BASKET]: (state, { id, count }) => {
    const products = Object.assign({}, state.products)
    products[id] = {
      ...products[id],
      count
    }
    state.products = products
  },
  [types.DELETE_PRODUCT_BASKET]: (state, { id }) => {
    const products = Object.assign({}, state.products)
    delete products[id]
    state.products = products
  },
  [types.CLEAN_PRODUCT_BASKET]: (state) => {
    state.products = {}
  }
}
