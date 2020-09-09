<template>
  <v-row>
    <v-card v-for="city in cities" :key="city.id"
      class="mx-auto"
      max-width="300"
    >
        <v-img
          class="white--text align-end"
          height="200px"
          v-bind:src="city.link.path"
        >
          <v-card-title>{{ city.title }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">{{ city.subtitle }}</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{ city.location }}</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="orange"
            text
          >
            Share
          </v-btn>

          <v-btn
            color="orange"
            text
          >
            Explore
          </v-btn>
        </v-card-actions>
    </v-card>
  </v-row>
</template>

<script>
    export default {
        name: "MainContent",
        props: ['cities'],
        data() {
            return {

            }
        },
    }
</script>

<style scoped>
.mx-auto {
  margin: 10px 0;
}
</style>
