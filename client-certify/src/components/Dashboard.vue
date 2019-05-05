<template >
    <v-content v-if= "!!$store.state.isUserLoggedIn">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
              <panel title="Browse to Certify">
                  <div v-for="certificate in Dashboard"
                    :key="certificate.id">
                    {{certificate.title}}--
                    {{certificate.Cid}}--
                    {{certificate.hyperlink}}--
                  </div>
              </panel>
          </v-flex>
        </v-layout>
      </v-container>
          <v-btn
          v-if= "!!$store.state.isUserLoggedIn"
          @click="navigateTo({name: 'certificate-add'})"
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
export default {
  components: {
    Panel
  },
  data () {
    return {
      certificates: null
    }
  },
  async mounted () {
    this.certificates = (await CertificatesService.index()).data
  }
}
</script>

<style scoped>
</style>
