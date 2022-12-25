<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters class="sheetPadding">
      <v-col cols="12" class="headingFont d-flex justify-center"> Submit Feedback </v-col>
      <v-from ref="form" v-model="valid" lazy-validation>
        <v-col cols="12" class="mt-10 d-flex justify-center" justify="center">
          <textarea v-model="feedback"></textarea>
          <!--    <v-textarea
            class="tw-rounded-xl tw-border-[#C9D7FC tw-border-2]"
            auto-grow
            variant="outlined"
          ></v-textarea> -->
        </v-col>

        <v-col cols="12 mt-4" class="d-flex justify-end">
          <!-- <button class="button" @click="dialog = true">Submit</button> -->
          <!-- dialog & save btn -->

          <!-- submit btn & modal dialog -->
          <v-dialog
                        v-model="dialog"
                        width="600"
                        >
                        <template v-slot:activator="{ props }">
                            <v-btn
                                :disabled="!valid"
                                class="submitBtn"
                                @click="sentFeedback()"
                                v-bind="props"
                            >
                              Submit
                            </v-btn>
                        </template>
                        <!-- <v-col></v-col>
                        <v-col cols="5"> -->
                          <v-card rounded="xl" >
                              <v-card-text class="text-center my-6">
                                  <v-icon 
                                      size="80"
                                      color="#00C97B"
                                      class="mt-8"
                                  >
                                      mdi-check-circle-outline
                                  </v-icon>
                              <div class="text-h5 px-12 pb-8 pt-4">Send feedback success!</div>
                              </v-card-text>
                              <v-card-actions  class="justify-center mb-4">
                              <v-btn 
                                  color="#E93330" 
                                  rounded
                                  @click="submit(dialog)"
                                  @click.stop="dialog = false"
                              > 
                                  Close
                              </v-btn>
                              </v-card-actions>
                          </v-card>
                    </v-dialog>
        </v-col>
      </v-from>
      <!-- <v-dialog v-model="dialog" width="357">
        <v-card>
          <v-card-actions class="pa-0">
            <v-spacer class="pa-0"></v-spacer>
            <router-link to="/page">
              <v-btn
                rounded="pill"
                size="small"
                color="red"
                class="pa-0"
                @click="dialog = false"
                >X</v-btn
              >
            </router-link>
          </v-card-actions>
          <v-card-text :height="109" :width="357" class="popup pa-0 mb-5">
            Send Feedbck Success!
          </v-card-text>
        </v-card>
      </v-dialog> -->
    </v-row>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { useProductStore } from "@/stores/products";

export default {
  setup: () => {
    const store = useProductStore();
    const feedback = ref('');

    // function add() {
    //   const feedback = {
    //     feedback: feedback.value,
    //   };

    //   console.log("account data", feedback);
    //   // this.$refs.form.validate();
    //   store.addFeedback(feedback);
    //   for (var v = 0; v < this.$refs.form.length; v++) {
    //     this.$refs.form[v].validate();
    //   }
    //   /*this.$router.push("/create");*/
    //   //  console.log(account.username);
    //   this.$router.push("/page");
    // }
    function sentFeedback() {
      const feedbackData = {
        feedback: feedback.value,
      };
      // this.$refs.form.validate();
      console.log("feedback data", feedbackData);
      // store.addNewFeedback(feedback);
      // if (store.account.length > 1) store.deleteUsername();
      // console.log("account pinia", store.account[0]);
      // this.$router.push("/welcome");
    }

    return { store, feedback, sentFeedback};
  },

  data: () => ({
    dialog: false,
    valid: true, 
    // dialog: false,
    // valid: true,
    // feedback: "",
  }),
  methods: {
    submit(dialog) {
      dialog = false;
      console.log("dialog",dialog);
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
  padding: 0px 118px 0px 118px;
}

.headingFont {
  margin-top: 136px;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -1px;
  color: #282828;
}
.popup {
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.25px;
  text-align: center;
}
.button {
  background-color: #04b8ad;
  border-radius: 50px;
  border: none;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  cursor: pointer;
  height: 72px;
  width: 229px;
  float: right;
  margin-right: 50px;
}
.button:hover {
  background-color: #07a49a;
}
.close {
  border-radius: 50px;
  border: none;
  font-size: 20px;
  line-height: 20px;
  cursor: pointer;
}
textarea {
  width: 1204px;
  height: 446px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #c9d7fc;
  border-radius: 10px;
  font-size: 20px;
  resize: none;
  caret-color: #c9d7fc;
}
.submitBtn {
  background-color: #04B8AD;
  border-radius: 25px;
  color: #f8f8f8;
  text-transform: capitalize;
  font-weight:bold;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 0px;
  height: 60px;
  width: 200px;
  box-shadow: 0px 0px;
  border-radius: 50px;
}
.submitBtn:hover {
  background-color: #07A49A;
}
</style>
