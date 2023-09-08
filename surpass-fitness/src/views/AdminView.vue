<template>
  <div>
    <section id="admin" class="adm">
      <div class="container-fluid">
        <h1 class="text-center mb-2 p-4">Admin Interface</h1>
        <div class="container-fluid">
          <button class="btn2 float-start" id="sort">
            Sort By ID(asc/desc)
          </button>
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
                    class="img-fluid"
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
    </section>
  </div>
</template>

<script>
import AddButton from "@/components/AddProductComp.vue"
import EditButton from "@/components/EditProductComp.vue"
import Spinner from "@/components/SpinnerComp.vue"
export default {
    components: {
        AddButton, EditButton, Spinner
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    async deleteProduct(prodID) {
      this.$store.dispatch('deleteProduct', prodID) 
    }
  }
};
</script>

<style scoped>

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
