<template>
  <body>
    <v-container fluid class="pa-0 tw-bg-[#C9D7FC]">
      <myNav></myNav>
      <v-row no-gutters class="sheetPadding">
        <v-col cols="12">
          <v-row no-gutters>
            <v-col cols="5">
              <v-row class="headingFont"
                >Bubble Sharing <br />
                Management</v-row
              >
              <v-row class="bodyFont mt-7">
                Bubble Sharing Management represents a diverse <br />
                set of creators in-house. Our creators are emerging, <br />
                social-first, distinct and compelling talent that span <br />
                genre, demographic and age.
              </v-row>
            </v-col>
            <v-col cols="7">
              <v-img
                :aspect-ratio="aspectRatio"
                :width="740"
                class=""
                src="src/assets/park.png"
              ></v-img>
            </v-col>
          </v-row>
          <!--2-->
          <v-row no-gutters class="sheet2">
            <v-col cols="12" class="d-flex justify-center">
              <v-img max-height="360" max-width="360" src="src/assets/barbie.png"></v-img>
            </v-col>

            <v-col cols="12" class="d-flex justify-center">
              <p class="nameFont mt-10">Barbara 'Barbie' Millicent Roberts</p>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <p class="h2Font mt-2">Creator</p>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <p class="b2Font mt-2">
                This management division joins the larger Bubble Sharing <br />
                product that currently features link-in-bio website,<br />
                media kit and invoicing properties.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <myfooter />
    </v-container>
  </body>
</template>

<script>
import { defineComponent } from "vue";

// Components
import myNav from "@/components/navBar.vue";
import myfooter from "@/components/footer.vue";

export default defineComponent({
  name: "Discover",
  components: {
    myNav,
    myfooter,
  },
});
</script>

<style scoped>
@import url("http://fonts.googleapis.com/css?family=Roboto");

body {
  font-family: "Roboto";
}

.sheetPadding {
  padding: 220px 68px 75px;
}

.sheet2 {
  margin-top: 110px;
  text-align: center;
}

.headingFont {
  margin-top: 11px;
  margin-left: 49px;
  font-weight: bold;
  font-size: 80px;
  line-height: 88px;
  letter-spacing: -2px;
}

.bodyFont {
  margin-left: 49px;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
}

.h2Font {
  margin-left: 49px;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.25px;
}

.nameFont {
  margin-left: 49px;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.5px;
}

.b2Font {
  margin-left: 49px;
  font-weight: medium;
  font-size: 14px;
  line-height: 24px;
}
</style>
