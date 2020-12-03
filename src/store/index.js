import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      is_logged: false,
      categories: [],
      categoryList: [],
      product: null,
      credentials: null
  },
  mutations: {
      setStatus(state, data) {
          state.is_logged = data
      },
      setProducts(state, payload) {
          Vue.set(state.categories = payload)
      },
      setCategoryList(state, payload) {
          state.categoryList = payload
      },
      setProduct(state, payload) {
          Vue.set(state.product, payload)
      },
      setCredentials(state, payload) {
        state.credentials = payload
      }
  },
  actions: {
      saveStatus(context, data) {
          context.commit('setStatus', data)
      },
      saveCategories(context) {
          function getProducts() {
            return axios.get('/products/')
          }
          function getCategories() {
              return axios.get('/category/')
          }
          Promise.all([getProducts(), getCategories()])
            .then(response => {
                context.commit('setProducts', response[0].data)
                context.commit('setCategoryList', response[1].data)
            })
          },
      saveProduct(context, id) {
          axios.get(`/products/${id}`)
            .then(response => {
                context.commit('setProduct', response.data)
                console.log(this.state.product)
            })
      },
  },
  getters: {
      getStatus(state) {
          return state.is_logged
      },
      getProducts(state) {
          return state.categories
      },
      getCategoryList(state) {
          return state.categoryList
      },
      getProduct(state) {
          return state.product
      },
      getCredentials(state) {
        return state.credentials
      }
  }
})
