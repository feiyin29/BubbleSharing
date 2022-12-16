<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col
        
      >
        <v-row no-gutters class="pl-11">
          <v-col cols="6" class="pl-16 pr-16">
            <router-link to="/">
              <v-img
                :aspect-ratio="aspectRatio"
                :width="120"
                class="marginlogo"
                src="src/assets/logo.png"
              ></v-img>
            </router-link>

            <v-row no-gutter class="headingFont"> Log in your link </v-row>

            <v-row class="mt-16" justify="center">
              <input type="text" placeholder="bubble.sh/Username" />
            </v-row>

            <input :type="inputType" class="form-control" />
      <button class="input-group-text" @click.prevent="ToggleButton">
        <span v-if="inputType == 'password'">{{ ShowPassword }}</span>
        <span v-else>{{ HidePassword }}</span>
      </button>

            <v-row class="mt-16 grayFont" justify="center"> Forgot Password ?</v-row>

            <router-link to="/create">
              <v-row class="mt-6 grayFont" justify="center"
                >don't have a bubble sharing account? Create one</v-row
              >
            </router-link>

            <v-row class="mt-16 grayFont" justify="center">
              <p>
                This site is protected by reCAPTCHA and the
                <u class="redFont"> Google Privacy Policy.</u> and
                <u class="redFont"> Terms of Service apply.</u>
              </p>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data() {
    return {
      ShowPassword: 'Show Password',
      HidePassword: 'Hide Password',
    };
  },
  methods: {
    ToggleButton() {
      this.inputType = this.inputType === "password" ? "text" : "password";
    },
  },
};
</script>

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
  margin-left: 75px;
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
}


input[type="password"],
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
}
</style>
