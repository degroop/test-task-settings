import Vue from 'vue'
import Vuex from 'vuex'

export interface AppState {
    currentPage: string;
    userAvatar: string;
}
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentPage: 'Settings',
        userAvatar: 'https://sun9-2.userapi.com/c852020/v852020115/1999ee/7GC_NgH5q0M.jpg?ava=1'
    } as AppState,
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})
