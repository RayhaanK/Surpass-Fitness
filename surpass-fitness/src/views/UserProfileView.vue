<template>
  <div>
    <section class="profile" id="profile">
      <div class="container mt-5">
        <h2>Welcome {{ user.firstName }} {{ user.lastName }}</h2>
      </div>
      <div class="container d-flex justify-content-center">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4 colImage">
              <img
                :src="user.userImage"
                class="card-img-top imgU"
                :alt="user.firstName"
                loading="lazy"
              />
            </div>
            <div class="col-md-8 colText">
              <div class="card-body">
                <h3>User Profile:</h3>
                <h4 class="card-title">
                  {{ user.firstName }} {{ user.lastName }}
                </h4>
                <p class="card-text">
                  Age: {{ user.userAge }} <br />
                  Gender: {{ user.gender }} <br />
                  Email Address: {{ user.userEmail }}
                </p>
                <div class="buttons">
                  <div class="mod">
                    <button
                      type="button"
                      class="btnAction"
                      @click="modalEdit(user.userID)"
                      data-bs-toggle="modal"
                      :data-bs-target="'#texampleModal' + user.userID"
                    >
                      edit
                    </button>
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
                            <h1
                              class="modal-title fs-5"
                              id="texampleModalLabel3"
                            >
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
                              required
              oninvalid="this.setCustomValidity('Please enter User First Name')"
              oninput="this.setCustomValidity('')"
                            />
                            <label>last name:</label>
                            <input
                              type="text"
                              placeholder="last name"
                              v-model="editUser.lastName"
                              required
              oninvalid="this.setCustomValidity('Please enter User Last Name')"
              oninput="this.setCustomValidity('')"
                            />
                            <label>Age:</label>
                            <input
                              type="number"
                              placeholder="age"
                              v-model="editUser.userAge"
                              required
              oninvalid="this.setCustomValidity('Please enter User Age')"
              oninput="this.setCustomValidity('')"
                            />
                            <label>gender:</label>
                            <input
                              type="text"
                              placeholder="gender"
                              v-model="editUser.gender"
                              required
              oninvalid="this.setCustomValidity('Please enter User Gender')"
              oninput="this.setCustomValidity('')"
                            />
                            <label>email address:</label>
                            <input
                              type="text"
                              placeholder="email address"
                              v-model="editUser.userEmail"
                              required
              oninvalid="this.setCustomValidity('Please enter User Email Address')"
              oninput="this.setCustomValidity('')"
                            />
                            <label>user profile:</label>
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
                            <button
                              type="button"
                              class="btn"
                              data-bs-dismiss="modal"
                            >
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
                  <button
                    @click.prevent="deleteUser(user.userID)"
                    class="btnAction"
                    id="deleteBtn"
                  >
                    Delete <i class="bi bi-trash3"></i>
                  </button>
                </div>
                <div class="logout mt-3">
                  <button class="btnAction" @click.prevent="logout()">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import Swal from 'sweetalert2';
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
      return this.$store.state.user;
    },
  },
  methods: {
    logout() {
      cookies.remove("LegitUser");
      try {
        const data = JSON.parse(localStorage.getItem("user"));
        if (data) {
          localStorage.removeItem("user");
          location.reload()
        }
      } catch (error) {
        console.error("Error Warning:", error);
      }
      this.$router.push({ name: "login" });
    },
    modalEdit(userID) {
      console.log("reached");
      this.editingUserID = userID;
      this.editUser = {
        ...this.$store.state.user,
      };
    },
    updateUser(userID) {
      this.$store
        .dispatch("editUserProfile", {
          userID: userID,
          ...this.editUser,
        })
        .then(() => {
          console.log("User updated!");
        })
        .catch((err) => {
          console.error("Error updating: ", err);
        });
    },
    async deleteUser(userID) {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You are about to delete this user!',
    icon: 'warning',
    showCancelButton: true,
    cancelButtonText: 'No, keep it',
    confirmButtonText: 'Yes, delete it!',
  }).then(async (result) => {
    if (result.isConfirmed) {
      await this.$store.dispatch("deleteUser", userID);
      try {
        const data = JSON.parse(localStorage.getItem("user"));
        if (data) {
          localStorage.removeItem("user");
          cookies.remove("LegitUser");
          this.$router.push({ name: "login" });
        }
      } catch (error) {
        console.error("Error Warning:", error);
      }
      Swal.fire('Deleted!', 'The user has been deleted.', 'success');
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire('Cancelled', 'The user was not deleted.', 'error');
    }
  });
},
  }
}
</script>

<style scoped>
.profile {
  min-height: 90vh;
}

.card {
  border: none;
  width: 80rem;
}

.image {
  display: flex;
  justify-content: center;
}

.colText  {
  display: flex;
  justify-content: center;
  align-items: center;
}

.colImage {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-text {
  font-size: 1.2rem;
}

.buttons {
  display: flex;
  justify-content: center;
}

.mod {
  margin-right: 0.3rem;
}

.btnAction {
  background-color: #79031d;
  border: none;
  color: #edb518;
  font-size: 1.1rem;
  padding: 0.4rem;
}

.btnAction:hover {
  background-color: #edb518;
  color: #79031d;
}

img {
  width: 16rem;
  border-radius: 20rem;
}

input {
  width: 100%;
}
</style>
