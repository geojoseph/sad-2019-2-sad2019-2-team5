<template>
  <v-app id="inspire">
  </v-app>
</template>

<script>
export default {
  methods: {
    async dashboard () {
      try {

      } catch (error) {
        this.error = error.response.data.error
      }
    }

  }

}
</script>
<style scoped>
</style>
