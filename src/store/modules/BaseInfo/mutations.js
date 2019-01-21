import * as types from '../../actions.types'

export default {
  [types.SET_BASE_INFO]: (state, payload) => {
    state.info = payload.info
  },
  [types.SET_SOCIALS]: (state, payload) => {
    state.socials = { ...state.socials, ...payload.socials }
  },
  [types.SET_ADDITIONAL_INFO]: (state, payload) => {
    state.additionalData = payload
  }
}
