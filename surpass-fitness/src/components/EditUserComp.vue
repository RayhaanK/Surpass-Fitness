<template>
    <div>
      <button
        type="button"
        class="btn2 mb-3"
        @click="editUserModal(user.userID)"
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
          :aria-labelledby="'uexampleModalLabel' + user.userID"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content bg-dark-subtle">
              <div class="modal-header text-center">
                <h1 class="modal-title fs-5" id="uexampleModalLabel">
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
                  <input type="text" id="title" v-model="editUser.firstName" />
                  <p class="title">Last Name</p>
                  <input type="text" v-model="editUser.lastName" id="lastName" />
                  <p class="title">Age</p>
                  <input type="text" id="details" v-model="editUser.userAge" />
                  <p class="title">Gender</p>
                  <input type="text" v-model="editUser.gender" id="gender" />
                  <p class="title">Email Address</p>
                  <input type="text" id="email" v-model="editUser.userEmail" />
                  <p class="title">Profile Image</p>
                  <input
                    type="text"
                    v-model="editUser.userImage"
                    id="imageLink"
                  />
                  <p class="title">User Role</p>
                  <input type="text" v-model="editUser.userRole" id="imageLink" />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn1" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button
                    @click.prevent="updateUser()"
                    type="submit"
                    class="btn1"
                    id="addUser"
                    data-bs-dismiss="modal"
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
        editUserInfo: {
          userID: "",
          firstName: "",
            lastName: "",
            userAge: "",
            gender: "",
            userRole: "",
            userEmail: "",
            userRole: "",
            userImage: "",
        },
      };
    },
    methods: {
      editUserModal(userID) {
        this.editUserID = userID;
        this.editUser = {
          ...this.$store.state.users.find((user) => user.userID === userID),
        };
      },
      updateUser(userID) {
        this.$store.dispatch("editUser", {
          userID: userID,
          ...this.editUser,
        });
      },
    },
  };
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
    width: 4rem;
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
  