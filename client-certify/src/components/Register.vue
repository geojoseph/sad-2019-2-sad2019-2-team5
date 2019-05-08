<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs8>
            <panel title="Register">
                <v-form
                name="certify-reg-form"
                autocomplete="off">
                  <v-text-field
                  name="name"
                  label="Name"
                  v-model="name"
                  type="name">
                  </v-text-field>
                  <v-text-field
                  name="email"
                  label="Email"
                  v-model="email"
                  type="email">
                  </v-text-field>
                  <v-text-field
                   id="password"
                   name="password"
                   label="Password"
                   v-model="password"
                   autocomplete="new-password"
                   type="password">
                  </v-text-field>
                </v-form>
              <v-card-actions>
                <v-spacer></v-spacer>
                  <div class="danger-alert" v-html="error"/>
                  <v-btn color="primary" @click="register">
                    <v-icon>
                      perm_identity
                    </v-icon>
                    Register
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
      name: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
          name: this.name
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
