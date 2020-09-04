<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark>
      <v-toolbar-title>Железяка</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>
