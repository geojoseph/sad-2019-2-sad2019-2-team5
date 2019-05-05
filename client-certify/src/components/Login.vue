<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <panel title="Login">
              <v-form>
                <v-text-field name="email" label="Email" v-model="email" type="email"></v-text-field>
                <v-text-field id="password" name="password" label="Password" v-model="password" type="password"></v-text-field>
              </v-form>
              <v-card-actions>
                <v-spacer></v-spacer>
                  <div class="danger-alert" v-html="error"/>
                  <v-btn color="primary" @click="login">
                    <v-icon>
                      lock_open
                    </v-icon>
                    Login
                  </v-btn>
              </v-card-actions>
             </panel>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push('Dashboard')
      } catch (error) {
        this.error = error.response.data.error
      }
    }

  },
  components: {
    Panel
  }
}
</script>
<style scoped>
.error{
  color: red
}
</style>
