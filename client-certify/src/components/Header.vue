<template>
<v-toolbar fixed dark color="primary">
<v-toolbar-title class="white--text">
  <span
  class="home"
  @click="navigateTo({name: 'root'})">
    Certify
  </span>
</v-toolbar-title>
    <v-spacer></v-spacer>
 <v-toolbar-items>
    <v-btn
      v-if= "!!$store.state.isUserLoggedIn"
      flat
      dark
      @click= "navigateTo({name: 'dashboard'})"
      >
      Dashboard
    </v-btn>
</v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>

     <v-btn
      v-if= "!$store.state.isUserLoggedIn"
      flat
      dark
      @click= "navigateTo({name: 'login'})"
      >
      Login
  </v-btn>
  <v-btn
      v-if= "!$store.state.isUserLoggedIn"
      flat
      dark
      @click= "navigateTo({name: 'register'})"
      >
      Sign Up
      </v-btn>
     <v-btn
      v-if= "$store.state.isUserLoggedIn"
      flat
      dark
      @click="logout"
      >
      Log Out
     </v-btn>
    </v-toolbar-items>
</v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.home {
    cursor: pointer;
}
.home:hover{
    color:rgb(9, 235, 28)
}
</style>
