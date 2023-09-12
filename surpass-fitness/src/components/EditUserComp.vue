<template>
    <div>
      <button
        type="button"
        class="btn2 mb-3"
        @click="editModal(user.userID)"
        data-bs-toggle="modal"
        :data-bs-target="'#uexampleModal' + user.userID"
      >
        Edit
      </button>
      <!-- Modal -->
      <div class="container">
        <div
          class="modal fade"
          :id="'uexampleModal' + user.userID"
          tabindex="-1"
          :aria-labelledby="'pexampleModalLabel' + user.userID"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content bg-dark-subtle">
              <div class="modal-header text-center">
                <h1 class="modal-title fs-5" id="pexampleModalLabel">
                  Edit User
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
                  <p class="title">First Name</p>
                  <input type="text" v-model="editUser.firstName" id="title" />
                  <p class="title">Last Name</p>
                  <input type="text" v-model="editUser.lastName" id="title" />
                  <p class="title">Product Name</p>
                  <input type="text" v-model="editUser.userAge" id="title" />
                  <p class="title">Gender</p>
                  <input
                    type="text"
                    v-model="editUser.gender"
                    id="category"
                  />
                  <p class="title">Email Address</p>
                  <input type="text" v-model="editUser.userEmail" id="details" />
                  <p class="title">Password</p>
                  <input
                    type="text"
                    v-model="editUser.userPass"
                    id="description"
                  />
                  <p class="title">Profile Image</p>
                  <input
                    type="text"
                    v-model="editUser.userImage"
                    id="amount"
                  />
                  <p class="title">User Role</p>
                  <input
                    type="text"
                    v-model="editUser.userRole"
                    id="imageLink"
                  />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn1" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button
                    @click.prevent="updateProduct(user.userID)"
                    type="submit"
                    class="btn1"
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
    props: ["user"],
    data() {
      return {
        editUser: {
          ...this.user,
        },
        editUserID: null,
        userEdit: {
          firstName: "",
          lastName: "",
          userAge: "",
          gender: "",
          userEmail: "",
          userPass: "",
          userImage: "",
          userRole: "",
        },
      };
    },
    computed: {},
    methods: {
      editModal(userID) {
        this.editUserID = userID;
        this.editUser = {
          ...this.$store.state.users.find(
            (user) => user.userID === userID
          ),
        };
      },
      updateProduct(userID) {
        this.$store.dispatch("editUser", {
          userID: userID,
          ...this.editUser,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  input {
    width: 100%;
  }
  </style>
  