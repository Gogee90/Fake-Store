<template>
  <v-card
    class="mx-auto"
    width="300"
  >
    <v-list>
      <v-list-item :to="{name: 'MainContent'}">
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item
        v-for="card in this.$store.getters.getCategoryList" :key="card.id"
        :to="{name: 'MenClothing', params: {category: card.id }}">
        <v-list-item-title>{{card.category}}</v-list-item-title>
        <v-divider></v-divider>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
    export default {
        name: "Sidenav",
        data() {
            return {

            }
        },
      }
</script>

<style scoped>
.mx-auto {
  margin: 40px 0;
  position: fixed;
}

@media screen and (max-width: 1260px){
  .mx-auto {
    display: none;
  }
}
</style>
