<template>
  <v-card class="elevation-12">
      <v-toolbar dark color="primary">
          <v-toolbar-title>{{title}}</v-toolbar-title>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
          <slot>
              No slot content defined.
          </slot>
      </div>
    </v-card>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>
<style scoped>
</style>
