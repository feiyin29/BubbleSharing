<template>
  <v-container fluid class="d-flex justify-center">
      <v-app-bar class="barSheetStyle d-flex justify-center " style="max-width: 1406px;">
        <v-row no-gutter class="d-flex justify-center">
          <v-col cols="3" class=" ">
            <router-link to="/">
              <v-img
                :aspect-ratio="aspectRatio"
                :width="120"
                src="src/assets/logo.png"
                class="ml-10"
              >
              </v-img>
            </router-link>
          </v-col>
          <v-col cols="6" class="d-flex justify-start align-center">
            <button class="  
                hover:tw-text-[#FF6853]
                tw-text-[#181818] 
                Heading2 
                tw-py-3 mx-4"
                @click="this.$router.push('/')"
              >
                Home
            </button>
            <button class=" 
                hover:tw-text-[#FF6853]
                tw-text-[#181818] 
                Heading2 
                tw-py-3 mx-4"
                @click="this.$router.push('/discover')"
              >
                Discover 
            </button>
            <button class=" 
                hover:tw-text-[#FF6853]
                tw-text-[#181818] 
                Heading2 
                tw-py-3 mx-4"
                @click="this.$router.push('/aboutus')"
              >
                About us
            </button>
          </v-col>
          <v-col cols="3" class="d-flex justify-end align-center">
            <v-row no-gutter class="d-flex justify-center">
              <button class="
                  loginBtn
                  Body3
                  "
                  @click="this.$router.push('/login')"
                >
                  Login
                </button>
                <button class="
                  signBtn
                  Body3
                  ml-3 mr-8"
                  @click="this.$router.push('/create')"
                >
                  Sign up
                </button>
            </v-row>
          </v-col>
        </v-row>
      </v-app-bar>
  </v-container>
</template>

<script setup>

</script>
<style scoped>
.barSheetStyle {
  width: 1304px;
  height: 94px;
  margin: 32px 56px 0px;
  background-color: #f8f8f8;
  border-radius: 82px;
}
.Heading2 {
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.25px;
}
.loginBtn {
  width: 91px;
  height: 59px;
  background-color: #763AB6;
  color: #ffffff;
  border: 3px solid transparent;
  border-radius: 5px;
}
.loginBtn:hover {
  background-color: #f8f8f8;
  color: #763AB6;
  font-weight: bold;
  border-color: #763AB6;
  border-width: 3px;
}
.signBtn {
  width: 148px;
  height: 59px;
  background-color: #181818;
  color: #ffffff;
  border: 3px solid transparent;
  border-radius: 26px;
}
.signBtn:hover {
  background-color: #f8f8f8;
  color: #181818;
  font-weight: bold;
  border-color: #181818;
  border-width: 3px;
}
.Body3 {
  font-weight: medium;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.25px;
}
</style>