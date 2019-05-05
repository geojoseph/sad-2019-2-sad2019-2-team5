<template>
    <v-content>
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
