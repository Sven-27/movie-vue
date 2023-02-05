import { createStore } from 'vuex'
import movies from './modules/movie-store'

export default createStore({
  state: {
    message: '',
    counter: 0,
  },
  getters: {
  },
  mutations: {
    SAVE_MESSAGE(state, payload) {
      state.message = payload
    },
    RESET_MESSAGE(state) {
      state.message = ''
    },
    INCREMENT_COUNTER(state, payload) {
      if(!payload) {
        state.counter += 1
      }else {
        state.counter += payload
      }
    },
    DECREMENT_COUNTER(state, payload) {
      if(!payload) {
        state.counter -= 1
      }else {
      state.counter -= payload
      }
    }
  },
  actions: {
    saveMessage(context, value) {
      context.commit('SAVE_MESSAGE', value)
      // console.log(value)
    },
    resetMessage(context) {
      context.commit('RESET_MESSAGE')
    },
    incrementCounter(context, value) {
      context.commit('INCREMENT_COUNTER', value)
    },
    decrementCounter(context, value) {
      context.commit('DECREMENT_COUNTER', value)
    }
  },
  modules: {
    movies
  }
})
