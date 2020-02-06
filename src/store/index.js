import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showWelcome: JSON.parse(localStorage.getItem("showWelcome")) || 'yes'
    },
    mutations: {
        offWelcome(state, payload) {
            state.showWelcome = 'no'
            localStorage.setItem("showWelcome", JSON.stringify(state.showWelcome))
        }
    },
    actions: {},
    getters: {},
    modules: {}
})