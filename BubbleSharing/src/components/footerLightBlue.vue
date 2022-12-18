<template>
  <v-container fluid class="pa-0">
    <v-footer class="pa-0">
      <v-row no-gutter>
      <v-col cols="12" style="height: 634px" class="outerFtsheetStyle tw-bg-[#C9D7FC] ">
        <v-row no-gutter style="height: 542px" class="innerFtsheetStyle tw-bg-white">
          <v-col cols="12" class="">
            <v-row no-gutter class="d-flex justify-center mt-6 ">
              <button class=" 
                hover:tw-underline
                tw-text-[#252525] 
                Heading1 
                tw-py-3 mx-16"
                @click="this.$router.push('/')"
              >
                Home
              </button>
              <button class="
                hover:tw-underline
                tw-text-[#252525] 
                Heading1 
                tw-py-3 mx-16"
                @click="this.$router.push('/manage')"
              >
                Management
              </button>
              <button class="
                hover:tw-underline
                tw-text-[#252525] 
                Heading1 
                tw-py-3 mx-16 "
                @click="this.$router.push('/aboutus')"
              >
                About Us
              </button>
            </v-row>
            <v-row no-gutter class="d-flex justify-center mt-16 pt-8">
              <button class="
                loginBtn
                tw-rounded-md
                Body3
                px-12 py-3"
                @click="this.$router.push('/login')"
              >
                Login
              </button>
              <button class="
                signBtn
                tw-rounded-md
                Body3
                px-10 py-3 ml-4"
                @click="signup(store)"
              >
                Sign up
              </button>
            </v-row>
              <v-row no-gutter class="d-flex justify-center mt-16 pt-6">
                <input class="mx-3 btnShadow" type="image" src="src/assets/bbsBTN.png"/>
                <input class="mx-3 btnShadow" type="image" src="src/assets/ttBTN.png"/>
                <input class="mx-3 btnShadow" type="image" src="src/assets/tBTN.png"/>
                <input class="mx-3 btnShadow" type="image" src="src/assets/fbBTN.png"/>
              </v-row>
              <v-row no-gutter class="d-flex justify-center mt-16 pt-8">
                <button class="
                  loginBtn
                  tw-rounded-md
                  Body3
                  px-12 py-3"
                  @click="this.$router.push('/login')"
                >
                  Login
                </button>
                <button class="
                  signBtn
                  tw-rounded-md
                  Body3
                  px-10 py-3 ml-4"
                  @click="this.$router.push('/create')"
                >
                  Sign up
                </button>
              </v-row>
                <v-row no-gutter class="d-flex justify-center mt-16 pt-6">
                  <input class="mx-3 btnShadow" type="image" src="src/assets/bbsBTN.png"/>
                  <input class="mx-3 btnShadow" type="image" src="src/assets/ttBTN.png"/>
                  <input class="mx-3 btnShadow" type="image" src="src/assets/tBTN.png"/>
                  <input class="mx-3 btnShadow" type="image" src="src/assets/fbBTN.png"/>
                </v-row>
              <v-row no-gutter class="d-flex justify-center mt-16">
                <button class=" 
                  hover:tw-underline
                  tw-text-[#252525] 
                  Heading2 
                  tw-py-3 mx-6"
                  @click="this.$router.push('/termsofservice')"
                >
                  Terms of Service
                </button>
                <button class="
                  hover:tw-underline
                  tw-text-[#252525] 
                  Heading2
                  tw-py-3 mx-6"
                  @click="this.$router.push('/privacy')"
                >
                  Privacy Policy
                </button>
                <button class="
                  hover:tw-underline
                  tw-text-[#252525] 
                  Heading2
                  tw-py-3 mx-6"
                  @click="this.$router.push('/commustandards')"
                >
                  Community Standards
                </button>
                <button class="
                  hover:tw-underline
                  tw-text-[#252525] 
                  Heading2 
                  tw-py-3 mx-6 "
                  @click="this.$router.push('/cookienotices')"
                >
                  Cookies Notice
                </button>
                <button class="
                  hover:tw-underline
                  tw-text-[#252525] 
                  Heading2 
                  tw-py-3 mx-6 "
                  @click="this.$router.push('/reportviolation')"
                >
                  Report violation
                </button>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        </v-row>
      </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script>
import { ref } from 'vue';
import { useProductStore } from "@/stores/products";

export default {
  setup:() => {
    const store = useProductStore();
    return { store }
  },

  methods: {
    signup(store) {
          if(store.account.length != 0) store.deleteUsername();
          this.$router.push('/create');
      },
  },
}
</script>

<style scoped>
@import url("http://fonts.googleapis.com/css?family=Roboto");
body {
  font-family: "Roboto";
}
.sheetStyle {
  padding: 168px 68px 25px;
}
.ctSheetStyle {
  border-radius: 20px;
}
.outerFtsheetStyle {
  padding: 220px 68px 75px;
}
.innerFtsheetStyle {
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
.Body1 {
  font-weight: medium;
  font-size: 16px;
  line-height: 24px;
}
.Body3 {
  font-weight: medium;
  font-size: 24px;
  line-height: 24px;
}
.btn {
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.list {
  list-style-type: disc;
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
