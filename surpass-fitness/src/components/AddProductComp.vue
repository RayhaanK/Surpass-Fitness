<template>
  <div>
    <div class="d-flex justify-content-center mb-2">
      <button
        type="button"
        class="btn2 mb-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Product
      </button>
    </div>
    <!-- Modal -->
    <div class="container">
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content bg-dark-subtle">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add Product
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form @submit.prevent="submitContentForm">
              <div class="modal-body">
                <p class="title">Product Name</p>
                <input type="text" v-model="postProduct.prodTitle" id="title" />
                <p class="title">Category</p>
                <input
                  type="text"
                  v-model="postProduct.category"
                  id="category"
                />
                <p class="title">content</p>
                <input type="text" v-model="postProduct.content" id="details" />
                <p class="title">Specifications</p>
                <input
                  type="text"
                  v-model="postProduct.specifications"
                  id="description"
                />
                <p class="title">Price</p>
                <input
                  type="text"
                  v-model="postProduct.prodPrice"
                  id="amount"
                />
                <p class="title">Image Link</p>
                <input
                  type="text"
                  v-model="postProduct.prodImage"
                  id="imageLink"
                />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn1" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="submit" class="btn1" id="addProduct">
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
  data() {
    return {
      postProduct: {
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
    async submitContentForm() {
      this.$store.dispatch("addProduct", this.postProduct);
    },
  },
};
</script>

<style scoped>

input {
  width: 100%;
}

</style>
