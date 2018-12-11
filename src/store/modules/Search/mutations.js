import * as types from '../../actions.types'

export default {
  [types.SET_SEARCH_RESULTS]: (state, { results, search }) => {
    state.results = results
    state.search = search
  }
}
