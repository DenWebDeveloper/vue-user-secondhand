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
  },
  [types.GET_SOCIALS]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      const requests = [
        api.get('/portal-parameters/socials-instagram'),
        api.get('/portal-parameters/socials-facebook'),
        api.get('/portal-parameters/socials-telegram'),
        api.get('/portal-parameters/socials-twitter')
      ]
      Promise.all(requests)
        .then(responses => {
          const socials = responses.reduce((acc, { data }) => {
            acc[data.key] = data.value
            return acc
          }, {})
          commit(types.SET_SOCIALS, {
            socials: {
              telegram: socials['socials-telegram'],
              twitter: socials['socials-twitter'],
              facebook: socials['socials-facebook'],
              instagram: socials['socials-instagram'],
            }
          })
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  [types.GET_ADDITIONAL_INFO]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      const requests = [
        api.get('/portal-parameters/email'),
        api.get('/portal-parameters/schedule-first-line'),
        api.get('/portal-parameters/schedule-second-line')
      ]
      Promise.all(requests)
        .then(responses => {
          const socials = responses.reduce((acc, { data }) => {
            acc[data.key] = data.value
            return acc
          }, {})
          commit(types.SET_ADDITIONAL_INFO, {
            email: socials['email'],
            scheduleFirst: socials['schedule-first-line'],
            scheduleSecond: socials['schedule-second-line'],
          })
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
