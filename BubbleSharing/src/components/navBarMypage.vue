<template>
  <body>
    <v-container fluid class="pa-0">
      <v-row no-gutter class="mt-0 mx-0"> 
      <v-col cols="8" class="pa-0">
        <v-row no-gutters
          class="
            leftNavbar
            tw-bg-[#C9D7FC]
          "
        >
          <v-col
            class="textLeftNavbar
              d-flex justify-center align-center
              tw-ml-48
            "

          >
            <button
              class="navBtn"
              @click="this.$router.push('/page')"
            >
              My Page
            </button>
          </v-col>
          <v-col
            class="textLeftNavbar
              d-flex justify-center align-center
            "
          >
            <button
              class="navBtn"
              @click="this.$router.push('/design')"
            >
              Design
            </button>
          </v-col>
          <v-col
            class="textLeftNavbar
              d-flex justify-center align-center
              tw-mr-48
            "
          >
            <button
              class="navBtn"
              @click="this.$router.push('/anlytics')"
            >
              Analytics
            </button>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" class="pa-0">
        <v-row no-gutters
          class="
          rightNavbar
          tw-bg-[#FFB0E2]
          d-flex justify-center align-center
          "
        >
          <v-col cols="4" class="tw-ml-10">
            <v-row no-gutters>
              <v-col class="d-flex justify-center align-center ">
                <img src="../assets/logoBlue.png" width="44.72" />
              </v-col>
              <v-col class="tw-grid tw-content-center ">
                <v-row no-gutters  class="textBody3-16 d-flex align-center">BUBBLE.SH/</v-row>
                <v-row no-gutters  class="textBody3-16 d-flex align-center">Username</v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="
            shareBtnDropdown
            d-flex justify-center align-center
            tw-ml-10
          ">
            <button
              @click="myShareBtnFunction()"
              class="shareBtn
                tw-rounded-[10px]
              "
            >
              Share
            </button>
            <div id="myShareBtnDropdown" 
              class="shareBtnDropdown-content
              "
            
            >
              <v-row no-gutters
                class="
                  textBody3-24
                  d-flex justify-center align-center
                  tw-font-medium
                "
              >
                Share your BubbleSharing
                <button class="
                  pa-0
                  tw-absolute
                  tw-right-[42px]
                ">
                  <img src="../assets/closeIcon.png" width="24" />
                </button>
              </v-row>
              <v-row no-gutters
                class="
                  textBody1-16medium
                  tw-px-[42px]
                  tw-pt-[16px]
                  tw-pb-[4px]
                "
              >
                Get more visitors by sharing your BubbleSharing everywhere.
              </v-row>
              <a href="#home"
                class="
                  d-flex align-center
                "
              >
                <v-col cols="2"
                  class="pa-0"
                >
                  <img src="../assets/socialIcon.png" width="64" />
                </v-col>
                <v-col
                  class="
                    pa-0
                    tw-ml-[24px]
                  "
                >
                  Add to your socials
                </v-col>
                <v-col cols="2"
                  class="
                    pa-0
                    d-flex justify-end
                  "
                >
                  <img src="../assets/arrowForwardIcon.png" width="24" />
                </v-col>
              </a>
              <a href="#about"
                class="
                  d-flex align-center
                "
              >
                <v-col cols="2"
                  class="pa-0"
                >
                  <img src="../assets/shareMyBubbleIcon.png" width="64" />
                </v-col>
                <v-col
                  class="
                    pa-0
                    tw-ml-[24px]
                  "
                >
                  Share my BubbleSharing to..
                </v-col>
                <v-col cols="2"
                  class="
                    pa-0
                    d-flex justify-end
                  "
                >
                  <img src="../assets/arrowForwardIcon.png" width="24" />
                </v-col>
              </a>
              <a href="#contact"
                class="
                  d-flex align-center
                  tw-pb-[16px]
                "
              >
                <v-col cols="2"
                  class="pa-0"
                >
                  <img src="../assets/worldIcon.png" width="64" />
                </v-col>
                <v-col
                  class="
                    pa-0
                    tw-ml-[24px]
                  "
                >
                  Open my BubbleSharing
                </v-col>
                <v-col cols="2"
                  class="
                    pa-0
                    d-flex justify-end
                  "
                >
                  <img src="../assets/openInIcon.png" width="24" />
                </v-col>
              </a>
              <v-row no-gutters
                class="
                  tw-px-[42px]
                  tw-mx-[42px]
                  d-flex align-center
                "
              >
                <v-col cols="12" class="
                tw-mt-[12px]
                ">
                  <v-row no-gutters 
                    class="
                      tw-border
                      tw-rounded-[10px]
                      tw-border-[#616161]
                      d-flex align-center
                    "
                  >
                    <v-col cols="2"
                      class="
                        pa-0
                        tw-my-[14px]
                        tw-ml-[14px]
                      "
                    >
                      <img src="../assets/logoBlue.png" height="48" />
                    </v-col>
                    <v-col
                      class="
                        heading3-16
                        pa-0
                        tw-my-[14px]
                      "
                    >
                      bubble.sh/username
                    </v-col>
                    <v-col cols="2"
                      class="
                      textBody3-24
                        pa-0
                        tw-my-[14px]
                        tw-mr-[14px]
                        d-flex justify-end
                        hover:tw-underline
                        hover:tw-underline-offset-8
                      "
                    >
                    <button>
                      Copy
                    </button>
                    </v-col>
                  </v-row>
                </v-col>
                
              </v-row>
            </div>


          </v-col>
          <v-col class="d-flex justify-center align-center">
            <v-btn
              icon
              color="#1339A8"
              variant="flat"
              size="large"
              class="accountBtn"
            >
              K
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    </v-container>
  </body>
</template>

<script></script>


<style scoped>
@import url("http://fonts.googleapis.com/css?family=Roboto");
body {
  font-family: "Roboto";
}
.navBtn{
  color: #181818;
  text-decoration: underline transparent;
}
.navBtn:hover {
  text-decoration: underline #181818;
  text-underline-offset: 0.35em;
}
.leftNavbar {
  height: 72px;
}
.textLeftNavbar {
  font-weight: medium;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.25px;
  color:#000000;
}
.rightNavbar {
  height: 104px;
}
.textBody3btn {
  height: 60px;
  font-weight: medium;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0px;
  color:#ffffff;
  text-transform: capitalize;
  transition-duration: 0.4s;
  cursor: pointer;
}
.textBody3btn:hover {
  background-color: #eb3666;
}
.textBody3 {
  font-weight: medium;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0px;
  color:#BDBDBD;
}
.textBody3-24 {
  font-weight: medium;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0px;
  color:#000000;
}
.textBody3-16 {
  font-weight: medium;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  color:#000000;
}
.textBody1-16 {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  color:#000000;
}
.textBody1-16medium {
  font-weight: medium;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  color:#9E9E9E;
}
.heading2-24 {
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.25px;
  color:#000000;
}
.heading3-16 {
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color:#9E9E9E;
}
.textRegular20 {
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0px;
  color:#616161;
}
.textRegular16 {
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  color:#9E9E9E;
}
.shareBtn {
  background-color: #EC5F93;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  color:#F8F8F8;
  text-transform: capitalize;
  height: 44px;
  width: 100%;
  margin: 0px 0px 0px 30px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.shareBtn:hover {
  background-color: #da4b80;
}
.accountBtn {
  color:#ffffff;
  font-weight: medium;
  font-size: 32px;
  line-height: 20.5px;
  letter-spacing: 0px;
}
input[type=text] {
  width: 100%;
  height: 52px;
  padding: 16px 18px 16px 18px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #FF4F7D;
  border-radius: 10px;
  transition: 0.1s;
  outline: none;
  background-color: #D9D9D9;
  color: #181818;
  font-weight: medium;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0px;
}
input[type=text]:focus {
  border: 2px solid #FF4F7D;
  background-color: #dedede;
}
.addBtn {
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.25px;
  color:#F8F8F8;
  height: 50px;
  margin: 0px 0px 0px 32px;
}
.addBtn:hover {
  background-color: #eb3666;
}
input[type=textTitle] {
  width: 100%;
  height: 48px;
  padding: 16px 18px 16px 18px;
  margin: 8px 0;
  box-sizing: border-box;
  border-bottom: 2px solid #FF4F7D;
  border-radius: 10px 10px 0px 0px;
  transition: 0.1s;
  outline: none;
  background-color: #f0f0f0;
  color: #181818;
  font-weight: medium;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0px;
}
input[type=textTitle]:focus {
  border-bottom: 3px solid #FF4F7D;
}
input[type=textUrl] {
  width: 100%;
  height: 48px;
  padding: 16px 18px 16px 18px;
  margin: 8px 0;
  box-sizing: border-box;
  border-bottom: 2px solid #FF4F7D;
  border-radius: 10px 10px 0px 0px;
  transition: 0.1s;
  outline: none;
  background-color: #f0f0f0;
  color: #181818;
  font-weight: medium;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0px;
}
input[type=textUrl]:focus {
  border-bottom: 3px solid #FF4F7D;
}
.titleBox {
  background-color: #f8f8f8;
  padding: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.screenContainer {
  position: relative;
}

.center {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  font-size: 18px;
}

.screenImg { 
  width: 100%;
  height: auto;
}
.shareBtnDropdown {
  position: relative;
  display: inline-block;
}

.shareBtnDropdown-content {
  display: none;
  position: absolute;
  top: 120%;
  right: -65%;
  background-color: #f8f8f8;
  width: 480px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border: 1px solid black;
  border-radius: 40px;
  padding-top: 52px;
  padding-bottom: 52px;
}

.shareBtnDropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  padding-left: 42px;
  padding-right: 42px;

  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color:#161616;

}

.shareBtnDropdown a:hover {background-color: #ededed;}

.show {display: block;}
  
</style>