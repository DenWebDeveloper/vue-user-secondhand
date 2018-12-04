import * as types from '../../actions.types'

export default {
	[types.SET_TOP_GROUPS]: (state, payload) => {
    console.log(payload.groups.slice() === payload.groups)
    state.groupsTopLevel = payload.groups.slice()
	}
}
