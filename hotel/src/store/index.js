import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentPage: '',
    },
    mutations: {
        setCurrentPage(state, page) {
            state.currentPage = page;
        },
    },
    actions: {
        setPage({ commit }, page) {
            commit('setCurrentPage', page);
        },
    },
    modules: {},
});
