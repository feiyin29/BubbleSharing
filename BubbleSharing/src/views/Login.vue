<template>
  <v-container fluid class="pa-0">
    <v-row no-gutter class="sheetPadding">
      <v-col cols="8" class="pa-0">
        <v-row>
          <router-link to="/">
            <v-img
              :aspect-ratio="aspectRatio"
              :width="120"
              class="marginlogo"
              src="src/assets/logo.png"
            ></v-img>
          </router-link>
        </v-row>

        <v-row no-gutters class="contentPadding">
          <v-col cols="12" no-gutter class="headingFont pa-0"> Log in your link </v-col>
          <v-from ref="form" v-model="valid" lazy-validation>
            <v-col cols="12" class="mt-16 pa-0">
              <v-text-field
                placeholder="bubble.sh/Username"
                v-model="username"
                :rules="nameRules"
                variant="outlined"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" class="pa-0">
              <v-text-field
                placeholder="Password"
                v-model="password"
                :rules="passwordRules"
                variant="outlined"
                required
                :type="show ? 'text' : 'password'"
                :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="show = !show"
              ></v-text-field>
            </v-col>

            <v-col cols="12" class="mt-10 pa-0">
              <button class="button" @click="create()">Login</button>
            </v-col>
          </v-from>

          <v-col cols="12" class="mt-10 explain pa-0" style="margin-left: 258px">
            Forgot Password?
          </v-col>
          <v-col cols="12" class="mt-5 explain pa-0" style="margin-left: 149px">
            <router-link to="/create">
              don't have a bubble sharing account? Create one
            </router-link>
          </v-col>
          <v-col cols="12" class="mt-16 explainBold pa-0">
            <p>
              This site is protected by reCAPTCHA and the
              <router-link to="/privacy"
                ><u class="tw-text-[#B10000]"> Google Privacy Policy.</u></router-link
              >
              and
              <router-link to="/termsofservice"
                ><u class="tw-text-[#B10000]"> Terms of Service apply.</u></router-link
              >
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" class="pa-0">
        <img src="../assets/login.png" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { useProductStore } from "@/stores/products";

export default {
  setup: () => {
    const store = useProductStore();
    const username = ref("");
    const password = ref("");
    /*console.log("test", account.length);

    if (account.length != 0) username.value = account[0].userLink;

    // console.log("test",account[0].userLink);

    function addLink() {
      const account = {
        username: username.value,
        email: email.value,
        password: password.value,
        userLink: "bubble.sh/" + username.value,
      };
      console.log("account data", account);
      store.addNewAccount(account);
      this.$router.push("/create");
    }

    return { store, username, addLink }; */

    function create() {
      const account = {
        username: username.value,
        password: password.value,
      };

      console.log("account data", account);
      // this.$refs.form.validate();
      store.addNewAccount(account);
      for (var v = 0; v < this.$refs.form.length; v++) {
        this.$refs.form[v].validate();
      }
      /*this.$router.push("/create");*/
      console.log(account.username);
      this.$router.push("/page");
    }
    return { store, username, password, create };
  },

  data: () => ({
    show: false,
    showcf: false,
    valid: true,
    model: "",
    nameRules: [
      (v) => !!v || "Username is required",
      //  (v) => (v && v.length <= 5) || "Name must be less than 5 characters",
    ],
    password: "",
    cfpassword: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 5) || "Please enter at least 5 characters",
      (v) => /(?=.*\d)/.test(v) || "Must have one number",
    ],
  }),
  /* methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      /*if (valid) {
        this.addLink();
        console.log("pass");
      } else this.$router.push("/create");
    },
  },*/
};
</script>

<style scoped>
@import url("http://fonts.googleapis.com/css?family=Roboto");

body {
  font-family: "Roboto";
}

.sheetPadding {
  padding: 0px 0px 0px 68px;
}

.contentPadding {
  padding: 0px 46px 0px 109px;
}
.Padding {
  padding: 0px 109px 0px 109px;
}

.marginlogo {
  margin-top: 56px;
  margin-left: 34px;
}

.headingFont {
  margin-top: 60px;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -1px;
  color: #282828;
}

.explain {
  font-size: 16px;
  line-height: 24px;
  color: #757575;
}

.explainBold {
  font-weight: medium;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
}

.toLogin {
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
</style>
