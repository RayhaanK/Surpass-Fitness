<template>
  <div>
    <router-link to="/admin" v-scroll-to="'#admin'" ><button class="scroll"><i class="bi bi-arrow-up"></i></button></router-link>
    <section id="admin" class="adm">
      <div class="container-fluid">
        <h2 class="text-center mb-2 p-4">Admin Interface</h2>
        <h2 class="text-center mb-2 p-4">Product Interface</h2>
        <div class="container-fluid d-flex justify-content-end">
          <AddButton />
        </div>
        <div class="table-responsive">
          <table
            class="table table-bordered border-black table-hover"
            v-if="products"
          >
            <thead>
              <tr>
                <th scope="col">ID#</th>
                <th scope="col">Title</th>
                <th scope="col">Image</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Specifications</th>
                <th scope="col">Amount</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.prodID">
                <th>
                  <div class="tableRows">{{ product.prodID }}</div>
                </th>
                <td>
                  <div class="tableRows">{{ product.prodTitle }}</div>
                </td>
                <td>
                  <div class="tableRows">
                    <img
                      class="img-fluid productImage"
                      :src="product.prodImage"
                      :alt="product.prodTitle"
                      loading="lazy"
                    />
                  </div>
                </td>
                <td>
                  <div class="tableRows">{{ product.category }}</div>
                </td>
                <td>
                  <div class="tableRows">{{ product.content }}</div>
                </td>
                <td>
                  <div class="tableRows">{{ product.specifications }}</div>
                </td>
                <td>
                  <div class="tableRows">R{{ product.prodPrice }}</div>
                </td>
                <td>
                  <div class="tableRows">
                    <EditButton :product="product" />
                    <button
                      @click.prevent="deleteProduct(product.prodID)"
                      class="btnDelete"
                      id="deleteBtn"
                    >
                    Delete <i class="bi bi-trash3"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-else class="row">
            <spinner />
          </div>
        </div>
      </div>
      <section id="users" class="users">
        <div class="container-fluid">
          <h2 class=" text-center mb-2 p-4">User Interface</h2>
          <div class="container-fluid">
            <AddUser />
          </div>
          <div class="table-responsive">
            <table
              class="table table-responsive table-bordered border-black table-hover"
              v-if="users"
            >
              <thead>
                <tr>
                  <th scope="col">ID#</th>
                  <th scope="col">Image</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Gender</th>
                  <th scope="col">User Role</th>
                  <th scope="col">Email Adress</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.userID">
                  <th>
                    <div class="tableRows">{{ user.userID }}</div>
                  </th>
                  <td>
                    <div class="tableRows">
                      <img
                        class="img-fluid userImage"
                        :src="user.userImage"
                        :alt="user.firstName"
                        loading="lazy"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="tableRows">
                      {{ user.firstName }} {{ user.lastName }}
                    </div>
                  </td>
                  <td>
                    <div class="tableRows">{{ user.userAge }}</div>
                  </td>
                  <td>
                    <div class="tableRows">{{ user.gender }}</div>
                  </td>
                  <td>
                    <div class="tableRows">{{ user.userRole }}</div>
                  </td>
                  <td>
                    <div class="tableRows">{{ user.userEmail }}</div>
                  </td>
                  <td>
                    <div class="tableRows">
                      <EditUser :user="user" />
                      <button
                        @click.prevent="deleteUser(user.userID)"
                        class="btnDelete"
                        id="deleteBtn"
                      >
                      Delete <i class="bi bi-person-x"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-else class="row">
              <spinner />
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import AddButton from "@/components/AddProductComp.vue";
import EditButton from "@/components/EditProductComp.vue";
import Spinner from "@/components/SpinnerComp.vue";
import EditUser from "@/components/EditUserComp.vue";
import AddUser from "@/components/AddUserComp.vue";
export default {
  components: {
    AddButton,
    EditButton,
    Spinner,
    EditUser,
    AddUser,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchUsers");
  },
  methods: {
    async deleteProduct(prodID) {
      this.$store.dispatch("deleteProduct", prodID);
    },
    async deleteUser(userID) {
      this.$store.dispatch("deleteUser", userID);
    },
  },
};
</script>

<style scoped>
.adm {
  height: max-content;
}

.scroll {
  position: fixed;
  right: 40px;
  bottom: 100px;
  z-index: 1;
  padding: 0.6rem;
  border-radius: 25px;
   border: none;
   background-color: #79031d;
   color: #edb518;
   font-size: 1.2rem;
}

.tableRows {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
}

th {
  text-align: center;
}

td {
  height: 150px;
}

.productImage {
  width: 20rem;
}

.userImage {
  width: 7rem;
}

.btnDelete {
  background-color: transparent;
  border: none;
  color: #79031d;
  font-size: 1.1rem;
}
.btnDelete:hover {
  color: #edb518;
}
</style>
