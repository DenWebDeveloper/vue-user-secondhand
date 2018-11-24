import * as types from '../../actions.types'

export default {
	[types.SET_BASE_INFO]: (state, payload) => {
    state.info = payload.info
	}
}
