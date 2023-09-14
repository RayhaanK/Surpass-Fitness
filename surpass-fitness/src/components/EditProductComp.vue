<template>
  <div>
    <button
      type="button"
      class="btnEdit mb-3"
      @click="editModal(product.prodID)"
      data-bs-toggle="modal"
      :data-bs-target="'#pexampleModal' + product.prodID"
    >
      Edit <i class="bi bi-pencil-square"></i>
    </button>
    <!-- Modal -->
    <div class="container">
      <div
        class="modal fade"
        :id="'pexampleModal' + product.prodID"
        tabindex="-1"
        :aria-labelledby="'pexampleModalLabel' + product.prodID"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h1 class="modal-title fs-5" id="pexampleModalLabel">
                Edit Product
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form>
              <div class="modal-body">
                <p class="title">Product Name</p>
                <input type="text" v-model="editProduct.prodTitle" id="title" />
                <p class="title">Category</p>
                <input
                  type="text"
                  v-model="editProduct.category"
                  id="category"
                />
                <p class="title">content</p>
                <input type="text" v-model="editProduct.content" id="details" />
                <p class="title">Specifications</p>
                <input
                  type="text"
                  v-model="editProduct.specifications"
                  id="description"
                />
                <p class="title">Price</p>
                <input
                  type="text"
                  v-model="editProduct.prodPrice"
                  id="amount"
                />
                <p class="title">Image Link</p>
                <input
                  type="text"
                  v-model="editProduct.prodImage"
                  id="imageLink"
                />
              </div>
              <div class="modal-footer">
                <button type="button" class="btnAction" data-bs-dismiss="modal">
                  Close
                </button>
                <button
                  @click.prevent="updateProduct(product.prodID)"
                  type="submit"
                  data-bs-dismiss="modal"
                  class="btnAction"
                  id="addProduct"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      editProduct: {
        ...this.product,
      },
      editProductID: null,
      editProd: {
        prodTitle: "",
        category: "",
        content: "",
        specifications: "",
        prodPrice: "",
        prodImage: "",
      },
    };
  },
  computed: {},
  methods: {
    editModal(prodID) {
      this.editProductID = prodID;
      this.editProduct = {
        ...this.$store.state.products.find(
          (product) => product.prodID === prodID
        ),
      };
    },
    updateProduct(prodID) {
      this.$store.dispatch("editProduct", {
        prodID: prodID,
        ...this.editProduct,
      });
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
}

.btnEdit {
  background-color: transparent;
  border: none;
  color: #79031d;
  font-size: 1.1rem;
}
.btnEdit:hover {
  color: #edb518;
}
</style>
