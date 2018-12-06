export default {
  getProductsBaskets: state => {
    return Object.values(state.products)
  },
  getCountProducts: state => {
    return Object.values(state.products)
      .reduce((acc, curr) => {
        return acc + curr.count
      }, 0)
  },
  getAllPrice: state => {
    return Object.values(state.products)
      .reduce((acc, curr) => {
        return acc + (+curr.count * +curr.price)
      }, 0)
  }
}
