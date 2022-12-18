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
          <v-col cols="12" no-gutter class="headingFont pa-0">
            Creater your account
          </v-col>
          <v-col cols="12" class="pa-0 explain tw-text-[#898989]">
            Choose your bubblesharing username. You can always change it later.
          </v-col>
          <v-from ref="form" v-model="valid" lazy-validation>
            <v-col cols="12" class="mt-10 pa-0">
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
                placeholder="Email"
                v-model="email"
                :rules="emailRules"
                variant="outlined"
                required
              ></v-text-field>
            </v-col>

            <v-col class="tw-text-[#FF6853] explain pa-0">
              Choose a strong password with a number to ensure your account is secure.
            </v-col>

            <v-col cols="12" class="mt-3 pa-0">
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

            <v-col cols="12" class="pa-0">
              <v-text-field
                placeholder="Confirm Password"
                v-model="cfpassword"
                :rules="[cfpasswordRules, passwordMatch]"
                variant="outlined"
                required
                :type="showcf ? 'text' : 'password'"
                :append-inner-icon="showcf ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="showcf = !showcf"
              ></v-text-field>
            </v-col>

            <v-col class="mt-3 explainBold pa-0">
              <p class="tw-text-[#898989]">
                By clicking Create account, you agree to Bubble sharing’s
                <router-link to="/termsofservice"
                  ><u class="tw-text-[#FF6853]"> Terms and Conditions </u></router-link
                >
                , confirm you <br />
                have read our
                <router-link to="/privacy"
                  ><u class="tw-text-[#FF6853]">Privacy Notice.</u></router-link
                >
                You may receive offers, news and updates from us.
              </p>
            </v-col>

            <v-col cols="12" class="mt-10 pa-0">
              <button class="button" @click="create(store)">Create account</button>
            </v-col>
          </v-from>
          <v-col
            cols="12"
            class="mt-7 toLogin tw-text-[#FF6853]"
            style="margin-left: 211px"
          >
            <router-link to="/login">Already have an account ?</router-link>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" class="pa-0">
        <img src="../assets/create.png" />
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
    const email = ref("");
    const password = ref("");
    const cfpassword = ref("");

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
    show: false,
    showcf: false,
    valid: true,
    model: "",
    nameRules: [
      (v) => !!v || "",
      (v) => (v && v.length <= 5) || "Name must be less than 5 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    cfpassword: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 5) || "Please enter at least 5 characters",
      (v) => /(?=.*\d)/.test(v) || "Must have one number",
    ],
    cfpasswordRules: [(v) => !!v || "Confirm password"],
  }),

  computed: {
    passwordMatch() {
      return () => this.password === this.cfpassword || "Password must match";
    },
  },

  methods: {
    async validate(store) {
      const { valid } = await this.$refs.form.validate();

      if (valid) alert("Form is valid");
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
  padding: 0px 0px 0px 68px;
}

.contentPadding {
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
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
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
