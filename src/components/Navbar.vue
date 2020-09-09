<template>
  <div>
    <v-app-bar
      color="blue-grey lighten-5"
      dense
      dark
      fixed=True
      class="navbar">
      <v-toolbar-title>Железяка</v-toolbar-title>

      <v-spacer></v-spacer>

      <ul class="navbar-links">
        <li>О нас</li>
        <li>Услуги и сервис</li>
        <li>Условия приёма</li>
        <li>Оценка товара</li>
        <li>Контакты</li>
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
    color: black ;
  }
</style>
