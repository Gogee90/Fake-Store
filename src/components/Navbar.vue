<template>
  <div>
    <v-app-bar
      color="blue-grey"
      dense
      dark
      fixed=True
      class="navbar">
      <v-toolbar-title>Fake Store</v-toolbar-title>

      <v-spacer></v-spacer>

      <ul class="navbar-links">
        <li><router-link :to="{name: 'LoginPage'}" style="text-decoration:none; color: #FFFFFF;">Login</router-link></li>
        <li>Store</li>
        <li>Contacts</li>
      </ul>

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
                status: null
            }
        },
        computed: {
            getStatus() {
               return this.$store.getters.getStatus
            }
        }
    }
</script>

<style scoped>
  .navbar-links {
    list-style: none;
  }

  .navbar-links li {
    display: inline-block;
    padding: 0 10px;
  }
</style>
