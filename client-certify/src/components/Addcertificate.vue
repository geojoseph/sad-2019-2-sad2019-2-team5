<template >
    <v-content v-if= "!!$store.state.isUserLoggedIn">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md10>
              <panel title="Add Certificate Information">
                <v-text-field
                label="Certificate Name"
                required
                >
                </v-text-field>
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
  }
}
</script>

<style scoped>

</style>
