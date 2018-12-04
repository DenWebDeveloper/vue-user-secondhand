import * as types from '../../actions.types'
import api from '../../../api/index'

export default {
  [types.GET_TOP_GROUPS]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      api('/groups', {
        params: {
          isTopLevelGroup: true
        }
      })
        .then(res => {
          commit(types.SET_TOP_GROUPS, { groups: res.data })
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  [types.GET_SUB_GROUPS]: ({ commit }, { id, groupsTopLevel, group }) => {
    return new Promise((resolve, reject) => {
      api(`/groups/${id}/groups`)
        .then(res => {
          group.subGroups = res.data // Модифікуємо основний обєкт по посиланні
          commit(types.SET_TOP_GROUPS, { groups: [...groupsTopLevel] }) //при збереженні створюємо новий
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },

}
