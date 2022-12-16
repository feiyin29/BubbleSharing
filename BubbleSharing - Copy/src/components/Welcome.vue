<template>
  <body>
    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <v-col cols="12">
          <!-- <v-row no-gutter class="tw-mt-[58px]">
            <div class="tw-ml-[34px]">
              <img src="../assets/logo.png" width="148" />
            </div>
          </v-row> -->
          <v-row no-gutters class="d-flex justify-center align-center"> 
            <v-col cols="8" class="">
              <v-row no-gutter>
                <!-- <div class="logo tw-ml-[102px] tw-mt-[58px]"> -->
                <div class="logo">
                  <img src="../assets/logo.png" width="148" />
                </div>
              </v-row>
              <v-row no-gutters
                class="textDisplay3
                d-flex justify-center align-center
                " 
              >
                Welcome to bubble.sh!
              </v-row>
              <v-row no-gutters
                class="textBody3
                  tw-pt-[24px]
                  d-flex justify-center align-center
                "
              >
                Let’s start building your BubbleSharing. It will only take a minute.
              </v-row>
              <v-row no-gutters 
                class="tw-flex
                  tw-pt-[64px]
                "
              >
                <v-col></v-col>
                <v-col cols="8" class="
                  tw-h-[60px]
                ">
                  <button
                    variant="flat"
                    rounded="pill"
                    color="#FF4F7D"
                    class="
                      textBody3btn
                      tw-w-full
                      tw-bg-[#FF4F7D]
                      tw-rounded-full
                    "
                  >
                    Let's go
                  </button>
                </v-col>
                <v-col></v-col>
              </v-row>
            </v-col>
            <v-col cols="4"
              class="
                rightSide
              "
            >
              <img src="../assets/rightDecorate.png" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </body>
</template>

<script setup></script>

<style scoped>
@import url("http://fonts.googleapis.com/css?family=Roboto");
body {
  font-family: "Roboto";
}
.sheetPadding {
    padding: 220px 68px 75px;
}
.headingFont {
    font-weight: bold;
    font-size: 80px;
    line-height: 88px;
    letter-spacing: -2px;
}
.textFont {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.25px;
}
.textDisplay3 {
  font-weight: bold;
  font-size: 72px;
  line-height: 65px;
  letter-spacing: -1.5px;
}
.textBody3 {
  font-weight: medium;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0px;
  color:#898989;
}
.textBody3btn {
  height: 60px;
  font-weight: medium;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0px;
  color:#ffffff;
  text-transform: capitalize;
  transition-duration: 0.4s;
  cursor: pointer;
}
.textBody3btn:hover {
  background-color: #eb3666;
}
/* .rightSide {
    background-image: url('../assets/rightDecorate.png');
    width: 100%;
} */
.logo {
  position: absolute;
  /* left: 34px; */
  /* top: 58px; */
  left: 102px;
  top: 58px;
}
</style>
