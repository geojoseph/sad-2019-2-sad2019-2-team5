<template >
    <v-content >
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md10>
              <panel title="Add Certificate Information">
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      *Certificate Name
      <v-text-field
      label="Provide certificate name"
      :rules="[required]"
      v-model="certificate.name"
      required>
      </v-text-field>
   </v-stepper-step>
   <v-stepper-content step="1">
      <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
   </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">
      *Certificate provider
      <v-text-field
      label="Provide certificate issuer"
      :rules="[required]"
      v-model="certificate.provider"
      required>
      </v-text-field>
      </v-stepper-step>
   <v-stepper-content step="2">
      <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
      <v-btn flat @click="e6 = 1">Cancel</v-btn>
   </v-stepper-content>

   <v-stepper-step :complete="e6 > 3" step="3">
      *Grade obtained
      <v-text-field
      label="Provide the final grade achieved"
      :rules="[required]"
      v-model="certificate.grade"
      required>
      </v-text-field>
   </v-stepper-step>
   <v-stepper-content step="3">
      <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
      <v-btn flat @click="e6 = 2">Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4" :complete="e6 > 4" >
      *Validity
      <v-text-field
      label="Expiry date"
      :rules="[required]"
      v-model="certificate.validity"
      required>
      </v-text-field>
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-btn color="primary" @click="e6 = 5">Continue</v-btn>
      <v-btn flat @click="e6 = 3">Cancel</v-btn>
    </v-stepper-content>
    </v-stepper>
    <input type="file" @change="onFileChanged" :rules="[required]" required>
    <div class="danger-alert" v-if="error">
      {{error}}
    </div>
    <v-btn  color="primary" @click="onUpload">Add certificate</v-btn>
    </panel>
    </v-flex>
    </v-layout>
    </v-container>
    </v-content>
</template>

<script>
import Panel from '@/components/Panel'
import CertificatesService from '@/services/CertificatesService'
import store from '@/store/store'

export default {
  components: {
    Panel
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async onUpload () {
      const areAllFieldsFilledIn = Object
        .keys(this.certificate)
        .every(key => this.certificate[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'please fill all the required fields.'
        return
      }
      try {
        await CertificatesService.post(this.certificate)
        confirm('You have succesfully added certificate!!')
        this.$router.push({
          name: 'dashboard'
        })
      } catch (err) {
        console.log(err)
      }
    },
    onFileChanged (event) {
      this.certificate.selectedFile = event.target.files[0]
    }
  },
  data () {
    return {
      certificate: {
        email: store.state.user.email,
        name: null,
        provider: null,
        grade: null,
        validity: null,
        selectedFile: null,
        verification: 'Not Verified'
      },
      error: null,
      required: (value) => !!value || 'Required field',
      e6: 1
    }
  }
}
</script>

<style scoped>
</style>
