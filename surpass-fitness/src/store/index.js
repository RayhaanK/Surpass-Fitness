import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
import router from "@/router";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import authenticateUser from "@/services/authenticateUser.js";
const cartList = JSON.parse(localStorage.getItem('cart')) || []

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
    cart: cartList
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
    addCart(state, product) {
      state.cart.push(product);
    },
    removeCartItem(state, productIndex) {
      state.cart.splice(productIndex, 1);
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
    async loginUser(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${dataUrl}login`, payload)
        ).data;
        console.log(msg, token, result);
        if (result) {
          context.commit("setUser", { result, msg });
          cookies.set("LegitUser", { msg, token, result });
          localStorage.setItem("user", JSON.stringify(result))
          authenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `${result?.firstName} ${result?.lastName} has logged in!`,
            icon: "success",
            timer: 3000,
          });
          router.push({ name: "home" });
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
    async deleteUser(context, userID) {
      try {
        const { data } = await axios.delete(`${dataUrl}user/${userID}`);
        if (data) {
          context.commit("deleteProduct", response);
          context.dispatch("fetchProducts");
        } else {
          context.commit("setMsg", "An error has occured");
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    async editUser(context, payload) {
      console.log(payload);
      try {
        const res = await axios.patch(`${dataUrl}user/${payload.userID}`, payload.data);
        const { msg, err } = res.data;
        if (msg) {
          context.dispatch("fetchUsers");
          context.commit("setUser", msg);
        } else {
          context.commit("setMsg", e);
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async AddUser(context, payload) {
      try {
        const { msg } = (await axios.post(`${dataUrl}user`, payload)).data;
        if (msg) {
          sweet({
            title: "User Added",
            text: msg,
            icon: "success",
            timer: 3000,
          });
          context.dispatch("fetchUsers");
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
    async fetchTreadmills(context) {
      try {
        const { data } = await axios.get(`${dataUrl}products/treadmills`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit("setMsg", "An error occured");
      }
    },
    async fetchExerciseBikes(context) {
      try {
        const { data } = await axios.get(`${dataUrl}products/exercisebikes`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit("setMsg", "An error occured");
      }
    },
    async fetchBenches(context) {
      try {
        const { data } = await axios.get(`${dataUrl}products/benches`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit("setMsg", "An error occured");
      }
    },
    async fetchYogaMats(context) {
      try {
        const { data } = await axios.get(`${dataUrl}products/yogamats`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit("setMsg", "An error occured");
      }
    },
    async fetchWeights(context) {
      try {
        const { data } = await axios.get(`${dataUrl}products/weights`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit("setMsg", "An error occured");
      }
    },
    async fetchDumbbells(context) {
      try {
        const { data } = await axios.get(`${dataUrl}products/dumbbells`);
        context.commit("setProducts", data.results);
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

    // Cart
   async addToCart(context, product) {
    context.commit('addCart', product)
    localStorage.setItem('cart', JSON.stringify(context.state.cart))
   },

   async removeFromCart(context, productIndex) {
    context.commit('removeCartItem', productIndex)
   },
  },
  modules: {},
});
