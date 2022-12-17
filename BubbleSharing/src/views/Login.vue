<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col cols="12">
        <v-row no-gutters class="pl-16 ">
          <v-col cols="7" >
            <router-link to="/">
              <v-img
                :aspect-ratio="aspectRatio"
                :width="120"
                class="marginlogo"
                src="src/assets/logo.png"
              ></v-img>
            </router-link>

            <v-row no-gutter class="headingFont"> Log in your link </v-row>

            <v-row class="mt-16" >
              <input type="text" placeholder="bubble.sh/Username" />
            </v-row>

            <v-row class="mt-6" >
              <input type="text" placeholder="password" />
            </v-row>

            <v-row class="mt-16" >
              <button class="button">Log in</button>
            </v-row>

            <v-row class="mt-16 grayFont" style="margin-left: 368px;" > Forgot Password ?</v-row>

            <router-link to="/create">
              <v-row class="mt-6 grayFont" style="margin-left: 259px;" >
                don't have a bubble sharing account? Create one
                </v-row>
            </router-link>

            <v-row class="mt-16 grayFont" style="margin-left: 110px;" >
              <p>
                This site is protected by reCAPTCHA and the
                <router-link to="/privacy"><u class="redFont"> Google Privacy Policy.</u></router-link> and
                <router-link to="/termsofservice"><u class="redFont"> Terms of Service apply.</u></router-link>
              </p>
            </v-row>
          </v-col>
          <v-col cols="5">
              <img src="../assets/login.png" width="610" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
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

.marginlogo {
  margin-top: 56px;
  margin-left: 34px;
}

.headingFont {
  margin-top: 138px;
  margin-left: 107px;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -1px;
  color: #282828;
}

.grayFont {
  text-align: center;
  font-weight: medium;
  font-size: 16px;
  line-height: 24px;
  color: #757575;
}

.redFont {
  text-align: center;
  font-weight: medium;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  text-decoration-color: #b10000;
  color: #b10000;
}

.button {
  background-color: #ff4f7d;
  border-radius: 60px;
  border: none;
  color: #f8f8f8;
  text-align: center;
  font-weight: medium;
  font-size: 24px;
  line-height: 24px;
  cursor: pointer;
  height: 60px;
  width: 645px;
  margin-left: 110px;
}

.button:hover {
  background-color: #e03965;
}

input[type="text"],
select {
  height: 51px;
  width: 645px;
  padding: 20px;
  display: inline-block;
  border: 1px solid #5b78ff;
  border-radius: 5px;
  box-sizing: border-box;
  font-weight: medium;
  font-size: 24px;
  line-height: 24px;
  caret-color: #5b78ff;
  margin-left: 120px;
}

input[type="text"],
select:focus {
  border: 1px solid #5b78ff;
}
</style>
