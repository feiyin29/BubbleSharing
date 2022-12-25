<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col cols="1"></v-col>
      <v-col cols="6">
        <v-row no-gutters class="my-14 ml-n6">
          <router-link to="/">
            <v-img
              :aspect-ratio="aspectRatio"
              :width="148"
              class="marginlogo"
              src="src/assets/logo.png"
            ></v-img>
          </router-link>
        </v-row>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row no-gutters class="Display2 mt-n8"> Create your account </v-row>
          <v-row no-gutters class="Body1Bold tw-text-[#898989] my-4 mb-10">
            Choose your bubblesharing username. You can always change it later.
          </v-row>
          <v-text-field
            v-model="username"
            :counter="6"
            :rules="nameRules"
            placeholder="bubble.sh/Username"
            required
            variant="outlined"
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            placeholder="E-mail"
            required
            variant="outlined"
          ></v-text-field>
          <v-row no-gutters class="Body1Bold tw-text-[#FF6853] mb-1">
            Choose a strong password with a number to ensure your account is secure.
          </v-row>
          <v-text-field
            placeholder="Password"
            v-model="password"
            required
            variant="outlined"
            :rules="passwordRules"
            :type="show ? 'text' : 'password'"
            :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="show = !show"
          ></v-text-field>

          <v-text-field
            placeholder="Confirm Password"
            v-model="cfpassword"
            :rules="confirmPasswordRules.concat(passwordConfirmationRule)"
            required
            variant="outlined"
            :type="showcf ? 'text' : 'password'"
            :append-inner-icon="showcf ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="showcf = !showcf"
          ></v-text-field>
          <v-col class="mb-5 Body1 pa-0">
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
          <v-row no-gutters class="d-flex justify-center">
            <v-btn :disabled="!valid" class="d-flex justify-center" @click="validate">
              Create account
            </v-btn>
          </v-row>
          <v-row no-gutters class="Heading3 tw-text-[#FF6853] d-flex justify-center my-6">
            <button class="hover:tw-underline" @click="$router.push('/login')">
              Already have an account?
            </button>
          </v-row>
        </v-form>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="4" class="tw-bg-[#EC5F93]">
        <img src="../assets/create3.png" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, computed } from "vue";
import { useProductStore } from "@/stores/products";
export default {
  setup: () => {
    const store = useProductStore();
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const cfpassword = ref("");

    if (store.account.length != 0) username.value = store.account[0].username;

    function create(store) {
      const account = {
        username: username.value,
        email: email.value,
        password: password.value,
        cfpassword: cfpassword.value,
        userLink: "http://localhost:5173/mybubblesharing",
      };

      console.log("account data", account);
      store.addNewAccount(account);
      if (store.account.length > 1) store.deleteUsername();
      console.log("account pinia", store.account[0]);
      this.$router.push("/welcome");
    }
    return { store, username, email, password, cfpassword, create };
  },
  data: () => ({
    show: false,
    showcf: false,
    valid: true,
    nameRules: [
      (v) => !!v || "Username is required",
      (v) => (v && v.length <= 6) || "Name must be less than 6 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 5) || "Please enter at least 5 characters",
      (v) => /(?=.*\d)/.test(v) || "Must have one number",
    ],
    confirmPasswordRules: [(v) => !!v || "Password is required"],
  }),

  methods: {
    validate() {
      console.log("here", this.$refs.form.validate());
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.create(this.store);
        this.$router.push("/welcome");
      }
    },
  },
  computed: {
    passwordConfirmationRule() {
      return () => this.password === this.cfpassword || "Password must match";
    },
  },
};
</script>

<style scoped>
@import url("http://fonts.googleapis.com/css?family=Roboto");
body {
  font-family: "Roboto";
}
.v-btn {
  font-size: 22px;
  color: #f8f8f8;
  background-color: #ff4f7d;
  border-radius: 80px;
  text-transform: capitalize;
  padding: 25px 330px;
}
.Heading3 {
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.25px;
}
.Display2 {
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -1px;
}
.Body1 {
  font-weight: medium;
  font-size: 16px;
  line-height: 24px;
}
.Body1Bold {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
}
</style>
