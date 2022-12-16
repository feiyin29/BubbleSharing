<template>
  <v-container fluid class="pa-0">
    <v-col cols="12" class="sheetStyle">
      <v-row no-gutter>
        <v-col cols="5" class="ml-10">
          <v-row no-gutter class="Display1 mb-10">Our Founders' Story</v-row>
          <v-row no-gutter class="Body3 mt-16">
            Bubble Sharing is a tool to help you share everything you are, 
            in one simple link – making your online content more discoverable, 
            easier to manage and more likely to convert. 
          </v-row>
          <v-row no-gutter class="Body3">
            Here’s where it all began.
          </v-row>
        </v-col>
        <v-col cols="6" class="ml-16 mt-16">
          <v-img
            src="../src/assets/decAbout.png"
            class="tw-ml-20"
          > 
          </v-img>
        </v-col>
      </v-row>
      <v-row no-gutter>
        <v-col cols="12" class="ml-10 tw-mt-24 pr-16">
          <v-row no-gutter class="Body3 tw-indent-14">
            In 2018 Kasapak and Friends found a common pain point when running their digital agency, Bolster, 
            managing social media accounts for their clients. Endlessly updating singular bio links felt like a waste of time, 
            or worse, often got overlooked. Overnight, 
            the first iteration of Bubble Sharing was live, and we haven’t looked back since!
          </v-row>
          <v-row no-gutter class="Body3 mt-10 tw-indent-14">
            Today, with 30M+ users worldwide, we’re helping brands, artists, publishers, 
            agencies and influencers better control their presence online. As the internet became more fragmented, 
            we grew Bubble Sharing’s functionality to better serve those using it and to streamline the content-sharing process.
          </v-row>
          <v-row no-gutter class="Body3 mt-10 tw-indent-14">
            We’re a passionate team of developers, designers, marketers and biz ops, 
            committed to equipping content-creators with the best tools for getting their work seen. 
            We’re headquartered in Melbourne, Australia and have offices in Sydney and Los Angeles.
          </v-row>
          <v-row no-gutter class="Body3 mt-10 tw-indent-14">
            In 2019 we were thrilled to be one of CNBC’s ‘Upstart 100’, a list of the “brightest, 
            most intriguing, young startups promising to become the great companies of tomorrow”. 
            In March 2020, Fast Company honored us in their ‘Most Innovative Companies of 2020’ list, 
            placing us number four in the Social Media category. 
            Previous honorees of the Social Media fourth place include Glossier and Reddit.
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { ref } from 'vue';
  export default {
    data: () => ({
      model: '',
    }),
  }
  const msg = ref('')
</script>

<style scoped>
@import url("http://fonts.googleapis.com/css?family=Roboto");
body {
  font-family: "Roboto";
}
.sheetStyle {
  padding: 142px 68px 75px;
}
.ftsheetStyle {
  margin-top: -175px;
  border-radius: 82px;
}
.btnShadow:hover {
  background-color: black;
  box-shadow: 3px 7px 20px rgba(70, 70, 70, 0.4);
  border-radius: 80px;
}
.Display1 {
  font-weight: bold;
  font-size: 80px;
  line-height: 88px;
  letter-spacing: -2px;
}
.Heading1 {
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.5px;
}
.Heading2 {
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.25px;
}
.Body3 {
  font-weight: medium;
  font-size: 24px;
  line-height: 26px;
  letter-spacing: 0.25px;
}
.loginBtn {
  background-color: #763AB6;
  color: #ffffff;
  border: 3px solid transparent;
}
.loginBtn:hover {
  background-color: #f8f8f8;
  color: #763AB6;
  font-weight: bold;
  border-color: #763AB6;
  border-width: 3px;
}
.signBtn {
  background-color: #181818;
  color: #ffffff;
  border: 3px solid transparent;
}
.signBtn:hover {
  background-color: #f8f8f8;
  color: #181818;
  font-weight: bold;
  border-color: #181818;
  border-width: 3px;
}
</style>