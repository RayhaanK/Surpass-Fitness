<template>
    <div>
      <button
      type="button"
      class="btn1"
      @click="modalEdit(user.userID)"
      data-bs-toggle="modal"
      :data-bs-target="'#texampleModal' + user.userID"
    >
      edit
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'texampleModal' + user.userID"
      tabindex="-1"
      :aria-labelledby="'texampleModalLabel' + user.userID"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="texampleModalLabel3">
              Edit User
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <label>first name:</label>
            <input
              type="text"
              placeholder="first name"
              v-model="editUser.firstName"
            />
            <label>last name:</label>
            <input
              type="text"
              placeholder="last name"
              v-model="editUser.lastName"
            />
            <label>Age:</label>
            <input
              type="number"
              placeholder="age"
              v-model="editUser.userAge"
            />
            <label>gender:</label>
            <input
              type="text"
              placeholder="gender"
              v-model="editUser.gender"
            />
            <label>user role:</label>
            <input
              type="text"
              placeholder="role"
              v-model="editUser.userRole"
            />
            <label>email address:</label>
            <input
              type="text"
              placeholder="email address"
              v-model="editUser.userEmail"
            />
            <label>user profile:</label>
            <input
              type="text"
              placeholder="profile image"
              v-model="editUser.userImage"
            />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              class="btn"
              @click="updateUser(user.userID)"
            >
              Save changes
            </button>
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
      editingUserID: null,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
  },
  methods: {
    modalEdit(userID) {
      console.log("reached");
      this.editingUserID = userID;
      this.editUser = {
        ...this.$store.state.users.find((user) => user.userID === userID),
      };
    },
    updateUser(userID) {
      this.$store
        .dispatch("editUser", {
          userID: userID,
          data: { ...this.editUser },
        })
        .then(() => {
          console.log("User updated!");
        })
        .catch((err) => {
          console.error("Error updating: ", err);
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
  