<template>
  <v-footer padless
    color="blue-grey lighten-5"
  >
    <v-col
        class="text-center"
        cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
.text-center {
  color: black;
}
</style>
