import Vue from 'vue';
import Vuex from 'vuex';

/* */

Vue.use(Vuex);

/* */

const store = new Vuex.Store({

    strict: process.env.NODE_ENV !== 'production',

    state: {

        message : 'Hello e.Mix!'

    },

    mutations : {

        CHANGE_MESSAGE(state, message){

            state.message = message;

        }

    },

    actions: {

        changeMessage(context, message){

            return new Promise(resolve => {

                context.commit('CHANGE_MESSAGE', message);

                /* */

                resolve(message);

            });

        },

    },

    getters: {

        message : state => state.message

    }

});

export default store;
