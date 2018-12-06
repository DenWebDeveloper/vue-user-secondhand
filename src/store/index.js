import Vue from 'vue'
import Vuex from 'vuex'

import baseInfo from './modules/BaseInfo'
import groups from './modules/Groups'
import basket from './modules/Basket'
import search from './modules/Search'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: process.env.NODE_ENV === 'development',
	modules: {
		baseInfo,
		groups,
		basket,
		search
	}
})

