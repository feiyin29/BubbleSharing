<template>
  <body>
    <v-container fluid class="pa-0 tw-bg-[#f8f8f8]">
      <v-row no-gutters>
        <v-col cols="12">
          <v-row no-gutters>

            <!-- left side -->
            <v-col cols="8">
              <!-- left nav bar -->
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
                  My Page
                </v-col>
                <v-col
                  class="textLeftNavbar
                    d-flex justify-center align-center
                  "
                >
                  Design
                </v-col>
                <v-col
                  class="textLeftNavbar
                    d-flex justify-center align-center
                    tw-mr-48
                  "
                >
                  Analytics
                </v-col>
              </v-row>
              <!-- body content left side -->
              <v-row no-gutters>
                <v-col cols="12">
                  <!-- profile box -->
                  <v-row no-gutters
                    class="
                      tw-py-[48px]
                      tw-px-[110px]
                    "
                  >
                    <v-col cols="12">
                      <v-row no-gutters
                        class="
                          heading1-32
                          tw-text-[#161616]
                        "
                      >
                        Profile
                      </v-row>
                      <!-- profile detail box-->
                      <v-row no-gutters
                        class="
                          tw-py-[44px]
                        "
                      >
                        <v-col cols="12">
                          <!-- pick & remove image row -->
                          <v-row no-gutters>
                            <v-col cols="2">
                              <!-- profile image display -->
                              <div
                                class="
                                  textDisplay2-48
                                  tw-w-[123px]
                                  tw-h-[123px]
                                  tw-rounded-full
                                  d-flex
                                  justify-center
                                  align-center
                                  tw-bg-[#60696C]
                                  tw-text-[#f6f6f6]
                                "
                              >
                                K
                              </div>
                              <!-- display image -->
                              <div class="tw-border-4" v-if="preview">
                                <v-img :src="imgSrc" v-if="imgSrc" ></v-img>

                                
                                  <v-img :src="preview" class="img-fluid" ></v-img>
                                  <p class="mb-0">file name: {{ image.name }}</p>
                                  <p class="mb-0">size: {{ image.size/1024 }}KB</p>
                                
                                <!-- <template v-if="preview">
                                  <img :src="preview" class="img-fluid" />
                                  <p class="mb-0">file name: {{ image.name }}</p>
                                  <p class="mb-0">size: {{ image.size/1024 }}KB</p>
                                </template> -->
                              </div>
                              <!-- <img 
                                    :src="file" 
                                    width="190" 
                                    height="190" 
                                    cover
                              /> -->
                              <!-- <v-img 
                                    :src="file" 
                                    width="190" 
                                    height="190" 
                                    cover
                              ></v-img> -->
                            </v-col>
                            <v-col cols="10"
                              class="
                                tw-grid
                                tw-gap-2.5
                              "
                            >
                              <!-- pick an image btn -->
                              <!-- <input 
                                        type="file" 
                                        accept="image/*" 
                                        ref="file.value" 
                                        @change="onFile"
                                        class="form-control-file"
                              > -->
                              <!-- <input 
                                        type="file" 
                                        accept="image/*" 
                                        ref="file.value" 
                                        @change="onFileChange(file.value)"
                                        class="form-control-file"
                              > -->
                              <!-- <input type="file" @change="onFile" /> -->
                              <input type="file" accept="image/*" @change="previewImage" class="form-control-file" id="my-file">

                              <v-row no-gutters
                                class="
                                  d-flex
                                  justify-center
                                  align-center
                                  tw-pl-[32px]
                                "
                              >
                                <button
                                  class="
                                    tw-w-full
                                    tw-bg-[#FF4F7D]
                                    tw-text-[#f8f8f8]
                                    tw-font-medium
                                    tw-text-[24px]
                                    tw-p-[14px]
                                    tw-rounded-full
                                    tw-duration-200
                                    hover:tw-bg-[#E0396A]
                                  "
                                >
                                  Pick an image
                                </button>
                              </v-row>
                              <!-- remove btn -->
                              <v-row no-gutters
                                class="
                                  d-flex
                                  justify-center
                                  align-center
                                  tw-pl-[32px]
                                  tw-mt-[11px]
                                "
                              >
                                <button
                                  class="
                                    removeBtn
                                    tw-w-full
                                    tw-text-[#616161]
                                    tw-font-medium
                                    tw-text-[24px]
                                    tw-p-[14px]
                                    tw-rounded-full
                                  "
                                >
                                  Remove
                                </button>
                              </v-row>
                            </v-col>
                          </v-row>

                          <!-- profile title -->
                          <v-row no-gutters
                            class="
                              tw-pt-[42px]   
                              tw-text-[20px]   
                              tw-text-[#616161]  
                              tw-pl-[12px]                   
                            "
                          >
                            Profile Title
                          </v-row>
                          <v-row no-gutters>
                            <form
                              class="
                                tw-w-full
                              "
                            >
                              <!-- <label for="url">Enter URL</label> -->
                              <input 
                                type="textProfileTitle" 
                                id="profileTitle" 
                                name="profileTitle" 
                                placeholder="@username"
                                v-model="account[0].username"
                                v-on:keyup="inputUrl()" 
                                disabled
                              >
                            </form>
                          </v-row>
                          <!-- end of profile titile -->

                          <!-- Bio -->
                          <v-row no-gutters
                            class="
                              tw-pt-[20px]   
                              tw-text-[20px]  
                              tw-text-[#616161]    
                              tw-pl-[12px]                   
                            "
                          >
                            Bio
                          </v-row>
                          <v-row no-gutters>
                            <form
                              class="
                                tw-w-full
                              "
                            >
                              <!-- <label for="url">Enter URL</label> -->
                              <textarea 
                                type="textBio" 
                                id="bio" 
                                name="bio" 
                                placeholder="Bio"
                                v-model="bio"
                                v-on:keyup="inputUrl()" 
                              ></textarea>
                            </form>
                          </v-row>
                          <!-- end of bio -->
                        </v-col>
                      </v-row>
                      <!-- choose theme -->
                      <v-row no-gutters
                        class="
                          tw-bg-[#ffffff]
                          tw-p-[40px]
                          tw-rounded-[20px]
                          tw-mt-[40px]
                        "
                      >
                        <v-col cols="12"
                          class="
                            tw-text-[20px]
                            tw-mb-[20px]
                            tw-text-[#616161]
                          "
                        >
                          Choose Theme
                        </v-col>
                        <v-col cols="12">
                          <v-row no-gutters class="d-flex justify-center align-center">
                            <!-- first theme -->
                            <v-col class="d-flex justify-center align-center">
                              <div 
                                @click="chooseTheme = 0"
                                @click.stop="sentTheme()"
                                class=" 
                                  tw-rounded-[10px] 
                                  tw-duration-[0.2s]
                                  hover:tw-shadow-lg 
                                  hover:tw-shadow-[#F7D9FF]
                                "
                              >
                                <img src="../assets/template1New.png" width="185" />
                              </div>
                            </v-col>
                            <!-- second theme -->
                            <v-col class="d-flex justify-center align-center">
                              <div 
                                @click="chooseTheme = 1"
                                @click.stop="sentTheme()"
                                class=" 
                                  tw-rounded-[10px] 
                                  tw-duration-[0.2s]
                                  hover:tw-shadow-lg 
                                  hover:tw-shadow-[#FFDADA]
                                "
                              >
                                <img src="../assets/template2.png" width="185" />
                              </div>
                            </v-col>
                            <!-- third theme -->
                            <v-col class="d-flex justify-center align-center">
                              <div 
                                @click="chooseTheme = 2"
                                @click.stop="sentTheme()"
                                class=" 
                                  tw-rounded-[10px] 
                                  tw-duration-[0.2s]
                                  hover:tw-shadow-lg 
                                  hover:tw-shadow-[#FFECD1]
                                "
                              >
                                <img src="../assets/template3.png" width="185" />
                              </div>
                            </v-col>
                          </v-row>
                          <v-row no-gutters class="tw-pt-[40px]">
                            <!-- forth theme -->
                            <v-col class="d-flex justify-center align-center">
                              <div 
                                @click="chooseTheme = 3"
                                @click.stop="sentTheme()"
                                class=" 
                                  tw-rounded-[10px] 
                                  tw-duration-[0.2s]
                                  hover:tw-shadow-lg 
                                  hover:tw-shadow-[#C9D7FC]
                                "
                              >
                                <img src="../assets/template4.png" width="185" />
                              </div>
                            </v-col>
                            <!-- fifth theme -->
                            <v-col class="d-flex justify-center align-center">
                              <div 
                                @click="chooseTheme = 4"
                                @click.stop="sentTheme()"
                                class=" 
                                  tw-rounded-[10px] 
                                  tw-duration-[0.2s]
                                  hover:tw-shadow-lg 
                                  hover:tw-shadow-[#CAF8E3]
                                "
                              >
                                <img src="../assets/template5.png" width="185" />
                              </div>
                            </v-col>
                            <!-- sixth theme -->
                            <v-col class="d-flex justify-center align-center">
                              <div 
                                @click="chooseTheme = 5"
                                @click.stop="sentTheme()"
                                class=" 
                                  tw-rounded-[10px] 
                                  tw-duration-[0.2s]
                                  hover:tw-shadow-lg 
                                  hover:tw-shadow-[#FFD8E0]
                                "
                              >
                                <img src="../assets/template6.png" width="185" />
                              </div>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                      <!-- end of choose theme -->
                      <!-- save btn -->
                      <v-row no-gutters
                        class="
                          tw-pt-[24px]
                          d-flex
                          justify-end
                          tw-px-[32px]
                        "
                      >
                        <button
                          @click="editProfile()"
                          class="
                            tw-w-full
                            d-flex
                            align-center
                            justify-center
                            tw-p-[8px]
                            tw-bg-[#FF4F7D]
                            tw-text-[#f6f6f6]
                            tw-rounded-full
                            tw-text-[20px]
                            hover:tw-bg-[#E03965]
                          "
                        >
                          Save
                        </button>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
            <!-- end of left side -->


            <!-- right side -->
            <v-col cols="4">
                <!-- right nav bar -->
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
                <!-- end of right nav bar -->


                <!-- make screen by myself -->
                <!-- if chooseTheme = 0 -->
                <v-row no-gutters
                  v-if="chooseTheme == 0"
                  class="
                    tw-h-[50.75rem]
                    tw-pt-[32px]
                  "
                >
                  <v-col class="
                    tw-border-l
                    tw-border-[#9E9E9E]
                  "></v-col>
                  <v-col cols="10"
                    class="
                      tw-bg-[#f8f8f8]
                      tw-rounded-[40px]
                      tw-relative
                      tw-border-2
                      tw-border-[#616161]
                     
                    "
                  >
                    <!-- ssbar -->
                    <v-row no-gutters>
                      <v-img 
                        src="../src/assets/blackSsBar.png" 
                      ></v-img>
                    </v-row>
                    <!-- share btn -->
                    <v-row no-gutters
                      class="
                        tw-pt-[40px]
                        tw-pr-[36px]
                        tw-flex tw-justify-end
                      "
                    >
                      <img 
                        src="../assets/greyShare.png" 
                        height="24" 
                      />
                    </v-row>
                    <!-- profile image -->
                    <v-row no-gutters>
                      <v-img 
                        src="../src/assets/greyProfile.png" 
                        height="100" 
                      ></v-img>
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
                      {{bio}}
                    </v-row>

                    <!-- title box -->
                    <v-row no-gutters
                      v-for="(item, index) in products" :key="item"
                      class="
                        tw-pt-[16px]
                        tw-px-[40px]
                      "
                    >
                      <!-- title url -->
                      <!-- <span
                        v-if="titleCheck == false"
                        class="textBody1-16
                          tw-bg-[#9229AE]
                          tw-text-[#ffffff]
                          tw-rounded-full
                          tw-w-full
                          d-flex justify-center align-center
                          tw-px-4
                          tw-py-3
                        "
                      > -->
                      <span
                        v-if="item.title == null"
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
                      </span>
                      <!-- <span
                        v-else if="titleCheck == true"
                        class="textBody1-16
                          tw-bg-[#9229AE]
                          tw-text-[#ffffff]
                          tw-rounded-full
                          tw-w-full
                          d-flex justify-center align-center
                          tw-px-4
                          tw-py-3
                        "
                      > -->
                      <span
                        v-else 
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
                        <!-- image btn -->
                        <!-- <div
                          class="
                            tw-w-[42px]
                            tw-h-[42px]
                            tw-bg-[#d9d9d9]
                            tw-absolute
                            tw-left-0
                            tw-ml-[45px]
                            tw-rounded-full
                          "
                        >
                          <div 
                            v-if="item[index].image !== null"
                          >
                          {{item[index].image}}
                          <v-img 
                            src="{{item[index].image}}"
                          ></v-img>
                          </div>
                        </div> -->
                        {{products[index].title}}
                      </span>
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
                      <span class="tw-pb-4">
                        bubble sharing
                      </span>
                      <img 
                        src="../assets/blackBar.png" 
                      />
                    </v-row>

                    
                  </v-col>
                  <v-col></v-col>

                </v-row>
                <!-- end of chooseTheme = 0 -->

                <!-- if chooseTheme = 1 -->
                <v-row no-gutters
                  v-if="chooseTheme == 1"
                  class="
                    tw-h-[50.75rem]
                    tw-pt-[32px]
                  "
                >
                  <v-col class="
                    tw-border-l
                    tw-border-[#9E9E9E]
                  "></v-col>
                  <v-col cols="10"
                    class="
                      tw-bg-[#f8f8f8]
                      tw-rounded-[40px]
                      tw-relative
                      tw-border-2
                      tw-border-[#616161]
                     
                    "
                  >
                    <!-- ssbar -->
                    <v-row no-gutters>
                      <v-img 
                        src="../src/assets/blackSsBar.png" 
                      ></v-img>
                    </v-row>
                    <!-- share btn -->
                    <v-row no-gutters
                      class="
                        tw-pt-[40px]
                        tw-pr-[36px]
                        tw-flex tw-justify-end
                      "
                    >
                      <img 
                        src="../assets/greyShare.png" 
                        height="24" 
                      />
                    </v-row>
                    <!-- profile image -->
                    <v-row no-gutters>
                      <v-img 
                        src="../src/assets/greyProfile.png" 
                        height="100" 
                      ></v-img>
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
                      {{bio}}
                    </v-row>

                    <!-- title box -->
                    <v-row no-gutters
                      v-for="(item, index) in products" :key="item"
                      class="
                        tw-pt-[16px]
                        tw-px-[40px]
                      "
                    >
                      <!-- title url -->
                      <span
                        v-if="item.title == null"
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
                      </span>
                      <span
                        v-else 
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
                        {{products[index].title}}
                      </span>
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
                      <span class="tw-pb-4">
                        bubble sharing
                      </span>
                      <img 
                        src="../assets/blackBar.png" 
                      />
                    </v-row>
                    <!-- end of buble sharing & line home buttom iPhone -->
                  </v-col>
                  <v-col></v-col>
                </v-row>
                <!-- end of chooseTheme = 1 -->

                <!-- if chooseTheme = 2 -->
                <v-row no-gutters
                  v-if="chooseTheme == 2"
                  class="
                    tw-h-[50.75rem]
                    tw-pt-[32px]
                  "
                >
                  <v-col class="
                    tw-border-l
                    tw-border-[#9E9E9E]
                  "></v-col>
                  <v-col cols="10"
                    class="
                      tw-bg-[#f8f8f8]
                      tw-rounded-[40px]
                      tw-relative
                      tw-border-2
                      tw-border-[#616161]
                     
                    "
                  >
                    <!-- ssbar -->
                    <v-row no-gutters>
                      <v-img 
                        src="../src/assets/blackSsBar.png" 
                      ></v-img>
                    </v-row>
                    <!-- share btn -->
                    <v-row no-gutters
                      class="
                        tw-pt-[40px]
                        tw-pr-[36px]
                        tw-flex tw-justify-end
                      "
                    >
                      <img 
                        src="../assets/greyShare.png" 
                        height="24" 
                      />
                    </v-row>
                    <!-- profile image -->
                    <v-row no-gutters>
                      <v-img 
                        src="../src/assets/greyProfile.png" 
                        height="100" 
                      ></v-img>
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
                      {{bio}}
                    </v-row>

                    <!-- title box -->
                    <v-row no-gutters
                      v-for="(item, index) in products" :key="item"
                      class="
                        tw-pt-[16px]
                        tw-px-[40px]
                      "
                    >
                      <!-- title url -->
                      <span
                        v-if="item.title == null"
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
                      </span>
                      <span
                        v-else 
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
                        {{products[index].title}}
                      </span>
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
                      <span class="tw-pb-4">
                        bubble sharing
                      </span>
                      <img 
                        src="../assets/blackBar.png" 
                      />
                    </v-row>
                    <!-- end of buble sharing & line home buttom iPhone -->
                  </v-col>
                  <v-col></v-col>
                </v-row>
                <!-- end of chooseTheme = 2 -->

                <!-- if chooseTheme = 3 -->
                <v-row no-gutters
                  v-if="chooseTheme == 3"
                  class="
                    tw-h-[50.75rem]
                    tw-pt-[32px]
                  "
                >
                  <v-col class="
                    tw-border-l
                    tw-border-[#9E9E9E]
                  "></v-col>
                  <v-col cols="10"
                    class="
                      tw-bg-[#E8EEFF]
                      tw-rounded-[40px]
                      tw-relative
                      tw-border-2
                      tw-border-[#616161]
                     
                    "
                  >
                    <!-- ssbar -->
                    <v-row no-gutters>
                      <v-img 
                        src="../src/assets/blackSsBar.png" 
                      ></v-img>
                    </v-row>
                    <!-- share btn -->
                    <v-row no-gutters
                      class="
                        tw-pt-[40px]
                        tw-pr-[36px]
                        tw-flex tw-justify-end
                      "
                    >
                      <img 
                        src="../assets/greyShare.png" 
                        height="24" 
                      />
                    </v-row>
                    <!-- profile image -->
                    <v-row no-gutters>
                      <v-img 
                        src="../src/assets/greyProfile.png" 
                        height="100" 
                      ></v-img>
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
                      {{bio}}
                    </v-row>

                    <!-- title box -->
                    <v-row no-gutters
                      v-for="(item, index) in products" :key="item"
                      class="
                        tw-pt-[16px]
                        tw-px-[40px]
                      "
                    >
                      <!-- title url -->
                      <span
                        v-if="item.title == null"
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
                      </span>
                      <span
                        v-else 
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
                        {{products[index].title}}
                      </span>
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
                      <span class="tw-pb-4">
                        bubble sharing
                      </span>
                      <img 
                        src="../assets/blackBar.png" 
                      />
                    </v-row>
                    <!-- end of buble sharing & line home buttom iPhone -->
                  </v-col>
                  <v-col></v-col>
                </v-row>
                <!-- end of chooseTheme = 3 -->

                <!-- if chooseTheme = 4 -->
                <v-row no-gutters
                  v-if="chooseTheme == 4"
                  class="
                    tw-h-[50.75rem]
                    tw-pt-[32px]
                  "
                >
                  <v-col class="
                    tw-border-l
                    tw-border-[#9E9E9E]
                  "></v-col>
                  <v-col cols="10"
                    class="
                      tw-bg-[#E0FAEE]
                      tw-rounded-[40px]
                      tw-relative
                      tw-border-2
                      tw-border-[#616161]
                     
                    "
                  >
                    <!-- ssbar -->
                    <v-row no-gutters>
                      <v-img 
                        src="../src/assets/blackSsBar.png" 
                      ></v-img>
                    </v-row>
                    <!-- share btn -->
                    <v-row no-gutters
                      class="
                        tw-pt-[40px]
                        tw-pr-[36px]
                        tw-flex tw-justify-end
                      "
                    >
                      <img 
                        src="../assets/greyShare.png" 
                        height="24" 
                      />
                    </v-row>
                    <!-- profile image -->
                    <v-row no-gutters>
                      <v-img 
                        src="../src/assets/greyProfile.png" 
                        height="100" 
                      ></v-img>
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
                      {{bio}}
                    </v-row>

                    <!-- title box -->
                    <v-row no-gutters
                      v-for="(item, index) in products" :key="item"
                      class="
                        tw-pt-[16px]
                        tw-px-[40px]
                      "
                    >
                      <!-- title url -->
                      <span
                        v-if="item.title == null"
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
                      </span>
                      <span
                        v-else 
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
                        {{products[index].title}}
                      </span>
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
                      <span class="tw-pb-4">
                        bubble sharing
                      </span>
                      <img 
                        src="../assets/blackBar.png" 
                      />
                    </v-row>
                    <!-- end of buble sharing & line home buttom iPhone -->
                  </v-col>
                  <v-col></v-col>
                </v-row>
                <!-- end of chooseTheme = 4 -->

                <!-- if chooseTheme = 5 -->
                <v-row no-gutters
                  v-if="chooseTheme == 5"
                  class="
                    tw-h-[50.75rem]
                    tw-pt-[32px]
                  "
                >
                  <v-col class="
                    tw-border-l
                    tw-border-[#9E9E9E]
                  "></v-col>
                  <v-col cols="10"
                    class="
                      tw-bg-[#FFF5F7]
                      tw-rounded-[40px]
                      tw-relative
                      tw-border-2
                      tw-border-[#616161]
                     
                    "
                  >
                    <!-- ssbar -->
                    <v-row no-gutters>
                      <v-img 
                        src="../src/assets/blackSsBar.png" 
                      ></v-img>
                    </v-row>
                    <!-- share btn -->
                    <v-row no-gutters
                      class="
                        tw-pt-[40px]
                        tw-pr-[36px]
                        tw-flex tw-justify-end
                      "
                    >
                      <img 
                        src="../assets/greyShare.png" 
                        height="24" 
                      />
                    </v-row>
                    <!-- profile image -->
                    <v-row no-gutters>
                      <v-img 
                        src="../src/assets/greyProfile.png" 
                        height="100" 
                      ></v-img>
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
                      {{bio}}
                    </v-row>

                    <!-- title box -->
                    <v-row no-gutters
                      v-for="(item, index) in products" :key="item"
                      class="
                        tw-pt-[16px]
                        tw-px-[40px]
                      "
                    >
                      <!-- title url -->
                      <span
                        v-if="item.title == null"
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
                      </span>
                      <span
                        v-else 
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
                        {{products[index].title}}
                      </span>
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
                      <span class="tw-pb-4">
                        bubble sharing
                      </span>
                      <img 
                        src="../assets/blackBar.png" 
                      />
                    </v-row>
                    <!-- end of buble sharing & line home buttom iPhone -->
                  </v-col>
                  <v-col></v-col>
                </v-row>
                <!-- end of chooseTheme = 5 -->
            </v-col>
            <!-- end of right side -->
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </body>
</template>
  
<script setup>
import { ref } from "vue";
import { useProductStore } from "@/stores/products";


const  { store, account, theme, setTheme, updateProfile, products } = useProductStore();
console.log(account[0].username)
console.log("produxts[0].title", products[0].title)

const username = ref("")
const bio = ref("");
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

const file = ref("");
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





</script>
  
<style scoped>
@import url("http://fonts.googleapis.com/css?family=Roboto");
body {
  font-family: "Roboto";
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
.removeBtn {
  outline: 1px solid #616161;
  transition-duration: 0.2s;
}
.removeBtn:hover {
  background-color: #616161;
  color: #f8f8f8;
}
  
</style>
  