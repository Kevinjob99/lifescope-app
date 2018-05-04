import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';

Vue.use(Vuex);

require('whatwg-fetch');

const store = () => new Vuex.Store({
	state: {
		cookies: null,
		user: null,
		menu: {
			open: false
		},
    currentSearch: {
      id: null,
      count: null,
      query: null,
      filters: [],
      favorited: null,
      icon: null,
      icon_color: null,
      name: null
    },
    pageSize: null,
    pageOffset: null,
    searchEnded: false,
    view: null,

    eventSearch: []
	},

	getters: {
		authenticated (state) {
			return state.user != undefined;
		},
		dateJoined (state) {
			return moment(state.user.date_join).format('MMMM DD, YYYY')
		}
	},

	mutations: {
		SET_REQ: function(state, req) {
			state.cookies = req.cookies;
			state.user = req.user;
		}
	},

	actions: {
		async nuxtServerInit({ commit }, { req }) {
			await commit('SET_REQ', req);
		}
	}
});

export default store;
