import * as types from '../../actions.types'

export default {
	[types.SET_SEARCH_RESULTS]: (state, payload) => {
    state.results = payload.results
	}
}
