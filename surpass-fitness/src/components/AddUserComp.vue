<template>
    <div>
        <div class="d-flex justify-content-end mb-2">
      <button
        type="button"
        class="btn2 mb-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal2"
      >
        Add User
      </button>
    </div>
    <!-- Modal -->
    <div class="container">
      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content bg-dark-subtle">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add User</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form @submit.prevent="submitUserForm">
            <div class="modal-body">
                <p class="title">First Name</p>
                <input type="text" v-model="postUser.firstName" id="FirstName" />
                <p class="title">Last Name</p>
                <input
                type="text"
                v-model="postUser.lastName"
                id="lastName"
                />
                <p class="title">Age</p>
                <input type="text" v-model="postUser.userAge" id="details" />
                <p class="title">Gender</p>
                <input
                type="text"
                v-model="postUser.gender"
                id="description"
                />
                <p class="title">Email Address</p>
                <input type="text" v-model="postUser.userEmail" id="amount" />
                <p class="title">Password</p>
                <input
                type="text"
                v-model="postUser.userPass"
                id="quantity"
                />
                <p class="title">Profile Image</p>
                <input
                type="text"
                v-model="postUser.userImage"
                id="imageLink"
                />
                <p class="title">User Role</p>
                <input
                type="text"
                v-model="postUser.userRole"
                id="quantity"
                />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn1" data-bs-dismiss="modal">
                  Close
                </button>
                <button
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
        data() {
    return {
        postUser: {
          firstName: "",
          lastName: "",
          userAge: "",
          gender: "",
          userRole: "",
          userEmail: "",
          userPass: "",
          userRole: "",
          userImage: "",
        },
      };
  },
  methods: {
    async submitUserForm() {
        this.$store.dispatch('AddUser', this.postUser)
    }
  }
        
    }
</script>

<style scoped>

.btn1 {
  background-color: #f7f7f7;
  padding: 0.3rem;
  border-radius: 10px;
  width: 9rem;
  border: none;
}

.btn1:hover {
  background-color: #f7f7f788;
}

.btn2 {
  background-color: #f7f7f7;
  width: 9rem;
  padding: 0.3rem;
  border-radius: 10px;
  border: none;
}

.btn2:hover {
  background-color: #f7f7f7d3;
}

input {
  width: 100%;
}

</style>