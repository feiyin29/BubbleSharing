<template>
  <v-container fluid class="pa-0">
    <v-col col="12" class="sheetStyle">
      <v-row no-gutter class="Heading1 mt-16 mx-16 tw-text-[#ffffff]">Report a violation on Beacons</v-row>
      <v-row no-gutter class="Heading3 pt-2 mx-16 mb-10 tw-text-[#ffffff]">
        Please use the following form to report a violation or inappropriate content 
        from an account that does not follow our Terms of Service or Community Standards.
      </v-row>
      <v-row no-gutter class="ctSheetStyle tw-bg-white tw-border-2 py-14 mx-16">
        <v-col cols="10" class="tw-mx-28 pr-16tw-border-4">
          <v-row no-gutter class="Heading1">Report Violation</v-row>
          <v-row no-gutter class="Body1 mt-6">
            Please note that this form is for reporting a violation and not for general support. 
            If you have a general support matter, please contact us on support@beacons.ai. 
          </v-row>
          <v-row no-gutter class="Body1 mt-6">
            We take violations seriously and review all reports. Thank you for taking the time to filling out this form. 
          </v-row>
          <v-row no-gutter class="Body1 mt-6">
            Terms of Service: <router-link to="/termsofservice"> https://bubble.sh/terms-of-service</router-link>
          </v-row>
          <v-row no-gutter class="Body1">
            Community Standards: <router-link to="/commustandards"> https://beacons.ai/i/community-standards</router-link>
          </v-row>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-row no-gutter class="Body1 mt-6">
            Link to Beacons account with the identified violation <p class="tw-text-[#E93330] pl-1">*</p>
          </v-row>
          <v-row no-gutter class="mt-6">
            <v-text-field
              v-model="link"
              :rules="[v => !!v || 'Link to Beacons account is required.']"
              required
              variant="outlined"
            ></v-text-field>
          </v-row>
          <v-row no-gutter class="Body1 mt-6">
            Please tell us about the violation and why you are reporting this. <p class="tw-text-[#E93330] pl-1">*</p>
          </v-row>
          <v-row no-gutter class="mt-6">
            <v-text-field
              v-model="text"
              :rules="[v => !!v || 'Please tell us about the violation and why you are reporting this.']"
              required
              variant="outlined"
            ></v-text-field>
          </v-row>
          <v-row no-gutter class="Body1 mt-6">
            First Name <p class="tw-text-[#E93330] pl-1">*</p>
          </v-row>
          <v-row no-gutter class="mt-6">
            <v-text-field
              v-model="Fname"
              :rules="[v => !!v || 'First name is required.']"
              required
              variant="outlined"
            ></v-text-field>
          </v-row>
          <v-row no-gutter class="Body1 mt-6">
            Last Name<p class="tw-text-[#E93330] pl-1">*</p>
          </v-row>
          <v-row no-gutter class="mt-6">
            <v-text-field
              v-model="Lname"
              :rules="[v => !!v || 'Last name is required.']"
              required
              variant="outlined"
            ></v-text-field>
          </v-row>
          <v-row no-gutter class="Body1 mt-6">
            Email<p class="tw-text-[#E93330] pl-1">*</p>
          </v-row>
          <v-row no-gutter class="mt-6">
            <v-text-field
              v-model="Email"
              :rules="[v => !!v || 'Email is required.']"
              required
              variant="outlined"
            ></v-text-field>
          </v-row>
          <!-- <v-row no-gutter class="">
            <button class="submitBtn"
              :disabled="!valid"
              @click="add()"
            >
              Submit
            </button>
          </v-row> -->
          <v-col cols="12" class="d-flex justif-start mt-n3 ml-n6">

                    <v-dialog
                        v-model="dialog"
                        width="600"
                        >
                        <template v-slot:activator="{ props }">
                            <v-btn
                                :disabled="!valid"
                                class="submitBtn"
                                @click="add()"
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
                              <div class="text-h5 px-12 pb-8 pt-4">Your reported violation was successful.</div>
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
                      <!-- </v-col>
                      <v-col></v-col> -->
                    </v-dialog>
          </v-col>
        </v-form>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { ref } from 'vue';

export default {
  setup:() => {
    const link = ref('');
    const text = ref('');
    const Fname = ref('');
    const Lname = ref('');
    const Email = ref('');
    console.log("name", Fname);

    function add(){
      const newProduct = { link: link.value,
                           text: text.value,
                           Fname: Fname.value,
                           Lname: Lname.value,
                           Email: Email.value,
                    } 
          this.$refs.form.validate();
          console.log("input data",newProduct);
    }

    return { link, text, Fname, Lname, Email, add }
  },
  data: () => ({  
    dialog: false,
    valid: true, 
  }),
  methods: {
    submit(dialog) {
      dialog = false;
      console.log("dialog",dialog);
      this.$router.push('/');
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
  padding: 32px 68px 25px;
}
.ctSheetStyle {
  margin-top: 32px;
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
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
}
.Heading3 {
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
.submitBtn {
  margin-top: 24px;
  width: 110px;
  height: 44px;
  background-color: #00C97B;
  color: #ffffff;
  border-radius: 10px;

}
.submitBtn:hover {
  background-color: #12B073;
  color: #ffffff;
}
</style>