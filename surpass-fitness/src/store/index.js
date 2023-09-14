import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
import Swal from 'sweetalert2'
import router from "@/router";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import authenticateUser from "@/services/authenticateUser.js";
const cartList = JSON.parse(localStorage.getItem("cart")) || [];
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
    cart: cartList,
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
          localStorage.setItem("user", JSON.stringify(result));
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
          await Swal.fire({
            title: "Delete User",
            text: "Are you sure you want to remove this user?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, remove it!",
            cancelButtonText:"Cancel",
            reverseButtons: true,
          });
          Swal.fire("User Removed", "User has been removed." , "success");
          context.dispatch("fetchUsers");
        } else {
          Swal.fire("Error", "An error occurred while deleting the user.", "error")
        }
      } catch (e) {
        Swal.fire("Error", "An error occurred while deleting the user.", "error")
      }
    },
  
    async editUser(context, payload) {
      console.log(payload);
      try {
        const res = await axios.patch(
          `${dataUrl}user/${payload.userID}`,
          payload.data
        );
        console.log(res);
        const { msg } = res.data;
        if (msg) {
          sweet({
            title: "User Edited!",
            text: "User has been edited",
            icon: "success",
            timer: 3000,
          });
          context.dispatch("fetchUsers");
        } else {
          sweet({
            title: "Error!",
            text: "An error has occured!",
            icon: "error",
            timer: 3000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
 
    async editUserProfile(context, payload) {
      console.log(payload);
      try {
        const res = await axios.patch(
          `${dataUrl}user/${payload.userID}`,
          payload
        );
        console.log(res);
        const { msg } = res.data;
        if (msg) {
          sweet({
            title: "User Profile Edited!",
            text: "User Profile has been edited.",
            icon: "success",
            timer: 3000,
          });
          context.commit("setUser", payload);
        } else {
          sweet({
            title: "Error!",
            text: "An error has occured!",
            icon: "error",
            timer: 3000,
          });
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
            text: "User has been added!",
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
          sweet({
            title: "Product Added",
            text: "Product has been added!",
            icon: "success",
            timer: 3000,
          });
          context.dispatch("fetchProducts");
          console.log(response.data);
        } else {
          sweet({
            title: "Error",
            text: "Product could not be added!",
            icon: "error",
            timer: 3000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    async deleteProduct(context, prodID) {
      try {
        const response = await axios.delete(`${dataUrl}product/${prodID}`);
        if (response) {
          await Swal.fire({
            title: "Delete Product",
            text: "Are you sure you want to remove this product?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, remove it!",
            cancelButtonText:"Cancel",
            reverseButtons: true,
          });
          Swal.fire("Product Removed", "Product has been removed." , "success");
          context.dispatch("fetchProducts");
        } else {
          Swal.fire("Error", "An error occurred while deleting the product.", "error")
        }
      } catch (e) {
        Swal.fire("Error", "An error occurred while deleting the product.", "error")
      }
    },
    async editProduct(context, payload) {
      try {
        const response = await axios.patch(
          `${dataUrl}product/${payload.prodID}`,
          payload
        );
        if (response) {
          sweet({
            title: "Product Edited!",
            text: "Product has been edited.",
            icon: "success",
            timer: 3000,
          });
          context.dispatch("fetchProducts");
        } else {
          sweet({
            title: "Error!",
            text: "An error has occured!",
            icon: "error",
            timer: 3000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },

    // Cart
   
    async addToCart(context, product) {
      try {
        const existingProductIndex = context.state.cart.findIndex(
          (cartItem) => cartItem.prodID === product.prodID
        );
    
        if (existingProductIndex === -1) {
          context.commit("addCart", product);
    
          sweet({
            title: "Item added to cart!",
            text: `${product.prodTitle} has been added to the cart`,
            icon: "success",
            timer: 3000,
          });
        } else {
          const existingProduct = context.state.cart[existingProductIndex];
    
          if (existingProduct === 1) {
            sweet({
              icon: "info",
              title: "Out of Stock",
              text: `${product.prodTitle} is currently out of stock.`,
            });
          } else {
            existingProduct++;
             sweet({
              title: "Item added to cart!",
              text: `${product.prodTitle} has been added to the cart`,
              icon: "success",
              timer: 3000,
            });
          }
    
          context.commit("updateCart", {
            index: existingProductIndex,
            updatedProduct: existingProduct,
          });
        }
    
        localStorage.setItem("cart", JSON.stringify(context.state.cart));
      } catch (error) {
        console.error("Error adding to cart:", error);
        sweet({
          icon: "info",
          title: "Out of Stock",
          text: `${product.prodTitle} is currently out of stock.`,
        });
      }
    },
    
async removeFromCart(context, productIndex) {
  try {
    const deletion = await Swal.fire({
      title: "Remove Item from Cart?",
      text: "Are you sure you want to remove this item from your cart?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it!",
      cancelButtonText:"Cancel",
      reverseButtons: true,
    });

    if (deletion.isConfirmed) {
      // User confirmed the removal
      context.commit("removeCartItem", productIndex);
      Swal.fire("Product Removed", "Product has been removed from your cart." , "success");
    } else {
      // User canceled the removal
      Swal.fire("Cancelled", "The removal was cancelled.", "info");
    }
  } catch (error) {
    console.error("Error removing item from cart:", error);
    Swal.fire("Error", "An error occurred while removing the item from your cart.", "error");
  }
}


  },
  modules: {},
});
