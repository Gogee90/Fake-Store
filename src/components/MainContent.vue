<template>
  <v-row>
    <v-card
      class="mx-auto"
      max-width="300"
    >
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://i.pinimg.com/736x/9c/9c/8f/9c9c8fd739b13eed999f8d178db9abfe.jpg"
        >
          <router-link :to="{ name: 'MenClothing' }"><v-card-title>Мужская одежда</v-card-title></router-link>
        </v-img>
        <v-card-subtitle class="pb-0">Коллекция мужской одежды</v-card-subtitle>

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
    <v-card
      class="mx-auto"
      max-width="300"
    >
      <v-img
          class="white--text align-end"
          height="200px"
          src="https://image01.bonprix.ru/api/s,x,460,y,460/teaser/homepage/2036-dob-kw-36/kleider-940488-1766614.jpg?h=YOe8OSA7bwGVfKhYyKK+S4lYTYzyAfLJhKAZreqmHtk="
        >
          <v-card-title>Женская одежда</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">Коллекция женской одежды</v-card-subtitle>

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
    <v-card
      class="mx-auto"
      max-width="300"
    >
      <v-img
          class="white--text align-end"
          height="200px"
          src="https://lh3.googleusercontent.com/proxy/ozxMPVMLc_DF-Qh-yk2Ei5fDEmITSljvBGMhPPSiScXXIerkH6l8mMoFXbQuBqLIdFblcTvsVZvu2ykENMT8rVW-MARk_zlDHCdH38e1pKUrBrTyjxDdaGAFt6dkiFIytVJnThVd"
        >
          <v-card-title>Товары для компьютера</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">Разная электроника</v-card-subtitle>

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
    <div class="align-center">Все товары</div>
  </v-row>
</template>

<script>
    export default {
        name: "MainContent",
        data() {
            return {
                categories: [],
            }
        },
    }
</script>

<style scoped>
.mx-auto {
  margin: 10px 0;
}
</style>
