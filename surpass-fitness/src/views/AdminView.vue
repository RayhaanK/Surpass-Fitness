<template>
  <div>
    <section id="admin" class="adm">
      <div class="container-fluid">
        <h1 class="text-center mb-2 p-4">Admin Interface</h1>
        <div class="container-fluid"> 
          <AddButton />
        </div>
        <table
          class="table table-responsive table-bordered border-black table-hover" v-if="products"
        >
          <thead>
            <tr>
              <th scope="col">ID#</th>
              <th scope="col">Title</th>
              <th scope="col">Image</th>
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
                    <EditButton :product="product"/>
                    <button @click.prevent="deleteProduct(product.prodID)" class="btn1" id="deleteBtn">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="row">
        <spinner/>
      </div>
      </div>
    <section id="users" class="users">
      <div class="container-fluid">
      <h1
        class="display-3 text-center mb-2 p-4"
      >
        User Interface
      </h1>
      <div class="container-fluid">
        <AddUser/>
      </div>
      <table
        class="table table-responsive table-bordered border-black table-hover" v-if="users"
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
              <div class="tableRows">{{ user.userID}}</div>
            </th>
            <td>
              <div class="tableRows">
                <img class="img-fluid userImage" :src="user.userImage" :alt="user.firstName" loading="lazy" />
              </div>
            </td>
            <td>
              <div class="tableRows">{{ user.firstName }}  {{ user.lastName }}</div>
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
                <EditUser :user="user"/>
                <button @click.prevent="deleteUser(user.userID)" class="btn1" id="deleteBtn">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="row">
        <spinner/>
      </div>
    </div>
    </section>
  </section>
  </div>
</template>

<script>
import AddButton from "@/components/AddProductComp.vue"
import EditButton from "@/components/EditProductComp.vue"
import Spinner from "@/components/SpinnerComp.vue"
import EditUser from "@/components/EditUserComp.vue"
import AddUser from "@/components/AddUserComp.vue"
export default {
    components: {
        AddButton, EditButton, Spinner, EditUser, AddUser
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
      this.$store.dispatch('deleteProduct', prodID) 
    },
    async deleteUser(userID) {
      this.$store.dispatch('deleteUser', userID) 
    }
  }
};
</script>

<style scoped>

.adm {
  height: max-content;
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

@media (max-width:702px) {
    .tableRows {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
}
}

</style>
