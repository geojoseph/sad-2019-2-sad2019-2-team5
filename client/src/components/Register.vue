<template>
 <div>
 <h1>Register</h1>

 <input
 type="email"
 name="email"
 v-model="email"
 placeholder="email"
 />
 <br>
 <input
 type="password"
 v-model="password"
 name="password"
 placeholder="password"
 />
 <br>
 <button @click="register">
 Register
 </button>
 </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'abc@xyz.com',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }

  }

}
</script>

<style scoped>

</style>
