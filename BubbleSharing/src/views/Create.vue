<template>
  <body>
    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <v-col
          cols="12"
          style="height: 1024px"
          class="sheetPadding tw-bg-[url('src/assets/jn.png')]"
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

              <v-row no-gutter class="headingFont"> Creater your account </v-row>
              <v-row class="explain mt-4 tw-text-[#898989]"
                >Choose your bubblesharing username. You can always change it
                later.</v-row
              >
              <v-row class="mt-16" justify="center">
                <input
                  type="text" 
                  placeholder="bubble.sh/Username" 
                  v-model="username" 
                />
              </v-row>
              <v-row class="mt-6 mb-4" justify="center">
                <input type="text" placeholder="Email" />
              </v-row>
              <v-row class="tw-text-[#FF6853] explain">
                Choose a strong password with a number to ensure your account is secure.
              </v-row>
              <v-row class="mt-3" justify="center">
                <input type="text" placeholder="Password" />
              </v-row>
              <v-row class="mt-6" justify="center">
                <input type="text" placeholder="Confirm Password" />
              </v-row>

              <v-row class="mt-16 explainBold" justify="center">
                <p class="tw-text-[#898989]">
                  By clicking Create account, you agree to Bubble sharing’s
                  <u class="tw-text-[#FF6853]"> Terms and Conditions </u> , confirm you
                  have read our <u class="tw-text-[#FF6853]">Privacy Notice.</u> You may
                  receive offers, news and updates from us.
                </p>
              </v-row>

              <v-row class="mt-16" justify="center">
                <button class="button">Create account</button>
              </v-row>
              <router-link to="/login">
                <v-row class="mt-7 toLogin tw-text-[#FF6853]" justify="center">
                  Already have an account</v-row
                >
              </router-link>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </body>
</template>

<script>
import { ref } from 'vue';
import { useProductStore } from "@/stores/products";

export default {
  setup:() => {
    const {store, account} = useProductStore();
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const cfpassword = ref("");

    
    /*console.log("test", account.length);

    if (account.length != 0) username.value = account[0].userLink;

    // console.log("test",account[0].userLink);

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

    return { store, username, addLink }; */

    function create(store) {
      const account = {
        username: username.value,
        email: email.value,
        password: password.value,
        cfpassword: cfpassword.value,
      };

      console.log("account data", account);
      // this.$refs.form.validate();
      store.addNewAccount(account);
      for (var v = 0; v < this.$refs.form.length; v++) {
        this.$refs.form[v].validate();
      }
      this.$router.push("/page");
      console.log(account.username);
    }
    return { store, username, email, password, cfpassword, create };
  },

  data: () => ({
    model: '',
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

.sheetPadding {
  padding: 220px 68px 75px;
}

.marginlogo {
  margin-top: 56px;
  margin-left: 34px;
}

.headingFont {
  margin-top: 60px;
  margin-left: 75px;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -1px;
  color: #282828;
}

.explain {
  margin-left: 75px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
}

.explainBold {
  margin-left: 24px;
  font-weight: medium;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
}

.toLogin {
  margin-left: 24px;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
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

input[type="text"],
select:focus {
  border: 1px solid #5b78ff;
}
</style>
