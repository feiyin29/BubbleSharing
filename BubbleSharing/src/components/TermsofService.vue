<template>
  <v-container fluid class="pa-0">
    <v-col col="12" class="sheetStyle">
      <v-row no-gutter class="ctSheetStyle tw-bg-white tw-border-2 py-14">
        <v-col cols="1"></v-col>
        <v-col cols="10">
        <!-- Content 18 rows -->
          <v-row no-guter class="Heading1">
            Terms of Service
          </v-row>
          <v-row no-guter class="Body1 pt-2">
            Welcome to Bubble Sharing!
          </v-row>
          <v-row no-guter class="Body1 tw-break-words pt-2">
            <v-col cols="12" class="py-0 pl-0">
              These Terms of Service ("Terms") govern your use of the website, web app, and services 
              (together or individually, "Service") offered by Bubble Sharing Inc. 
              ("Bubble Sharing", "we", "our", "us", "Company"). "You" refers to you as a user of the Service. 
            </v-col>
            <v-col cols="12" class="py-0 pl-0">
              Your privacy is important to us. Our Privacy Policy explains how we collect, safeguard, and disclose information 
              that results from your use of our Service, and also governs your use of our Service. 
              Please read it here:
              <button class="btn">Privacy Policy.</button>
            </v-col>
            <v-col cols="12" class="py-0 pl-0">
              Please read these terms carefully. 
              By using our Service, or otherwise indicating your acceptance, you represent and warrant 
              that you have read, understand, and agree to be bound by these Terms. If you do not agree, 
              please do not access or use our Service.
            </v-col>
          </v-row>
          <v-row no-guter class="Heading1 mt-8">
            Bubble Sharing Community Standards
          </v-row>
          <v-row no-guter class="Body1 tw-break-words pt-2">
            <v-col cols="12" class="pa-0">
              To continue ensuring Bubble Sharing remains a trusted platform for all users, 
              we have created these standards outlining what is and what isn't permitted on Beacons. 
              Our priority is to ensure the safety of our users and their audiences. We ask all users to review these standards thoroughly. 
              By using Bubble Sharing, all users agree to abide by these standards.
              <button class="btn">Bubble Sharing Community Standard.</button> 
            </v-col>
          </v-row>
          <v-row no-guter class="Heading1 mt-8">Account Terms</v-row>
          <v-row no-guter class="Heading2 pt-2">Account Creation</v-row>
          <v-row no-guter class="Body1 pt-2 tw-break-words">
            <v-col cols="11" class="pa-0">
              When you create an account with us, you guarantee that you are above the age of 16, 
              and that the information you provide us is accurate, complete, and current at all times. 
              Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on Service.
            </v-col>
            <v-col cols="11" class="pa-0">
              You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. 
              You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, 
              whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </v-col>
            <v-col cols="11" class="pa-0">
              You may not use as a username the name of another person or entity or that is not lawfully available for use, 
              a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. 
              You may not use as a username any name that is offensive, vulgar, or obscene.
            </v-col>
            <v-col cols="12" class="pa-0">
              We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.
            </v-col>
          </v-row>
          <v-row no-guter class="Heading1 mt-8">Third-Party Services</v-row>
          <v-row no-guter class="Heading2 pt-2">Analytics</v-row>
          <v-row no-guter class="Body1 pt-2">We may use third-party Service Providers to monitor and analyze the use of our Service.</v-row>
          <v-row no-guter class="Heading1 mt-8">Google Analytics</v-row>
          <v-row no-guter class="Body1 pt-2">
            <v-col cols="11" class="pa-0">
              Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. 
              Google uses the data collected to track and monitor the use of our Service. 
              This data is shared with other Google services. 
              Google may use the collected data to contextualize and personalize the ads of its own advertising network.
            </v-col>
            <v-col cols="12" class="pa-0">
              For more information on the privacy practices of Google, please visit the Google Privacy Terms web page: 
            </v-col>
            <v-col cols="12" class="btn pa-0">
              <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a>
            </v-col>
            <v-col cols="12" class="pa-0">
              We also encourage you to review the Google's policy for safeguarding your data: 
            </v-col>
            <v-col cols="12" class="btn pa-0">
              <a href="https://support.google.com/analytics/answer/6004245.">https://support.google.com/analytics/answer/6004245.</a>
            </v-col>
          </v-row>
          <v-row no-guter class="Heading1 mt-8">Acknowledgement</v-row>
          <v-row no-guter class="Body1 pt-2">
            By using Service or other services provided by us, 
            you acknowledge that you have read these Terms of Service and agree to be bound by them.
          </v-row>
          <v-row no-guter class="Heading1 mt-8">Contact us</v-row>
          <v-row no-guter class="Body1 pt-2">
            Please send your feedback, comments, and requests for technical support.
          </v-row>
          <v-row no-guter class="Body1 pt-2 pl-6">
            <ul class="list">
              <li>By email: <button class="btn">support@bubble.sh</button></li>
              <li>By visiting this page on our website: <button class="btn">https://bubble.sh/contact</button></li>
            </ul>
          </v-row>
      </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>

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