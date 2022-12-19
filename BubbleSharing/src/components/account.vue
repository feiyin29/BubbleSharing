<template>
  <v-container fluid class="pa-0 tw-bg-[#F8F8F8]" style="height: 1024px">
    <v-row no-gutters class="sheetPadding">
      <v-col cols="12" class="headingFont d-flex justify-center"> My Account </v-col>

      <v-row class="Padding d-flex justify-center">
        <v-col cols="12" class="h2Font mt-10">My information</v-col>
        <v-col cdls="12" class="tw-w-full tw-bg-[#fff] pa-8 tw-rounded-lg">
          <v-from>
            <v-row>
              <v-responsive class="mx-auto mt-3">
                <v-text-field
                  v-model="username"
                  hide-details="auto"
                  label="Username"
                  variant="underlined"
                ></v-text-field>
              </v-responsive>
            </v-row>

            <v-row>
              <v-responsive class="mx-auto mt-3 mb-2">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  hide-details="auto"
                  label="Email"
                  variant="underlined"
                ></v-text-field>
              </v-responsive>
            </v-row>
          </v-from>
        </v-col>

        <v-col cols="12" class="mt-11">
          <router-link to="/page">
            <button class="button" @click="update()">Save change</button>
          </router-link>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { useProductStore } from "@/stores/products";

export default {
  setup: () => {
    const { store, account, updateAccount } = useProductStore();

    const username = ref(account[0].username);
    const email = ref(account[0].email);

    function update() {
      const editAccount = {
        username: username.value,
        email: email.value,
        userLink: "bubble.sh/" + username.value,
        // username: username.value ,
        // email: email.value,
        // password: password.value,
        // userLink: "bubble.sh/"+username.value,
      };
      console.log("account data", editAccount);
      updateAccount(editAccount);
    }
    return { store, update, username, email };
  },

  data: () => ({
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>

<style scoped>
@import url("http://fonts.googleapis.com/css?family=Roboto");
body {
  font-family: "Roboto";
}

.sheetPadding {
  padding: 0px 68px 0px 68px;
}
.Padding {
  padding: 0px 147px 0px 147px;
}

.headingFont {
  margin-top: 136px;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -1px;
  color: #282828;
}

.h2Font {
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.25px;
  font-weight: medium;
}

.button {
  background-color: #5b78ff;
  border-radius: 20px;
  border: none;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  cursor: pointer;
  height: 60px;
  width: 222px;
  float: right;
}

.button:hover {
  background-color: #4462f0;
}
</style>
