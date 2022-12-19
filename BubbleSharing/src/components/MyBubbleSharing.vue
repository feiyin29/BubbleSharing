<template>
  <body>
    <v-container fluid class="pa-0 tw-bg-[#f8f8f8]" v-if="design[0].themeTemplate == 0">
      <v-row no-gutters>
        <v-col cols="12">
          <!-- body content -->
          <v-row no-gutters>
            <v-col></v-col>
            <v-col cols="8">
              <!-- make screen by myself -->
              <!-- if chooseTheme = 0 -->
              <v-row no-gutters
                v-if="design[0].themeTemplate == 0"
                class="
                  tw-h-screen
                  tw-pt-[32px]
                "
              >
                <v-col></v-col>
                <v-col cols="10"
                  class="
                    tw-bg-[#f8f8f8]
                    tw-rounded-[40px]
                    tw-relative
                    
                  "
                >
                  <!-- share btn -->
                  <v-row no-gutters
                    class="
                      shareBtnDropdown
                      tw-pt-[40px]
                      tw-pr-[36px]
                      tw-w-full
                      d-flex
                      justify-end
                    "
                  >
                    <button
                      @click="myShareBtnFunction()"
                      class="
                        shareBtn
                        tw-flex 
                        tw-justify-end
                        tw-rounded-full
                        tw-h-[40px]
                        tw-w-[40px]
                        
                      "
                    >
                      <img 
                        src="../assets/greyShare.png" 
                        height="24" 
                      />
                    </button>
                    <div id="myShareBtnDropdown" 
                      class="shareBtnDropdown-content
                      "
                    >
                      <v-row no-gutters 
                        class="
                          d-flex align-center
                        "
                      >
                        <v-col cols="1"
                          class="
                            pa-0
                            tw-my-[14px]
                            tw-ml-[14px]
                          "
                        >
                          <img src="../assets/logoBlue.png" width="26.5" />
                        </v-col>
                        <v-col
                          class="
                            heading3-16
                            pa-0
                            tw-my-[14px]
                            tw-ml-[6px]
                          "
                        >
                          <input type="textUserLink" v-model="account[0].userLink" id="myInput" disabled>
                        </v-col>
                        <v-col cols="2"
                          class="
                            tooltip
                            pa-0
                            tw-my-[14px]
                            tw-mr-[14px]
                            d-flex justify-end
                            hover:tw-underline
                            hover:tw-underline-offset-8
                            tw-text-[#616161]
                            tw-font-medium
                            tw-text-[24px]
                          "
                        >
                        <button @click="myFunction()" @mouseout="outFunc()">
                          <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
                            Copy
                        </button>
                        </v-col>
                      </v-row>
                        
                    </div>
                  </v-row>
                  <!-- feifeifei -->
                  <!-- profile image -->
                  <v-row no-gutters>
                    <v-col cols="12">
                      <v-row no-gutters class="ml-10  d-flex justify-center">
                        <v-col cols="2" 
                            class="
                                innerShadow 
                                bg-white 
                                tw-rounded-[200px]
                                mr-10 
                                d-flex 
                                justify-center 
                                align-center"
                                style="height: 133px"
                                >
                            <v-img 
                                v-if="design[0].profileImage != null" 
                                :src="design[0].profileImage" 
                                width="123" 
                                height="123" 
                                cover
                                class="tw-rounded-[200px]"
                            ></v-img>
                            <v-icon 
                                v-else 
                                size="60" 
                                color="#e4e4e4" 
                                class="ma-13"
                            >
                              mdi-account
                            </v-icon>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <!-- username -->
                  <v-row no-gutters
                    class="
                      d-flex justify-center align-center
                      tw-text-[#9229AE]
                      tw-font-bold
                      tw-text-2xl
                      tw-pt-[19px]
                    "
                  >
                    @{{account[0].username}} 
                  </v-row>
                  <!-- bio -->
                  <v-row no-gutters
                    class="
                      d-flex justify-center align-center
                      tw-text-[#616161]
                      tw-font-medium
                      tw-text-[16px]
                      tw-pt-[6px]
                      tw-pb-[24px]
                    "
                  >
                    {{design[0].bio}}
                  </v-row>

                  <!-- title box -->
                  <v-row no-gutters
                    v-for="(item, index) in Link" :key="item"
                    class="
                      tw-pt-[16px]
                      tw-px-[40px]
                    "
                  >
                    <a
                      v-if="item.title == null"
                      href="Link[index].url"
                      class="textBody1-16
                        tw-bg-[#9229AE]
                        tw-text-[#ffffff]
                        tw-rounded-full
                        tw-w-full
                        d-flex justify-center align-center
                        tw-px-4
                        tw-py-3
                        tw-drop-shadow-md
                      "
                    >
                      Title
                    </a>
                    <a
                      v-else
                      @click="openLink(Link[index].url,index)"
                      class="textBody1-16
                        tw-bg-[#9229AE]
                        tw-text-[#ffffff]
                        tw-rounded-full
                        tw-w-full
                        d-flex justify-center align-center
                        tw-px-4
                        tw-py-3
                        tw-drop-shadow-md
                      "
                    >
                      {{Link[index].title}}
                    </a>
                  </v-row>
                  <!-- end of title box -->

                  <!-- buble sharing & line home buttom iPhone -->
                  <v-row no-gutters
                    class="
                      tw-absolute tw-inset-x-0 tw-bottom-0
                      d-flex justify-center align-center
                      tw-font-bold
                      tw-text-[#9229AE]
                      tw-text-[24px]
                    "
                  >
                    <button
                      @click="this.$router.push('/page')" 
                      class="tw-pb-4">
                      bubble sharing
                    </button>
                  </v-row>

                  
                </v-col>
                <v-col></v-col>

              </v-row>
              <!-- end of account[0].themeTemplate = 0 -->
            </v-col>
            <v-col></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="pa-0 tw-bg-[#f8f8f8]" v-if="design[0].themeTemplate == 1">
      <v-row no-gutters>
        <v-col cols="12">
          <!-- body content -->
          <v-row no-gutters>
            <v-col></v-col>
            <v-col cols="8">
              <!-- make screen by myself -->
              <!-- if chooseTheme = 1 -->
              <v-row no-gutters
                v-if="design[0].themeTemplate == 1"
                class="
                  tw-h-screen
                  tw-pt-[32px]
                "
              >
                <v-col></v-col>
                <v-col cols="10"
                  class="
                    tw-bg-[#f8f8f8]
                    tw-rounded-[40px]
                    tw-relative
                    
                  "
                >
                  <!-- share btn -->
                  <v-row no-gutters
                    class="
                      shareBtnDropdown
                      tw-pt-[40px]
                      tw-pr-[36px]
                      tw-w-full
                      d-flex
                      justify-end
                    "
                  >
                    <button
                      @click="myShareBtnFunction()"
                      class="
                        shareBtn
                        tw-flex 
                        tw-justify-end
                        tw-rounded-full
                        tw-h-[40px]
                        tw-w-[40px]
                        
                      "
                    >
                      <img 
                        src="../assets/greyShare.png" 
                        height="24" 
                      />
                    </button>
                    <div id="myShareBtnDropdown" 
                      class="shareBtnDropdown-content
                      "
                    >
                      <v-row no-gutters 
                        class="
                          d-flex align-center
                        "
                      >
                        <v-col cols="1"
                          class="
                            pa-0
                            tw-my-[14px]
                            tw-ml-[14px]
                          "
                        >
                          <img src="../assets/logoBlue.png" width="26.5" />
                        </v-col>
                        <v-col
                          class="
                            heading3-16
                            pa-0
                            tw-my-[14px]
                            tw-ml-[6px]
                          "
                        >
                          <input type="textUserLink" v-model="account[0].userLink" id="myInput" disabled>
                        </v-col>
                        <v-col cols="2"
                          class="
                            tooltip
                            pa-0
                            tw-my-[14px]
                            tw-mr-[14px]
                            d-flex justify-end
                            hover:tw-underline
                            hover:tw-underline-offset-8
                            tw-text-[#616161]
                            tw-font-medium
                            tw-text-[24px]
                          "
                        >
                        <button @click="myFunction()" @mouseout="outFunc()">
                          <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
                            Copy
                        </button>
                        </v-col>
                      </v-row>
                        
                    </div>
                  </v-row>
                  
                  <!-- profile image -->
                  <v-row no-gutters>
                    <v-col cols="12">
                      <v-row no-gutters class="ml-10  d-flex justify-center">
                        <v-col cols="2" 
                            class="
                                innerShadow 
                                bg-white 
                                tw-rounded-[200px]
                                mr-10 
                                d-flex 
                                justify-center 
                                align-center"
                                style="height: 133px"
                                >
                            <v-img 
                                v-if="design[0].profileImage != null" 
                                :src="design[0].profileImage" 
                                width="123" 
                                height="123" 
                                cover
                                class="tw-rounded-[200px]"
                            ></v-img>
                            <v-icon 
                                v-else 
                                size="60" 
                                color="#e4e4e4" 
                                class="ma-13"
                            >
                              mdi-account
                            </v-icon>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <!-- username -->
                  <v-row no-gutters
                    class="
                      d-flex justify-center align-center
                      tw-text-[#B75555]
                      tw-font-bold
                      tw-text-2xl
                      tw-pt-[19px]
                    "
                  >
                    @{{account[0].username}} 
                  </v-row>
                  <!-- bio -->
                  <v-row no-gutters
                    class="
                      d-flex justify-center align-center
                      tw-text-[#616161]
                      tw-font-medium
                      tw-text-[16px]
                      tw-pt-[6px]
                      tw-pb-[24px]
                    "
                  >
                    {{design[0].bio}}
                  </v-row>

                  <!-- title box -->
                  <v-row no-gutters
                    v-for="(item, index) in Link" :key="item"
                    class="
                      tw-pt-[16px]
                      tw-px-[40px]
                    "
                  >
                    <a
                      v-if="item.title == null"
                      href="Link[index].url"
                      class="textBody1-16
                        tw-bg-[#B75555]
                        tw-text-[#ffffff]
                        tw-rounded-full
                        tw-w-full
                        d-flex justify-center align-center
                        tw-px-4
                        tw-py-3
                        tw-drop-shadow-md
                      "
                    >
                      Title
                    </a>
                    <a
                      v-else
                      @click="openLink(Link[index].url, index)"
                      class="textBody1-16
                        tw-bg-[#B75555]
                        tw-text-[#ffffff]
                        tw-rounded-full
                        tw-w-full
                        d-flex justify-center align-center
                        tw-px-4
                        tw-py-3
                        tw-drop-shadow-md
                      "
                    >
                      {{Link[index].title}}
                    </a>
                  </v-row>
                  <!-- end of title box -->

                  <!-- buble sharing & line home buttom iPhone -->
                  <v-row no-gutters
                    class="
                      tw-absolute tw-inset-x-0 tw-bottom-0
                      d-flex justify-center align-center
                      tw-font-bold
                      tw-text-[#B75555]
                      tw-text-[24px]
                    "
                  >
                  <button
                      @click="this.$router.push('/page')" 
                      class="tw-pb-4">
                      bubble sharing
                    </button>
                  </v-row>

                  
                </v-col>
                <v-col></v-col>

              </v-row>
              <!-- end of account[0].themeTemplate = 1 -->
            </v-col>
            <v-col></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="pa-0 tw-bg-[#f8f8f8]" v-if="design[0].themeTemplate == 2">
      <v-row no-gutters>
        <v-col cols="12">
          <!-- body content -->
          <v-row no-gutters>
            <v-col></v-col>
            <v-col cols="8">
              <!-- make screen by myself -->
              <!-- if chooseTheme = 2 -->
              <v-row no-gutters
                v-if="design[0].themeTemplate == 2"
                class="
                  tw-h-screen
                  tw-pt-[32px]
                "
              >
                <v-col></v-col>
                <v-col cols="10"
                  class="
                    tw-bg-[#f8f8f8]
                    tw-rounded-[40px]
                    tw-relative
                    
                  "
                >
                  <!-- share btn -->
                  <v-row no-gutters
                    class="
                      shareBtnDropdown
                      tw-pt-[40px]
                      tw-pr-[36px]
                      tw-w-full
                      d-flex
                      justify-end
                    "
                  >
                    <button
                      @click="myShareBtnFunction()"
                      class="
                        shareBtn
                        tw-flex 
                        tw-justify-end
                        tw-rounded-full
                        tw-h-[40px]
                        tw-w-[40px]
                        
                      "
                    >
                      <img 
                        src="../assets/greyShare.png" 
                        height="24" 
                      />
                    </button>
                    <div id="myShareBtnDropdown" 
                      class="shareBtnDropdown-content
                      "
                    >
                      <v-row no-gutters 
                        class="
                          d-flex align-center
                        "
                      >
                        <v-col cols="1"
                          class="
                            pa-0
                            tw-my-[14px]
                            tw-ml-[14px]
                          "
                        >
                          <img src="../assets/logoBlue.png" width="26.5" />
                        </v-col>
                        <v-col
                          class="
                            heading3-16
                            pa-0
                            tw-my-[14px]
                            tw-ml-[6px]
                          "
                        >
                          <input type="textUserLink" v-model="account[0].userLink" id="myInput" disabled>
                        </v-col>
                        <v-col cols="2"
                          class="
                            tooltip
                            pa-0
                            tw-my-[14px]
                            tw-mr-[14px]
                            d-flex justify-end
                            hover:tw-underline
                            hover:tw-underline-offset-8
                            tw-text-[#616161]
                            tw-font-medium
                            tw-text-[24px]
                          "
                        >
                        <button @click="myFunction()" @mouseout="outFunc()">
                          <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
                            Copy
                        </button>
                        </v-col>
                      </v-row>
                        
                    </div>
                  </v-row>
                  
                  <!-- profile image -->
                  <v-row no-gutters>
                    <v-col cols="12">
                      <v-row no-gutters class="ml-10  d-flex justify-center">
                        <v-col cols="2" 
                            class="
                                innerShadow 
                                bg-white 
                                tw-rounded-[200px]
                                mr-10 
                                d-flex 
                                justify-center 
                                align-center"
                                style="height: 133px"
                                >
                            <v-img 
                                v-if="design[0].profileImage != null" 
                                :src="design[0].profileImage" 
                                width="123" 
                                height="123" 
                                cover
                                class="tw-rounded-[200px]"
                            ></v-img>
                            <v-icon 
                                v-else 
                                size="60" 
                                color="#e4e4e4" 
                                class="ma-13"
                            >
                              mdi-account
                            </v-icon>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <!-- username -->
                  <v-row no-gutters
                    class="
                      d-flex justify-center align-center
                      tw-text-[#FFB650]
                      tw-font-bold
                      tw-text-2xl
                      tw-pt-[19px]
                    "
                  >
                    @{{account[0].username}} 
                  </v-row>
                  <!-- design[0].bio -->
                  <v-row no-gutters
                    class="
                      d-flex justify-center align-center
                      tw-text-[#616161]
                      tw-font-medium
                      tw-text-[16px]
                      tw-pt-[6px]
                      tw-pb-[24px]
                    "
                  >
                    {{design[0].bio}}
                  </v-row>

                  <!-- title box -->
                  <v-row no-gutters
                    v-for="(item, index) in Link" :key="item"
                    class="
                      tw-pt-[16px]
                      tw-px-[40px]
                    "
                  >
                    <a
                      v-if="item.title == null"
                      href="Link[index].url"
                      class="textBody1-16
                        tw-bg-[#FFB650]
                        tw-text-[#ffffff]
                        tw-rounded-full
                        tw-w-full
                        d-flex justify-center align-center
                        tw-px-4
                        tw-py-3
                        tw-drop-shadow-md
                      "
                    >
                      Title
                    </a>
                    <a
                      v-else
                      @click="openLink(Link[index].url, index)"
                      class="textBody1-16
                        tw-bg-[#FFB650]
                        tw-text-[#ffffff]
                        tw-rounded-full
                        tw-w-full
                        d-flex justify-center align-center
                        tw-px-4
                        tw-py-3
                        tw-drop-shadow-md
                      "
                    >
                      {{Link[index].title}}
                    </a>
                  </v-row>
                  <!-- end of title box -->

                  <!-- buble sharing & line home buttom iPhone -->
                  <v-row no-gutters
                    class="
                      tw-absolute tw-inset-x-0 tw-bottom-0
                      d-flex justify-center align-center
                      tw-font-bold
                      tw-text-[#FFB650]
                      tw-text-[24px]
                    "
                  >
                  <button
                      @click="this.$router.push('/page')" 
                      class="tw-pb-4">
                      bubble sharing
                    </button>
                  </v-row>

                  
                </v-col>
                <v-col></v-col>

              </v-row>
              <!-- end of design[0].themeTemplate = 2 -->
            </v-col>
            <v-col></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="pa-0 tw-bg-[#E8EEFF]" v-if="design[0].themeTemplate == 3">
      <v-row no-gutters>
        <v-col cols="12">
          <!-- body content -->
          <v-row no-gutters>
            <v-col></v-col>
            <v-col cols="8">
              <!-- make screen by myself -->
              <!-- if chooseTheme = 3 -->
              <v-row no-gutters
                v-if="design[0].themeTemplate == 3"
                class="
                  tw-h-screen
                  tw-pt-[32px]
                "
              >
                <v-col></v-col>
                <v-col cols="10"
                  class="
                    tw-bg-[#E8EEFF]
                    tw-rounded-[40px]
                    tw-relative
                    
                  "
                >
                  <!-- share btn -->
                  <v-row no-gutters
                    class="
                      shareBtnDropdown
                      tw-pt-[40px]
                      tw-pr-[36px]
                      tw-w-full
                      d-flex
                      justify-end
                    "
                  >
                    <button
                      @click="myShareBtnFunction()"
                      class="
                        shareBtn
                        tw-flex 
                        tw-justify-end
                        tw-rounded-full
                        tw-h-[40px]
                        tw-w-[40px]
                        
                      "
                    >
                      <img 
                        src="../assets/greyShare.png" 
                        height="24" 
                      />
                    </button>
                    <div id="myShareBtnDropdown" 
                      class="shareBtnDropdown-content
                      "
                    >
                      <v-row no-gutters 
                        class="
                          d-flex align-center
                        "
                      >
                        <v-col cols="1"
                          class="
                            pa-0
                            tw-my-[14px]
                            tw-ml-[14px]
                          "
                        >
                          <img src="../assets/logoBlue.png" width="26.5" />
                        </v-col>
                        <v-col
                          class="
                            heading3-16
                            pa-0
                            tw-my-[14px]
                            tw-ml-[6px]
                          "
                        >
                          <input type="textUserLink" v-model="account[0].userLink" id="myInput" disabled>
                        </v-col>
                        <v-col cols="2"
                          class="
                            tooltip
                            pa-0
                            tw-my-[14px]
                            tw-mr-[14px]
                            d-flex justify-end
                            hover:tw-underline
                            hover:tw-underline-offset-8
                            tw-text-[#616161]
                            tw-font-medium
                            tw-text-[24px]
                          "
                        >
                        <button @click="myFunction()" @mouseout="outFunc()">
                          <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
                            Copy
                        </button>
                        </v-col>
                      </v-row>
                        
                    </div>
                  </v-row>
                  
                  <!-- profile image -->
                  <v-row no-gutters>
                    <v-col cols="12">
                      <v-row no-gutters class="ml-10  d-flex justify-center">
                        <v-col cols="2" 
                            class="
                                innerShadow 
                                bg-white 
                                tw-rounded-[200px]
                                mr-10 
                                d-flex 
                                justify-center 
                                align-center"
                                style="height: 133px"
                                >
                            <v-img 
                                v-if="design[0].profileImage != null" 
                                :src="design[0].profileImage" 
                                width="123" 
                                height="123" 
                                cover
                                class="tw-rounded-[200px]"
                            ></v-img>
                            <v-icon 
                                v-else 
                                size="60" 
                                color="#e4e4e4" 
                                class="ma-13"
                            >
                              mdi-account
                            </v-icon>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <!-- username -->
                  <v-row no-gutters
                    class="
                      d-flex justify-center align-center
                      tw-text-[#6087D4]
                      tw-font-bold
                      tw-text-2xl
                      tw-pt-[19px]
                    "
                  >
                    @{{account[0].username}} 
                  </v-row>
                  <!-- bio -->
                  <v-row no-gutters
                    class="
                      d-flex justify-center align-center
                      tw-text-[#616161]
                      tw-font-medium
                      tw-text-[16px]
                      tw-pt-[6px]
                      tw-pb-[24px]
                    "
                  >
                    {{design[0].bio}}
                  </v-row>

                  <!-- title box -->
                  <v-row no-gutters
                    v-for="(item, index) in Link" :key="item"
                    class="
                      tw-pt-[16px]
                      tw-px-[40px]
                    "
                  >
                    <a
                      v-if="item.title == null"
                      href="Link[index].url"
                      class="textBody1-16
                        tw-bg-[#ffffff]
                        tw-text-[#6087D4]
                        tw-rounded-full
                        tw-w-full
                        d-flex justify-center align-center
                        tw-px-4
                        tw-py-3
                        tw-drop-shadow-md
                      "
                    >
                      Title
                    </a>
                    <a
                      v-else
                      @click="openLink(Link[index].url, index)"
                      class="textBody1-16
                        tw-bg-[#ffffff]
                        tw-text-[#6087D4]
                        tw-rounded-full
                        tw-w-full
                        d-flex justify-center align-center
                        tw-px-4
                        tw-py-3
                        tw-drop-shadow-md
                      "
                    >
                      {{Link[index].title}}
                    </a>
                  </v-row>
                  <!-- end of title box -->

                  <!-- buble sharing & line home buttom iPhone -->
                  <v-row no-gutters
                    class="
                      tw-absolute tw-inset-x-0 tw-bottom-0
                      d-flex justify-center align-center
                      tw-font-bold
                      tw-text-[#6087D4]
                      tw-text-[24px]
                    "
                  >
                  <button
                      @click="this.$router.push('/page')" 
                      class="tw-pb-4">
                      bubble sharing
                    </button>
                  </v-row>

                  
                </v-col>
                <v-col></v-col>

              </v-row>
              <!-- end of design[0].themeTemplate = 2 -->
            </v-col>
            <v-col></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="pa-0 tw-bg-[#E0FAEE]" v-if="design[0].themeTemplate == 4">
      <v-row no-gutters>
        <v-col cols="12">
          <!-- body content -->
          <v-row no-gutters>
            <v-col></v-col>
            <v-col cols="8">
              <!-- make screen by myself -->
              <!-- if chooseTheme = 4 -->
              <v-row no-gutters
                v-if="design[0].themeTemplate == 4"
                class="
                  tw-h-screen
                  tw-pt-[32px]
                "
              >
                <v-col></v-col>
                <v-col cols="10"
                  class="
                    tw-bg-[#E0FAEE]
                    tw-rounded-[40px]
                    tw-relative
                    
                  "
                >
                  <!-- share btn -->
                  <v-row no-gutters
                    class="
                      shareBtnDropdown
                      tw-pt-[40px]
                      tw-pr-[36px]
                      tw-w-full
                      d-flex
                      justify-end
                    "
                  >
                    <button
                      @click="myShareBtnFunction()"
                      class="
                        shareBtn
                        tw-flex 
                        tw-justify-end
                        tw-rounded-full
                        tw-h-[40px]
                        tw-w-[40px]
                        
                      "
                    >
                      <img 
                        src="../assets/greyShare.png" 
                        height="24" 
                      />
                    </button>
                    <div id="myShareBtnDropdown" 
                      class="shareBtnDropdown-content
                      "
                    >
                      <v-row no-gutters 
                        class="
                          d-flex align-center
                        "
                      >
                        <v-col cols="1"
                          class="
                            pa-0
                            tw-my-[14px]
                            tw-ml-[14px]
                          "
                        >
                          <img src="../assets/logoBlue.png" width="26.5" />
                        </v-col>
                        <v-col
                          class="
                            heading3-16
                            pa-0
                            tw-my-[14px]
                            tw-ml-[6px]
                          "
                        >
                          <input type="textUserLink" v-model="account[0].userLink" id="myInput" disabled>
                        </v-col>
                        <v-col cols="2"
                          class="
                            tooltip
                            pa-0
                            tw-my-[14px]
                            tw-mr-[14px]
                            d-flex justify-end
                            hover:tw-underline
                            hover:tw-underline-offset-8
                            tw-text-[#616161]
                            tw-font-medium
                            tw-text-[24px]
                          "
                        >
                        <button @click="myFunction()" @mouseout="outFunc()">
                          <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
                            Copy
                        </button>
                        </v-col>
                      </v-row>
                        
                    </div>
                  </v-row>
                  
                  <!-- profile image -->
                  <v-row no-gutters>
                    <v-col cols="12">
                      <v-row no-gutters class="ml-10  d-flex justify-center">
                        <v-col cols="2" 
                            class="
                                innerShadow 
                                bg-white 
                                tw-rounded-[200px]
                                mr-10 
                                d-flex 
                                justify-center 
                                align-center"
                                style="height: 133px"
                                >
                            <v-img 
                                v-if="design[0].profileImage != null" 
                                :src="design[0].profileImage" 
                                width="123" 
                                height="123" 
                                cover
                                class="tw-rounded-[200px]"
                            ></v-img>
                            <v-icon 
                                v-else 
                                size="60" 
                                color="#e4e4e4" 
                                class="ma-13"
                            >
                              mdi-account
                            </v-icon>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <!-- username -->
                  <v-row no-gutters
                    class="
                      d-flex justify-center align-center
                      tw-text-[#04B8AD]
                      tw-font-bold
                      tw-text-2xl
                      tw-pt-[19px]
                    "
                  >
                    @{{account[0].username}} 
                  </v-row>
                  <!-- bio -->
                  <v-row no-gutters
                    class="
                      d-flex justify-center align-center
                      tw-text-[#616161]
                      tw-font-medium
                      tw-text-[16px]
                      tw-pt-[6px]
                      tw-pb-[24px]
                    "
                  >
                    {{design[0].bio}}
                  </v-row>

                  <!-- title box -->
                  <v-row no-gutters
                    v-for="(item, index) in Link" :key="item"
                    class="
                      tw-pt-[16px]
                      tw-px-[40px]
                    "
                  >
                    <a
                      v-if="item.title == null"
                      href="Link[index].url"
                      class="textBody1-16
                        tw-bg-[#ffffff]
                        tw-text-[#04B8AD]
                        tw-rounded-full
                        tw-w-full
                        d-flex justify-center align-center
                        tw-px-4
                        tw-py-3
                        tw-drop-shadow-md
                      "
                    >
                      Title
                    </a>
                    <a
                      v-else
                      @click="openLink(Link[index].url, index)"
                      class="textBody1-16
                        tw-bg-[#ffffff]
                        tw-text-[#04B8AD]
                        tw-rounded-full
                        tw-w-full
                        d-flex justify-center align-center
                        tw-px-4
                        tw-py-3
                        tw-drop-shadow-md
                      "
                    >
                      {{Link[index].title}}
                    </a>
                  </v-row>
                  <!-- end of title box -->

                  <!-- buble sharing & line home buttom iPhone -->
                  <v-row no-gutters
                    class="
                      tw-absolute tw-inset-x-0 tw-bottom-0
                      d-flex justify-center align-center
                      tw-font-bold
                      tw-text-[#04B8AD]
                      tw-text-[24px]
                    "
                  >
                  <button
                      @click="this.$router.push('/page')" 
                      class="tw-pb-4">
                      bubble sharing
                    </button>
                  </v-row>

                  
                </v-col>
                <v-col></v-col>

              </v-row>
              <!-- end of design[0].themeTemplate = 4 -->
            </v-col>
            <v-col></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="pa-0 tw-bg-[#FFF5F7]" v-if="design[0].themeTemplate == 5">
      <v-row no-gutters>
        <v-col cols="12">
          <!-- body content -->
          <v-row no-gutters>
            <v-col></v-col>
            <v-col cols="8">
              <!-- make screen by myself -->
              <!-- if chooseTheme = 5 -->
              <v-row no-gutters
                v-if="design[0].themeTemplate == 5"
                class="
                  tw-h-screen
                  tw-pt-[32px]
                "
              >
                <v-col></v-col>
                <v-col cols="10"
                  class="
                    tw-bg-[#FFF5F7]
                    tw-rounded-[40px]
                    tw-relative
                    
                  "
                >
                  <!-- share btn -->
                  <v-row no-gutters
                    class="
                      shareBtnDropdown
                      tw-pt-[40px]
                      tw-pr-[36px]
                      tw-w-full
                      d-flex
                      justify-end
                    "
                  >
                    <button
                      @click="myShareBtnFunction()"
                      class="
                        shareBtn
                        tw-flex 
                        tw-justify-end
                        tw-rounded-full
                        tw-h-[40px]
                        tw-w-[40px]
                        
                      "
                    >
                      <img 
                        src="../assets/greyShare.png" 
                        height="24" 
                      />
                    </button>
                    <div id="myShareBtnDropdown" 
                      class="shareBtnDropdown-content
                      "
                    >
                      <v-row no-gutters 
                        class="
                          d-flex align-center
                        "
                      >
                        <v-col cols="1"
                          class="
                            pa-0
                            tw-my-[14px]
                            tw-ml-[14px]
                          "
                        >
                          <img src="../assets/logoBlue.png" width="26.5" />
                        </v-col>
                        <v-col
                          class="
                            heading3-16
                            pa-0
                            tw-my-[14px]
                            tw-ml-[6px]
                          "
                        >
                          <input type="textUserLink" v-model="account[0].userLink" id="myInput" disabled>
                        </v-col>
                        <v-col cols="2"
                          class="
                            tooltip
                            pa-0
                            tw-my-[14px]
                            tw-mr-[14px]
                            d-flex justify-end
                            hover:tw-underline
                            hover:tw-underline-offset-8
                            tw-text-[#616161]
                            tw-font-medium
                            tw-text-[24px]
                          "
                        >
                        <button @click="myFunction()" @mouseout="outFunc()">
                          <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
                            Copy
                        </button>
                        </v-col>
                      </v-row>
                        
                    </div>
                  </v-row>
                  
                  <!-- profile image -->
                  <v-row no-gutters>
                    <v-col cols="12">
                      <v-row no-gutters class="ml-10  d-flex justify-center">
                        <v-col cols="2" 
                            class="
                                innerShadow 
                                bg-white 
                                tw-rounded-[200px]
                                mr-10 
                                d-flex 
                                justify-center 
                                align-center"
                                style="height: 133px"
                                >
                            <v-img 
                                v-if="design[0].profileImage != null" 
                                :src="design[0].profileImage" 
                                width="123" 
                                height="123" 
                                cover
                                class="tw-rounded-[200px]"
                            ></v-img>
                            <v-icon 
                                v-else 
                                size="60" 
                                color="#e4e4e4" 
                                class="ma-13"
                            >
                              mdi-account
                            </v-icon>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <!-- username -->
                  <v-row no-gutters
                    class="
                      d-flex justify-center align-center
                      tw-text-[#FF7A94]
                      tw-font-bold
                      tw-text-2xl
                      tw-pt-[19px]
                    "
                  >
                    @{{account[0].username}} 
                  </v-row>
                  <!-- bio -->
                  <v-row no-gutters
                    class="
                      d-flex justify-center align-center
                      tw-text-[#616161]
                      tw-font-medium
                      tw-text-[16px]
                      tw-pt-[6px]
                      tw-pb-[24px]
                    "
                  >
                    {{design[0].bio}}
                  </v-row>

                  <!-- title box -->
                  <v-row no-gutters
                    v-for="(item, index) in Link" :key="item"
                    class="
                      tw-pt-[16px]
                      tw-px-[40px]
                    "
                  >
                    <a
                      v-if="item.title == null"
                      href="Link[index].url"
                      class="textBody1-16
                        tw-bg-[#FF7A94]
                        tw-text-[#ffffff]
                        tw-rounded-full
                        tw-w-full
                        d-flex justify-center align-center
                        tw-px-4
                        tw-py-3
                        tw-drop-shadow-md
                      "
                    >
                      Title
                    </a>
                    <a
                      v-else
                      @click="openLink(Link[index].url, index)"
                      class="textBody1-16
                        tw-bg-[#FF7A94]
                        tw-text-[#ffffff]
                        tw-rounded-full
                        tw-w-full
                        d-flex justify-center align-center
                        tw-px-4
                        tw-py-3
                        tw-drop-shadow-md
                      "
                    >
                      {{Link[index].title}}
                    </a>
                  </v-row>
                  <!-- end of title box -->

                  <!-- buble sharing & line home buttom iPhone -->
                  <v-row no-gutters
                    class="
                      tw-absolute tw-inset-x-0 tw-bottom-0
                      d-flex justify-center align-center
                      tw-font-bold
                      tw-text-[#FF7A94]
                      tw-text-[24px]
                    "
                  >
                  <button
                      @click="this.$router.push('/page')" 
                      class="tw-pb-4">
                      bubble sharing
                    </button>
                  </v-row>

                  
                </v-col>
                <v-col></v-col>

              </v-row>
              <!-- end of design[0].themeTemplate = 5 -->
            </v-col>
            <v-col></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </body>
</template>
  
<script setup>
import { ref } from "vue";
import { useProductStore } from "@/stores/products";


const  { store, account, theme, setTheme, updateProfile, Link, design,updateClick } = useProductStore();

console.log("testtttttt",design[0].profileImage)

const username = ref("")
const bio = ref("");
const file = design.profileImage;
console.log("bubble",design);
const profileImage = ref("");
let chooseTheme = ref(0);
// const useTheme = ref('')

let bgColor = ref('');
let ssBar = ref('');
let share = ref('');
let profileImg = ref('');
let usernameColor = ref('');
let bioColor = ref('');
let btnColor = ref('');
let textBtnColor = ref('');
let logo = ref('');
let bar = ref('');


console.log(chooseTheme)
const sentTheme = () => {
  console.log("click", chooseTheme)
  console.log("chooseTheme.value", chooseTheme.value)
  
  const useTheme = setTheme(chooseTheme);
  console.log(useTheme)
  console.log("bgColor", useTheme.bgColor)
  
  bgColor = useTheme.bgColor
  ssBar = useTheme.ssBar
  share = useTheme.share
  profileImg = useTheme.profileImg
  usernameColor = useTheme.usernameColor
  bioColor = useTheme.bioColor
  btnColor = useTheme.btnColor
  textBtnColor = useTheme.textBtnColor
  logo = useTheme.logo
  bar = useTheme.bar
}

function editProfile(){
  console.log("chooseTheme", chooseTheme.value)
      const editAccount = {  
        username: account[0].username,
        bio: bio.value,
        profileImage: profileImage.value,
        themeTemplate: chooseTheme.value,
                        // username: username.value ,
                        // email: email.value,
                        // password: password.value,
                        // userLink: "bubble.sh/"+username.value,
                      }
      console.log("account data", editAccount);
      updateProfile(editAccount);
      // store.addNewAccount(account);
      // this.$router.push('/create');
    }



// console.log(store.countNumber);

let addLinkBtn = ref(false);
let addUrlBtn = ref(false);
let url = ref('');
const titleBtn = ref(false);
let title = ref('');
let titleCheck = ref(false);

const urlEditBtn = ref(false);
const urlEditCheck = ref(false);
const countNumber = ref('1')

const inputImage = () => {
  console.log(file)
}




const inputUrl = () => {
  console.log(url.value);
  console.log(url.value.length);
  if (url.value.length == 0) {
    urlEditCheck.value = false;
    console.log(urlEditCheck.value);
    console.log("false kaaa");
  }
  else {
    urlEditCheck.value = true;
    console.log(urlEditCheck.value);
    console.log("true kaaa");
  }
}
const inputTitle = () => {
  console.log(title.value);
  console.log(title.value.length);
  if (title.value.length == 0) {
    titleCheck.value = false;
    console.log(titleCheck.value);
    console.log("false kaaa");
  }
  else {
    titleCheck.value = true;
    console.log(titleCheck.value);
    console.log("true kaaa");
  }
}

// const dataUrl = ref({
//     show: false,
//     item: {
//       name: '', 
//       image: '',
//       index: null,
//     }
//   });
const addedProduct = () => {
  console.log(title)
  console.log(image)
  console.log(url)
  store.pushData({ title: title, image: image, url:url })
}

// const updateItem = async () => {
//     const item = {
//       title: editTitle, 
//       image: editImage,
//       url: editUrl,
//       index: editIndex,
//     }
//     updateByEdit(item)
//     // editDialog.value.show = false
//   }

// const callDialog = async (item, index) => {
//   editDialog.value.show = true
//   editDialog.value.item = item
//   editImage.value = editDialog.value.item.image
//   editName.value = editDialog.value.item.name
//   editPrice.value = editDialog.value.item.price
//   editEach.value = editDialog.value.item.each
//   editCategory.value = editDialog.value.item.category
//   editIndex.value = index
// }




const dataUrl = ref([]);

// const showData = () => {
//   console.log(dataUrl)
// }

const incrementNumber = () => {
  countNumber.value++;
  console.log(countNumber.value);
}

// onFileChange(e) {
//   let files = e.target.files || e.dataTransfer.files;
//   if (!files.length) {
//       return
//   }
//   this.fileName = files[0].name
//   this.createImage(files[0])
// },
// createImage(file) {
//   var image = new Image()
//   var reader = new FileReader()
//   reader.onload = (e) => {
//       this.file = e.target.result;
//       this.$emit('change', this.file)
//   }
//   reader.readAsDataURL(file)
// },
let imgSrc = ref('');
const onFile = (e) => {
      const files = e.target.files
      if (!files.length) return

      const reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => (imgSrc = reader.result)
      console.log(imgSrc)
    }
const onFileChange = (e) => {
  let files = e.target.files || e.dataTransfer.files;
  if (!files.length) {
    return
  }
    // const fileName = files[0].name
    createImage(files[0])
}

const createImage = (file) => {
  var image = new Image()
  var reader = new FileReader()
  reader.onload = (e) => {
    file = e.target.result;
    this.$emit('change', file)
  }
  reader.readAsDataURL(file)
}

let preview = null
let image = null
      // preview_list: [],
      // image_list: []


    const previewImage = (event) => {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          preview = e.target.result;
        }
        image=input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    }
    const previewMultiImage = (event) => {
      var input = event.target;
      var count = input.files.length;
      var index = 0;
      if (input.files) {
        while(count --) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.preview_list.push(e.target.result);
          }
          this.image_list.push(input.files[index]);
          reader.readAsDataURL(input.files[index]);
          index ++;
        }
      }
    }
    const reset = () => {
      this.image = null;
      this.preview = null;
      this.image_list = [];
      this.preview_list = [];
    }

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
const myShareBtnFunction = () => {
  document.getElementById("myShareBtnDropdown").classList.toggle("show");
}
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
// bubble.sh/{{account[0].username}}
// const personalUrl = account[0].username


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

// window.open(textLinkElement[0].href);

const openLink = (url,index) => {
  let click = Link[index].click+1;
  console.log("clickclick",Link[index].click);
  console.log("clickclickkkkkkkk",click);
  updateClick(click,index);
  console.log(url)
  window.open(url);
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
  /* color:#000000; */
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
  letter-spacing: 1.25px;
  /* color:#000000; */
}
.textBody1-16medium {
  font-weight: medium;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  color:#9E9E9E;
}
.heading1-32 {
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.5px;
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
.textDisplay2-48 {
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -1px;
}
.shareBtn {
  background-color: #ebebeb;
  /* box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2); */
  color:#F8F8F8;
  text-transform: capitalize;
  padding: 10px;
  margin: 0px 0px 0px 30px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.shareBtn:hover {
  background-color: #dedede;

}
.accountBtn {
  color:#ffffff;
  font-weight: medium;
  font-size: 32px;
  line-height: 20.5px;
  letter-spacing: 0px;
}
input[type=textUserLink] {
  width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 8px 0;
  outline: none;
  background-color: #f8f8f8;
  color: #9E9E9E;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
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
input[type=textProfileTitle]:focus {
  background-color: #dedede;
}
input[type=textProfileTitle] {
  width: 100%;
  height: 60px;
  padding: 20px 30px 20px 30px;
  margin: 6px 0;
  box-sizing: border-box;
  border-radius: 20px;
  transition: 0.1s;
  outline: none;
  background-color: #eaeaea;
  color: #161616;
  font-weight: medium;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0px;
}
input[type=textProfileTitle]:focus {
  border: 2px solid #FF4F7D;
  /* background-color: #dedede; */
}
textarea[type=textBio] {
  width: 100%;
  height: 186px;
  padding: 26px 30px 26px 30px;
  margin: 6px 0;
  box-sizing: border-box;
  border-radius: 20px;
  transition: 0.1s;
  outline: none;
  background-color: #eaeaea;
  /* background-color: #D9D9D9; */
  color: #161616;
  font-weight: medium;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0px;
}
textarea[type=textBio]:focus {
  border: 2px solid #FF4F7D;
  /* background-color: #dedede; */
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
  top: 110%;
  right: -28%;
  background-color: #f8f8f8;
  width: 330px;
  /* height: 75px; */
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border: 1px solid #616161;
  border-radius: 10px;
  /* display: flex;
  justify-content: center; */
}

.shareBtnDropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color:#161616;

}
.shareBtnDropdown a:hover {background-color: #ededed;}
.show {display: block;}
.removeBtn {
  outline: 1px solid #616161;
  transition-duration: 0.2s;
}
.removeBtn:hover {
  background-color: #616161;
  color: #f8f8f8;
}
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  /* width: 140px; */
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
  /* visibility: visible; */
  opacity: 1;
}
  
</style>
  