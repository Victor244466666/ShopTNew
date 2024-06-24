import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    selectedProduct: {},
    cart: []
  },
  getters: {
    products: state => state.products,
    selectedProduct: state => state.selectedProduct,
    cart: state => state.cart
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setSelectedProduct(state, product) {
      state.selectedProduct = product;
    },
    addToCart(state, product) {
      const item = state.cart.find(item => item.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('https://alvahtek.com/projects/ota/group2/getproductapi.php');
        commit('setProducts', response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async fetchProductById({ commit }, id) {
      try {
        const response = await axios.get(`https://alvahtek.com/projects/ota/group2/getproductapi.php?id=${id}`);
        commit('setSelectedProduct', response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
  }
});
