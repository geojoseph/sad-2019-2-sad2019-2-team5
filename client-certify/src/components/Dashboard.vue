<template >
    <v-content v-if= "!!$store.state.isUserLoggedIn">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
              <panel title="My Certificates">
                  <div v-for="certificate in Dashboard"
                    :key="certificate.id">
                    {{certificate.name}}--
                    {{certificate.provider}}--
                  </div>
              </panel>
          </v-flex>
        </v-layout>
      </v-container>
          <v-btn
          v-if= "!!$store.state.isUserLoggedIn"
          @click="navigateTo({name: 'addcertificate'})"
          dark color="primary"
          medium
          right
          fixed
          v-tooltip.hover title="Add certificate"
          fab>
          <v-icon>add</v-icon>
          </v-btn>
    </v-content>
</template>

<script>
import CertificatesService from '@/services/CertificatesService'
import Panel from '@/components/Panel'
import store from '@/store/store'
const email = store.state.user.email
// eslint-disable-next-line no-console
console.log(email)
export default {
  components: {
    Panel
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  data () {
    return {
      certificates: null
    }
  },
  async mounted () {
    this.certificates = (await CertificatesService.index(email)).data
  }
}
</script>

<style scoped>
</style>
