<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters class="sheetPadding">
      <v-col cols="12" class="headingFont d-flex justify-center"> Submit Feedback </v-col>

      <v-col cols="12" class="mt-10 d-flex justify-center" justify="center">
        <textarea></textarea>
        <!--    <v-textarea
          class="tw-rounded-xl tw-border-[#C9D7FC tw-border-2]"
          auto-grow
          variant="outlined"
        ></v-textarea> -->
      </v-col>

      <v-col cols="12 mt-16">
        <button class="button" @click="dialog = true">Submit</button>
      </v-col>

      <v-dialog v-model="dialog" width="357">
        <v-card>
          <v-card-actions  class="pa-0">
            <v-spacer class="pa-0"></v-spacer>
            <v-btn
              rounded="pill"
              size="small"
              color="red"
              class="pa-0"
              @click="dialog = false"
              >X</v-btn
            >
          </v-card-actions>
          <v-card-text :height="109" :width="357" class="popup pa-0 mb-5">
            Send Feedbck Success!
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
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
</style>
