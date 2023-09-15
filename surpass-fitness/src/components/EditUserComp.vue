<template>
  <div>
    <button
      type="button"
      class="btnEdit"
      @click="modalEdit(user.userID)"
      data-bs-toggle="modal"
      :data-bs-target="'#texampleModal' + user.userID"
    >
      Edit <i class="bi bi-pencil-square"></i>
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
            <h1 class="modal-title fs-5" id="texampleModalLabel3">Edit User</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <label>First name</label>
            <input
              type="text"
              placeholder="first name"
              v-model="editUser.firstName"
              required
              oninvalid="this.setCustomValidity('Please enter User First Name')"
              oninput="this.setCustomValidity('')"
            />
            <label>Last name</label>
            <input
              type="text"
              placeholder="last name"
              v-model="editUser.lastName"
              required
              oninvalid="this.setCustomValidity('Please enter User Last Name')"
              oninput="this.setCustomValidity('')"
            />
            <label>Age</label>
            <input
              type="number"
              placeholder="age"
              v-model="editUser.userAge"
              required
              oninvalid="this.setCustomValidity('Please enter User Age')"
              oninput="this.setCustomValidity('')"
            />
            <label>Gender</label>
            <input
              type="text"
              placeholder="gender"
              v-model="editUser.gender"
              required
              oninvalid="this.setCustomValidity('Please enter User Gender')"
              oninput="this.setCustomValidity('')"
            />
            <label>User role</label>
            <input
              type="text"
              placeholder="role"
              v-model="editUser.userRole"
              required
              oninvalid="this.setCustomValidity('Please enter User Role')"
              oninput="this.setCustomValidity('')"
            />
            <label>Email Address</label>
            <input
              type="text"
              placeholder="email address"
              v-model="editUser.userEmail"
              required
              oninvalid="this.setCustomValidity('Please enter User Email Address')"
              oninput="this.setCustomValidity('')"
            />
            <label>User Profile</label>
            <input
              type="text"
              placeholder="profile image"
              v-model="editUser.userImage"
              required
              oninvalid="this.setCustomValidity('Please enter User Profile Image')"
              oninput="this.setCustomValidity('')"
            />
          </div>
          <div class="modal-footer">
            <button type="button" class="btnAction" data-bs-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              class="btnAction"
              data-bs-dismiss="modal"
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
