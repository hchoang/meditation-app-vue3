import { createStore } from "vuex";

import rootMutation from './mutations.js'
import rootActions from './actions.js'
import rootGetters from './getters.js'

const store = createStore({
    state() {
        return {
            isPlaying: false,
            timeSelected: 0,
            vibeSelected: { value: 'birb' },
            step: 0,
            choices: [
                {
                    id: 1
                }
            ]
        }
    },
    mutations: rootMutation,
    actions: rootActions,
    getters: rootGetters
})

export default store
