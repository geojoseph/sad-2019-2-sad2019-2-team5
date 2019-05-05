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

    <v-stepper-step step="4">
      *Validity
      <v-text-field
      label="Expiry date"
      :rules="[required]"
      v-model="certificate.validity"
      required>
      </v-text-field>
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-btn color="primary" @click="e6 = 1">Upload</v-btn>
      <v-btn flat @click="e6 = 3">Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="5">
      *Comments
      <v-text-field
      label="Additional comments"
      multi-line
      v-model="certificate.comment">
      </v-text-field>
    </v-stepper-step>
    <v-stepper-content step="5">
      <v-btn color="primary" @click="e6 = 1">Upload</v-btn>
      <v-btn flat @click="e6 = 4">Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
              </panel>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
import Panel from '@/components/Panel'

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

      e6: 1
    }
  }
}
</script>

<style scoped>

</style>
