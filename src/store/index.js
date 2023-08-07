import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: {
      total: 0,
      count: 0,
      items: [],
      priceItem: 0
    },
    jsonData: [],
  },

  getters: {
    getCart(state) {
      return state.cart
    },
    getCartData(state){
      return state.name
    }
  },
  actions: {
    fetchJsonData({ commit }) {
      return axios.get('http://localhost:3000/PlantFromData')
        .then(response => {
          commit('setJsonData', response.data)
        })
    },
  },
  mutations: {
    setJsonData(state, data) {
      state.jsonData = data
    },
    incrementCart(state, item) {
      const existingItem = state.cart.items.find(cartItem => cartItem.name === item.name)
      if (existingItem) {
          existingItem.quantity++
          existingItem.price
      } else {
          state.cart.items.push({
              name: item.name,
              price: item.price,
              quantity: 1,
          })
      }
      state.cart.total += item.price
      state.cart.count++
    },
    decrementCart(state, item) {
      const existingItem = state.cart.items.find(cartItem => cartItem.name === item.name)
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--
          existingItem.price 
        } else {
          state.cart.items = state.cart.items.filter(cartItem => cartItem.name !== item.name)
        }
        state.cart.total -= item.price
        state.cart.count--
      }
    },    
  }
})

