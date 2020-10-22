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
        v-for="card in categoryList" :key="card.id"
        :to="{name: 'MenClothing', params: {category: card.id }}">
        <v-list-item-title>{{card.category}}</v-list-item-title>
        <v-divider></v-divider>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
  import { requestData } from "@/components/mixins/axios_mixin";
    export default {
        name: "Sidenav",
        mixins: [requestData],
        data() {
            return {
                clothing: ['Men clothing', 'Women clothing'],
                electronics: ['Electronics'],
                jewelry: ['Jewelry'],
            }
        },
      }
</script>

<style scoped>
.mx-auto {
  margin: 40px 0;
  position: fixed;
}
</style>
