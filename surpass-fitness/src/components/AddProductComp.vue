<template>
  <div>
    <div class="d-flex justify-content-end mb-2">
      <button
        type="button"
        class="btnAction mb-3"
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
          <div class="modal-content">
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
                <input
                  type="text"
                  v-model="postProduct.prodTitle"
                  id="title"
                  required
                  oninvalid="this.setCustomValidity('Please enter Product Name')"
                  oninput="this.setCustomValidity('')"
                />
                <p class="title">Category</p>
                <input
                  type="text"
                  v-model="postProduct.category"
                  id="category"
                  required
                  oninvalid="this.setCustomValidity('Please enter Product Category')"
                  oninput="this.setCustomValidity('')"
                />
                <p class="title">content</p>
                <input type="text" v-model="postProduct.content" id="details" />
                <p class="title">Specifications</p>
                <input
                  type="text"
                  v-model="postProduct.specifications"
                  id="description"
                  required
                  oninvalid="this.setCustomValidity('Please enter Product Specifications')"
                  oninput="this.setCustomValidity('')"
                />
                <p class="title">Price</p>
                <input
                  type="text"
                  v-model="postProduct.prodPrice"
                  id="amount"
                  required
                  oninvalid="this.setCustomValidity('Please enter Product Price')"
                  oninput="this.setCustomValidity('')"
                />
                <p class="title">Image Link</p>
                <input
                  type="text"
                  v-model="postProduct.prodImage"
                  id="imageLink"
                  required
                  oninvalid="this.setCustomValidity('Please enter Product Image')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
              <div class="modal-footer">
                <button type="button" class="btnAction" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="submit" class="btnAction" id="addProduct">
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
