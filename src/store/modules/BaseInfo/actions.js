import * as types from '../../actions.types'
import api from '../../../api/index'

export default {
  [types.GET_BASE_INFO]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      api.get('/base-information')
        .then(res => {
          commit(types.SET_BASE_INFO, { info: res.data })
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
