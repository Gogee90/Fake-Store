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

      <v-list-group
        value="true"
      >
        <template v-slot:activator>
          <v-list-item-title>Products</v-list-item-title>
        </template>

        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Clothing</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="(cloth, index) in clothing" :key="index"
            :to="{name: 'MenClothing', params: {category: cloth.toLowerCase()}}">
            <v-list-item-title>{{ cloth }}</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-divider></v-divider>

          <v-list-item :to="{name: 'MenClothing', params: {category: 'electronics'}}">
            <v-list-item-title>Electronics</v-list-item-title>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item :to="{name: 'MenClothing', params: {category: 'jewelery'}}">
            <v-list-item-title>Jewelry</v-list-item-title>
          </v-list-item>
        </v-list-group>
    </v-list>
  </v-card>
</template>

<script>

    export default {
        name: "Sidenav",
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
