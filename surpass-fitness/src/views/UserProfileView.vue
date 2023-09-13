<template>
  <div>
    <div class="container-fluid d-flex justify-content-center">
      <div class="row">
        <div class="col">
          Welcome Back {{ user.firstName }} {{ user.lastName }}
          <div class="card" >
            <div class="image">
              <img
                :src="user.userImage"
                class="card-img-top imgU"
                :alt="user.firstName"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">
                {{ user.firstName }} {{ user.lastName }}
              </h5>
              <p class="card-text">
               Age: {{ user.userAge }} <br />
               Gender: {{ user.gender }} <br />
               Email Address: {{ user.userEmail }}
              </p>
            </div>
          </div>
          <button @click.prevent="logout()">Logout</button>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export default {
  data() {
    return {
      editUser: {
        ...this.user,
      },
      editingUserID: null,
    };
  },
  user() {
    return this.$store.state.user;
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    logout() {
      cookies.remove("LegitUser");
      try {
        const data = JSON.parse(localStorage.getItem("user"))
        if (data) {
          localStorage.removeItem("user")
        }
      }
      catch (error) {
        console.error("Error Warning:", error);
      }
      this.$router.push({ name: "login" });
    },
    modalEdit(userID) {
      console.log("reached");
      this.editingUserID = userID;
      this.editUser = {
        ...this.$store.state.user 
      };
    },
    updateUser(userID) {
      this.$store
        .dispatch("editUserProfile", {
          userID: userID, ...this.editUser ,
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
container-fluid {
  height: 100vh;
}

.card {
  border: none;
}

.image {
  display: flex;
  justify-content: center;
}

img {
  width: 16rem;
  border-radius: 20rem;
}

input {
  width: 100%;
}
</style>
