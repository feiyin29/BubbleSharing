<template>
    <body >
      <v-container fluid class="pa-0">
      <v-row no-gutter>
        <v-col cols="12" style="height: 1024px " class="sheetPadding tw-bg-[#5B78FF] tw-bg-[url(https://cdn.discordapp.com/attachments/1052226621857341482/1052226678572724244/discover.png)] ">
          <v-row no-gutters class="pl-11" >
            <v-col cols="7" >
          <v-row v-row no-gutter class="headingFont">
                The easiest place to <br>
                update and share <br> 
                your content
            </v-row>
            <v-row no-gutter class="textFont mt-8">
                Let’s everyone see your Bubble Sharing
            </v-row>
            <v-row class="mt-12" >
              <button class="button" @click="this.$router.push('/create')">get your link</button>
            </v-row>
            
          </v-col>
          </v-row>
        </v-col>
      </v-row>
      </v-container>
    </body>
</template>


<script>

</script>

<style scoped>
@import url("http://fonts.googleapis.com/css?family=Roboto");
body {
  font-family: "Roboto";

}
.sheetPadding {
  padding: 142px 68px 75px;
}
.headingFont {
    font-weight: bold;
    font-size: 80px;
    line-height: 88px;
    letter-spacing: -2px;
    color: #F8F8F8   
}
.textFont {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.25px;
    color: #F8F8F8
}
.button {
  background-color: #FFDA52;
  border-radius: 37px;
  border :none;
  color: #282828;
  text-align: center;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.5px;
  cursor: pointer;
  height: 80px;
  width: 285px;
}
.button:hover {
  background-color: #FCCD22;
}
img {
  margin-top: 169px;
  margin-left: 775px;
}
</style>
