import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
import router from "@/router";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import authenticateUser from '@/services/authenticateUser.js';

const dataUrl = "https://surpass-fitness.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: false,
    token: null,
    msg: null,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setSpinner(state, value) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
  },
  actions: {
    // User
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${dataUrl}users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    async fetchUser(context) {
      try {
        const { data } = await axios.get(`${dataUrl}user/:id`);
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },

    async registerUser(context, payload) {
      try {
        const { msg } = (await axios.post(`${dataUrl}user`, payload)).data;
        if (msg) {
          sweet({
            title: "Registration Complete",
            text: msg,
            icon: "success",
            timer: 3000,
          });
          context.dispatch("fetchUsers");
          router.push({ name: "login" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 3000,
          });
        }
      } catch (e) {
        context.commit(console.log(e));
      }
    },
    // Product
    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${dataUrl}products`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    async fetchProduct(context, prodID) {
      try {
        const { data } = await axios.get(`${dataUrl}product/${prodID}`);
        context.commit("setProduct", data.result);
      } catch (e) {
        context.commit("setMsg", "An error occured");
      }
    },
    async addProduct(context, payload) {
      try {
        const response = await axios.post(`${dataUrl}product`, payload);
        if (response) {
          context.commit("addProduct", response.data);
          context.dispatch("fetchProducts");
          console.log(response.data);
        } else {
          context.commit("setMsg", "An error has occured");
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    async deleteProduct(context, prodID) {
      try {
        const response = await axios.delete(`${dataUrl}product/${prodID}`);
        if (response) {
          context.commit("deleteProduct", response);
          context.dispatch("fetchProducts");
        } else {
          context.commit("setMsg", "An error has occured");
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    async editProduct(context, payload) {
      try {
        const response = await axios.patch(
          `${dataUrl}product/${payload.prodID}`,
          payload
        );
        if (response) {
          context.commit("editProduct", response);
          context.dispatch("fetchProducts");
        } else {
          context.commit("setMsg", "An error has occured");
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
  },
  modules: {},
});
