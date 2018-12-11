import * as types from '../../actions.types'
import api from '../../../api/index'

export default {
  [types.GET_SEARCH_RESULTS]: ({ commit }, search) => {
    return new Promise((resolve, reject) => {
      api.get(`/products/search?value=${search}`)
        .then(res => {
          commit(types.SET_SEARCH_RESULTS, {
            results: res.data,
            search
          })
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
