<template>
  <div>
    <h1>{{ returnValue }}</h1>
    <v-card v-for="(value,index) in returnValue" :key="index"
      class="mx-auto"
      max-width="300"
    >
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>{{ index }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"></v-card-subtitle>

        <v-card-text class="text--primary">
          <div></div>

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
  </div>
</template>

<script>
    export default {
        name: "MainContent",
        data() {
            return {
                cards: [
                  {titles: ['Some beaches', 'Some more beaches', 'Top 10 Australian beaches']},
                  {subtitles: ['Number 9', 'Number 8', 'Number 10']},
                  {locations: ['Whitehaven Beach', 'Omaha beach', 'Bitch beach']}
                ]
            }
        },
        computed: {
          // eslint-disable-next-line vue/return-in-computed-property
            returnValue() {
                this.cards.forEach((card) => {
                    console.log(card)
                    return card
                })
            }
        }
    }
</script>

<style scoped>

</style>
