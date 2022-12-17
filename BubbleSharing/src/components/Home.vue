<template>
  <v-container fluid class="pa-0">
    <!-- section 1 -->
    <v-row no-gutter>
      <v-col cols="12" style="height: 1024px" class="sheetStyle tw-bg-[#00C97B] tw-bg-[url('src/assets/home1.png')]">
        <v-row no-gutter class="tw-pl-11">
          <v-col cols="7">
            <v-row no-gutter class="Display1 tw-text-[#FFC8EB]">
              Everything from you <br>
              to everyone. In one simple link
            </v-row>
            <v-row no-gutter class="Heading2 tw-text-[#FFC8EB] mt-8">
              Share everything you create, and share the link to <br>
              everyone on the page.
            </v-row>
            <v-row no-gutter class="tw-py-16">
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  variant="solo"
                  placeholder="bubble.sh/yourname"  
                  v-model="username"
                  :rules="nameRules"
                  class="elevation-0"
                  width="204"
                ></v-text-field>
              </v-form>
                <button class="
                  tw-bg-[#FFDA52]
                  hover:tw-bg-[#FCCD22]
                  required
                  tw-text-[#252525] tw-font-bold 
                  py-2 px-6 ml-10 tw-rounded-full"
                  @click="validate"
                >
                  claim your link
                </button>
              
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- section 2 -->
    <v-row no-gutter>
      <v-col cols="12" style="height: 1024px" class="sheetStyle tw-bg-[#FF6853] tw-bg-[url('src/assets/home2.png')]">
        <v-row no-gutter>
          <v-col cols="6"></v-col>
            <v-col cols="6" >
              <v-row no-gutter class="Display1 tw-text-[#F0E260]">
                Share your Bubble <br>
                Shareing <br>
                anywhere you like
              </v-row>
              <v-row no-gutter class="Heading2 tw-text-[#F0E260] mt-8">
                Add your unique Linktree URL to all the platforms and places <br>
                you find your audience. Then use your QR code to drive your <br>
                offline traffic online.
              </v-row>
              <v-row no-gutter>
              <button class="
                tw-bg-[#BD8EDE]
                hover:tw-bg-[#B683DA]
                tw-hover:bg-blue-700 
                tw-text-[#F8F8F8] Heading1 
                tw-py-4 tw-px-8 mt-11 tw-rounded-full"
                @click="$router.push('/create')"
              >
                Get start for free
              </button>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from 'vue';
import { useProductStore } from "@/stores/products";

export default {
  setup:() => {
    const store = useProductStore();
    const username = ref("");
    const email = ref("");
    const password = ref("");

    function addLink(){
      const account = {  
                        username: username.value ,
                        email: email.value,
                        password: password.value,
                        userLink: "bubble.sh/"+username.value,
                      }
      console.log("account data", account);
      store.addNewAccount(account);
      this.$router.push('/create');
    }

    return { store, username, addLink }
  },

  data: () => ({
    model: '',
    inputBox: false,
    valid: true,
    nameRules: [
        v => !!v || '',
        v => (v && v.length <= 5) || 'Name must be less than 5 characters',
      ],
  }),
  methods: {
    async validate () {
        const { valid } = await this.$refs.form.validate()

        if (valid) {
          this.addLink();
          console.log("pass");
        } else this.$router.push('/create');
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
  line-height: 24px;
}
.v-text-field{
  width: 245px;
  height: 54px;
}
</style>