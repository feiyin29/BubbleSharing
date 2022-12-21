<template>
  <body>
    <v-container fluid class="pa-0">
      <v-row no-gutter class="mt-0 mx-0"> 
      <v-col cols="8" class="pa-0">
        <v-row no-gutters
          class="
            leftNavbar
            tw-bg-[#C9D7FC] 
            d-flex justify-center
          "
        >
          <v-col cols="3"
            class="textLeftNavbar
              d-flex justify-center align-center
            "

          >
            <button
              class="navBtn"
              @click="this.$router.push('/page')"
            >
              My Page
            </button>
          </v-col>
          <v-col cols="3"
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
                <v-row no-gutters  class="textBody3-16 d-flex align-center"> {{account[0].username}} </v-row>
              </v-col>
            </v-row>
          </v-col>
          <!-- share btn -->
          <v-col class="
            shareBtnDropdown
            d-flex justify-center align-center
            tw-ml-[12px]
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
              <!-- <a 
                class="
                  d-flex align-center tw-cursor-pointer
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
              </a> -->
              <!-- <a 
                class="
                  d-flex align-center tw-cursor-pointer
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
              </a> -->
              <a
                class="
                  d-flex align-center
                  tw-pb-[16px]
                  tw-cursor-pointer
                "
                @click="this.$router.push('/mybubblesharing')"
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
                      <input type="textUserLink" v-model="account[0].userLink" id="myInput" disabled>
                    </v-col>
                    <v-col cols="2"
                      class="
                      tooltip
                      textBody3-24
                        pa-0
                        tw-my-[14px]
                        tw-mr-[14px]
                        d-flex justify-end
                        hover:tw-underline
                        hover:tw-underline-offset-8
                      "
                    >
                    <button @click="myFunction()" @mouseout="outFunc()">
                      <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
                      Copy
                    </button>
                    </v-col>
                  </v-row>
                </v-col>
                
              </v-row>
            </div>


          </v-col>
          <!-- account btn -->
          <v-col cols="2"
            class="
              accountBtnDropdown
              d-flex 
              justify-center 
              align-center
              tw-rounded-[200px]
              tw-mr-[40px]
              tw-ml-[12px]
            "
            style="height: 64px"
          >
            <!-- <v-btn
              @click="myAccountBtnFunction()"
              icon
              color="#1339A8"
              variant="flat"
              size="large"
              class="accountBtn"
            >
              K
            </v-btn> -->
            <button
              @click="myAccountBtnFunction()"
              class="
                innerShadow 
                tw-w-[64px]
                tw-h-[64px]
                tw-bg-[#ffffff]
                d-flex
                justify-center
                align-center
                tw-rounded-full
                tw-border
              "
            >
              <v-img 
                v-if="design[0].profileImage != null" 
                :src="design[0].profileImage" 
                width="64" 
                height="64" 
                cover
                class="accountBtn tw-rounded-[200px] tw-h-[64px] tw-w-[64px]"
              ></v-img>
              <v-icon 
                  v-else 
                  size="42" 
                  color="#e4e4e4" 
                  class="accountBtn"
              >
                mdi-account
              </v-icon>
            </button>
            
            <!-- account dropdown content -->
            <div id="myAccountBtnDropdown" 
              class="accountBtnDropdown-content
              "
            >
              <!-- row profile image, username and userLink -->
              <v-row no-gutters
                class="
                  textBody3-24
                  d-flex justify-center align-center
                  tw-font-medium
                  tw-px-[28px]
                "
              >
                <!-- profile image -->
                <v-col cols="3" 
                  class="
                    innerShadow 
                    bg-white 
                    tw-rounded-[200px]
                    mr-4
                    d-flex 
                    justify-center 
                    align-center"
                    style="height: 70px"
                >
                  <v-img 
                    v-if="design[0].profileImage != null" 
                    :src="design[0].profileImage" 
                    width="64" 
                    height="64" 
                    cover
                    class="tw-rounded-[200px] tw-h-[64px] tw-w-[64px]"
                  ></v-img>
                  <v-icon 
                      v-else 
                      size="50" 
                      color="#e4e4e4" 
                  >
                    mdi-account
                  </v-icon>
                  <!-- <v-img 
                    :src="design[0].profileImage"
                    width="64" 
                    height="64" 
                    cover
                    class="tw-rounded-[200px] tw-h-[64px] tw-w-[64px]"
                  ></v-img> -->
                </v-col>
                <v-col>
                  <v-row no-gutters 
                    class="
                      tw-font-semibold
                      tw-text-[24px]
                      tw-pl-[12px]
                    "
                  >
                    @{{ account[0].username }}
                  </v-row>
                  <v-row no-gutters
                    class="
                      tw-font-semibold
                      tw-text-[16px]
                      tw-pl-[12px]
                      tw-pt-[8px]
                      tw-text-[#616161]
                    "
                  >
                    {{ account[0].userLink }}
                  </v-row>
                </v-col>
              </v-row>
              <!-- text account -->
              <v-row no-gutters
                class="
                  tw-px-[28px]
                  tw-pt-[16px]
                  tw-pb-[4px]
                  tw-text-[16px]
                  tw-font-bold
                  tw-text-[#616161]
                  tw-tracking-wider
                "
              >
                Account
              </v-row>
              <!-- clickable dropdown -->
              <a @click="this.$router.push('/account')"
                class="
                  d-flex align-center tw-cursor-pointer
                "
              >
                <v-col cols="1"
                  class="pa-0"
                >
                  <img src="../assets/accountNavBar.png" width="20" />
                </v-col>
                <v-col
                  class="
                    pa-0
                    tw-ml-[24px]
                  "
                >
                  My account
                </v-col>
              </a>
              <a @click="this.$router.push('/feedback')"
                class="
                  d-flex align-center tw-cursor-pointer
                "
              >
                <v-col cols="1"
                  class="pa-0"
                >
                  <img src="../assets/submitNavBar.png" width="20" />
                </v-col>
                <v-col
                  class="
                    pa-0
                    tw-ml-[24px]
                  "
                >
                  Submit feedback
                </v-col>
              </a>
              <a @click="this.$router.push('/')"
                class="
                  d-flex align-center
                  tw-pb-[16px]
                  tw-cursor-pointer
                "
              >
                <v-col cols="1"
                  class="pa-0"
                >
                  <img src="../assets/logoutNavBar.png" width="20" />
                </v-col>
                <v-col
                  class="
                    pa-0
                    tw-ml-[24px]
                  "
                >
                  Log out
                </v-col>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    </v-container>
  </body>
</template>

<script setup>
import { useProductStore } from "@/stores/products";

const {store, account, design} = useProductStore();

const myShareBtnFunction = () => {
  document.getElementById("myShareBtnDropdown").classList.toggle("show");
}

console.log("navvvvvvv",account[0].userLink);
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.shareBtn')) {
    var dropdowns = document.getElementsByClassName("shareBtnDropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// account button
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
const myAccountBtnFunction = () => {
  document.getElementById("myAccountBtnDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.accountBtn')) {
    var dropdowns = document.getElementsByClassName("accountBtnDropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const myFunction = () => {
  var copyText = document.getElementById("myInput");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

const outFunc = () => {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
</script>


<style scoped>
@import url("http://fonts.googleapis.com/css?family=Roboto");
body {
  font-family: "Roboto";
}
.innerShadow{
    border: 2px solid #e4e4e4;
    box-shadow: inset 0px 0px 15px 0.5px rgba(231, 231, 231, 0.9);
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
  cursor: pointer;
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
.accountBtnDropdown {
  position: relative;
  display: inline-block;
}
.accountBtnDropdown-content {
  display: none;
  position: absolute;
  top: 120%;
  right: 20%;
  background-color: #f8f8f8;
  width: 350px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border: 1px solid black;
  border-radius: 40px;
  padding-top: 30px;
  padding-bottom: 30px;
}

.accountBtnDropdown-content a {
  color: black;
  padding: 8px 0px;
  text-decoration: none;
  display: block;
  padding-left: 28px;
  padding-right: 28px;

  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  /* color:#161616; */
  color: #404040;


}
.accountBtnDropdown a:hover {background-color: #ededed;}
.show {display: block;}
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 140px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;

  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  color:#dcdcdc;

}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
  
</style>