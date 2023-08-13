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
                    id: 1,
                    name: '10 minutes',
                    imgSrc: require("@/assets/images/Bouton_10_minutes.png"),
                    category: 'timer',
                    value: 600,
                },
                { 
                    id: 2,
                    name: '20 minutes',
                    imgSrc: require("@/assets/images/Bouton_20_minutes.png"),
                    category: 'timer',
                    value: 1200,
                },
                { 
                    id: 3,
                    name: '30 minutes',
                    imgSrc: require("@/assets/images/Bouton_30_minutes.png"),
                    category: 'timer',
                    value: 1800,
                },
                {
                    id: 4,
                    name: 'In The Space',
                    imgSrc: require("@/assets/images/Bouton_Space.png"),
                    category: 'vibe',
                    value: 'space',
                },
                {
                    id: 5,
                    name: 'On The Beach',
                    imgSrc: require("@/assets/images/Bouton_Beach.png"),
                    category: 'vibe',
                    value: 'beach',
                },
                {
                    id: 6,
                    name: 'Under The Rain',
                    imgSrc: require("@/assets/images/Bouton_Rain.png"),
                    category: 'vibe',
                    value: 'rain',
                },
            ]
        }
    },
    mutations: rootMutation,
    actions: rootActions,
    getters: rootGetters
})

export default store
