import { createApp } from 'vue';
import { createStore } from 'vuex';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

export default createStore({
    state: {
        sortKey: "eventID"
    },
    mutations: {
        updateSortKey(state,newVal) {
            state.sortKey = newVal;
        }
    },
    actions: {
        updateSortKey( { commit }, newVal) {
            commit('setSortKey',newVal);
        }
    },
    getters: {

    },
    modules: {

    }
})

