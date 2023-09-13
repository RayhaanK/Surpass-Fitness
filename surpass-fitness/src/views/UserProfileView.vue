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
          <UserEdit/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserEdit from "@/components/userProfileEdit.vue"
export default {
  user() {
    return this.$store.state.user;
  },
  components: {
    UserEdit
  },
  computed: {
    user() {
      return this.$store.state.user || cookies.get("LegitUser").result;
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
      router.push({ name: "login" });
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
</style>
