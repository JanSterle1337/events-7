import { createApp } from 'vue';
import { createStore } from 'vuex';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

export default createStore({
    state: {
        events: [],
        event: null,
        name: 'Jancek',
        sortedEvents: [],
    },
    mutations: {

    },
    actions: {
        
    },
    getters: {

    },
    modules: {

    }
})

