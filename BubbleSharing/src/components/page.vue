<template>
  <body>
    <v-container fluid class="pa-0">
      <v-row no-gutters class="mt-8 ">
        <v-col cols="8">
          <v-row no-gutters class="d-flex justify-center">
            <v-col cols="8">
              <button
                class="
                  textBody3btn
                  tw-w-full
                  tw-bg-[#FF4F7D]
                  tw-rounded-full
                  
                "
                @click="addLink()"
              >
                + Add Link
              </button>
            </v-col>
          </v-row>
          <!-- body right -->
          <v-row no-gutters class="d-flex justify-center">
            <v-col cols="12" class="mt-16">
              <v-sheet
                class="
                    sheetBorder
                    overflow-y-auto 
                    tw-border-2
                    px-4 py-2
                    "
                color="#f8f8f8"
                rounded="xl"
                height="550"
                width="100%"
            >
                <v-row no-gutters v-if="store.Link.length == 0"
                    class="d-flex align-center"
                >
                  <v-col cols="12" class="mt-16">
                    <v-row no-gutters class="d-flex justify-center">
                      <img src="../assets/logoGrey.png" width="65.43" />
                    </v-row>
                    <v-row no-gutters 
                        class="
                          textBody3
                          d-flex 
                          justify-center
                          mt-6
                        "
                    >
                      Show the world who you are.
                    </v-row>
                    <v-row no-gutters 
                        class="
                        textBody3
                        d-flex 
                        justify-center
                          "
                    >
                      Add a link to get started.
                    </v-row>
                  </v-col>
                </v-row>
                <v-row no-gutters v-else class="">
                    <v-col 
                        cols="12"
                        v-for="(item, index) in store.Link"
                        :key="index"
                        class="my-2 "
                    > 
                        <v-card v-if=" item.editBtn != true"
                                elevation="0"
                                rounded="xl" 
                                color="#ffffff" 
                                class="mx-auto"
                                width="737" 
                                height="160"
                            > 
                              <v-row no-gutters style="height: 160px" class="pa-0">
                                <!-- Title -->
                                <v-col cols="5" class=" mt-n3">
                                  <v-row no-gutters class="
                                    textBody3-24
                                    tw-pt-[36px]
                                    tw-px-[36px]
                                    d-flex align-center
                                    "
                                  >
                                    {{item.title}}
                                    <!-- <v-text-field 
                                      variant="underlined"
                                      v-model="title" 
                                    >
                                    </v-text-field> -->
                                  </v-row>
                                </v-col>
                                <v-col cols="7" ></v-col>
                                <!-- URL -->
                                <v-col cols="5" class="mt-n4 ">
                                  <v-row no-gutters
                                    class="
                                      textRegular20
                                      tw-px-[36px]
                                      d-flex align-center
                                      tw-pt-[8px]
                                    "
                                  >
                                    {{item.url}}
                                    <!-- <v-text-field 
                                      variant="underlined"
                                      v-model="title" 
                                    >
                                    </v-text-field> -->
                                  </v-row>
                                </v-col>
                                <v-col cols="7"></v-col>
                                <!-- multi btn -->
                                <v-col cols="8" >
                                  <v-row no-gutters class="
                                    tw-px-[36px]
                                    d-flex align-center
                                    tw-text-[16px] tw-text-[#9E9E9E]
                                    "
                                  >
                                    <img 
                                      class="tw-w-[21px] tw-h-[21px] tw-mr-[7px]"
                                      src="../assets/statIcon.png"
                                    />
                                    {{item.click}} Clicks
                                  </v-row>
                                </v-col>
                                <v-col cols="4" >
                                  <v-row no-gutters class="
                                    tw-px-[36px]
                                    d-flex justify-end align-center
                                    "
                                  >
                                    <button 
                                      class="editBtn  mr-2"
                                      @click="edit(item,index)"
                                    >
                                      Edit
                                    </button>
                                    <p class="tw-text-[25px] tw-text-[#BDBDBD]">|</p>
                                    <button 
                                      class="editBtn  ml-2"
                                      @click="store.deleteLink(index)"
                                    >
                                      Delete
                                    </button>
                                  </v-row>
                                </v-col>
                              </v-row>
                        </v-card>
                        <v-row no-gutters v-else >
                          <!-- <v-col cols="12"> -->
                          <v-card 
                              elevation="0"
                              rounded="xl" 
                              color="#ffffff" 
                              class="mx-auto"
                              width="737" 
                              height="160"
                          >
                            <v-row no-gutters style="height: 160px" class="px-10 py-2">
                              <v-col cols="5" style="height: 50px" class="d-flex align-center  pa-0">
                                <v-row no-gutters>
                                  <v-text-field 
                                    variant="underlined"
                                    v-model="title" 
                                  >
                                  </v-text-field>
                                </v-row>
                              </v-col>
                              <v-col cols="7"></v-col>
                              <v-col cols="5" style="height: 50px" class="d-flex align-center  pa-0">
                                <v-row no-gutters>
                                  <v-text-field 
                                    variant="underlined"
                                    v-model="url" 
                                  >
                                  </v-text-field>
                                </v-row>
                              </v-col>
                              <v-col cols="7"></v-col>
                              <v-col cols="8" style="height: 50px" class="d-flex align-center  pa-0">
                                <v-row no-gutters class="
                                      
                                      d-flex align-center
                                      tw-text-[16px] tw-text-[#9E9E9E]
                                      "
                                    >
                                      <img 
                                        class="tw-w-[21px] tw-h-[21px] tw-mr-[7px]"
                                        src="../assets/statIcon.png"
                                      />
                                      {{item.click}} Clicks
                                    </v-row>
                              </v-col>
                              <v-col cols="4"></v-col>
                            </v-row>
                            
                          </v-card>
                          <!-- </v-col> -->
                          <!-- btn -->
                          <v-col cols="10" class="d-flex justify-end mt-2 ml-10">
                            <button 
                              class="saveBtn mr-1"
                              @click="save(item,index)"
                            >
                              save
                            </button>
                            <button 
                              class="saveBtn"
                              @click="item.editBtn = !item.editBtn"
                            >
                              cancle
                            </button>
                          </v-col>
                      </v-row>
                    </v-col>
                </v-row>
            </v-sheet>
            </v-col>
          </v-row>
        </v-col>

        <!-- body right -->
        <!-- new iPhone -->
        <v-col cols="4">
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
              <!-- feifeifei -->
              <!-- profile image -->
              <v-col cols="12">
                      <v-row no-gutters class="ml-10  d-flex justify-center">
                        <v-col cols="4" 
                            class="
                                innerShadow 
                                bg-white 
                                tw-rounded-[200px]
                                mr-10 
                                d-flex 
                                justify-center 
                                align-center"
                                style="height: 119px"
                                >
                            <v-img 
                                v-if="file != null" 
                                :src="file" 
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
                @{{store.account[0].username}} 
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
                {{store.design[0].bio}}
              </v-row>

              <!-- title box -->
              <v-row no-gutters
                v-for="item in store.Link" :key="item"
                class="
                  tw-pt-[16px]
                  tw-px-[40px]
                "
              >
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
                  {{item.title}}
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
              <v-col cols="12">
                      <v-row no-gutters class="ml-10  d-flex justify-center">
                        <v-col cols="4" 
                            class="
                                innerShadow 
                                bg-white 
                                tw-rounded-[200px]
                                mr-10 
                                d-flex 
                                justify-center 
                                align-center"
                                style="height: 119px"
                                >
                            <v-img 
                                v-if="file != null" 
                                :src="file" 
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
                @{{store.account[0].username}} 
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
                {{store.design[0].bio}}
              </v-row>

              <!-- title box -->
              <v-row no-gutters
                v-for="item in store.Link" :key="item"
                class="
                  tw-pt-[16px]
                  tw-px-[40px]
                "
              >
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
                  {{item.title}}
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
              <v-col cols="12">
                      <v-row no-gutters class="ml-10  d-flex justify-center">
                        <v-col cols="4" 
                            class="
                                innerShadow 
                                bg-white 
                                tw-rounded-[200px]
                                mr-10 
                                d-flex 
                                justify-center 
                                align-center"
                                style="height: 119px"
                                >
                            <v-img 
                                v-if="file != null" 
                                :src="file" 
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
                @{{store.account[0].username}} 
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
                {{store.design[0].bio}}
              </v-row>

              <!-- title box -->
              <v-row no-gutters
                v-for="item in store.Link" :key="item"
                class="
                  tw-pt-[16px]
                  tw-px-[40px]
                "
              >
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
                  {{item.title}}
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
              <v-col cols="12">
                      <v-row no-gutters class="ml-10  d-flex justify-center">
                        <v-col cols="4" 
                            class="
                                innerShadow 
                                bg-white 
                                tw-rounded-[200px]
                                mr-10 
                                d-flex 
                                justify-center 
                                align-center"
                                style="height: 119px"
                                >
                            <v-img 
                                v-if="file != null" 
                                :src="file" 
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
                @{{store.account[0].username}} 
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
                {{store.design[0].bio}}
              </v-row>

              <!-- title box -->
              <v-row no-gutters
                v-for="item in store.Link" :key="item"
                class="
                  tw-pt-[16px]
                  tw-px-[40px]
                "
              >
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
                  {{item.title}}
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
              <v-col cols="12">
                      <v-row no-gutters class="ml-10  d-flex justify-center">
                        <v-col cols="4" 
                            class="
                                innerShadow 
                                bg-white 
                                tw-rounded-[200px]
                                mr-10 
                                d-flex 
                                justify-center 
                                align-center"
                                style="height: 119px"
                                >
                            <v-img 
                                v-if="file != null" 
                                :src="file" 
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
                @{{store.account[0].username}} 
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
                {{store.design[0].bio}}
              </v-row>

              <!-- title box -->
              <v-row no-gutters
                v-for="item in store.Link" :key="item"
                class="
                  tw-pt-[16px]
                  tw-px-[40px]
                "
              >
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
                  {{item.title}}
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
              <v-col cols="12">
                      <v-row no-gutters class="ml-10  d-flex justify-center">
                        <v-col cols="4" 
                            class="
                                innerShadow 
                                bg-white 
                                tw-rounded-[200px]
                                mr-10 
                                d-flex 
                                justify-center 
                                align-center"
                                style="height: 119px"
                                >
                            <v-img 
                                v-if="file != null" 
                                :src="file" 
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
                @{{store.account[0].username}} 
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
                {{store.design[0].bio}}
              </v-row>

              <!-- title box -->
              <v-row no-gutters
                v-for="item in store.Link" :key="item"
                class="
                  tw-pt-[16px]
                  tw-px-[40px]
                "
              >
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
                  {{item.title}}
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
            </v-col>
            <v-col></v-col>
          </v-row>
          <!-- end of chooseTheme = 5 -->
        </v-col>
        
        
      </v-row>
    </v-container>
  </body>
</template>

<script >
import { useProductStore } from "@/stores/products";
import { ref, computed } from 'vue';
export default {
  setup:() => {
    const store = useProductStore();
    const title = ref("Title");
    const url = ref("Url");
    const file = ref(store.design[0].profileImage);
    const editBtn = false;
    console.log("hellooooo",store.design[0].themeTemplate);
    let chooseTheme = 0;
    const themeTemplate = store.design[0].themeTemplate
    chooseTheme = themeTemplate

    const dataInput = async (item, index) => {
      const Link = {  
        seq: item.index,
        title: titleInput.value ,
        url: urlInput.value,
        img: item.img,
        click: click.value,
      }
    
    }

    const dt = {
      title: title.value,
      url: url.value,
      click: 0,
    }


    function edit(item, index){
      item.editBtn = !item.editBtn;
      this.title = item.title; 
      this.url = item.url; 
      console.log("edit func",item.editBtn);
      console.log("edit func item", item);
      console.log("edit func item tt", item.title);
      console.log("edit func tt", this.title);
      console.log("edit func url", this.url);
    }

    function save(item, index){
      item.title = this.title;
      item.url = this.url;
      console.log("save func item", item);
      store.updateByEdit(item,index);
      item.editBtn = !item.editBtn;
    }

    function addLink(){
      const dt = {
        title: title.value+store.Link.length,
        url: url.value,
        click: 0,
        editBtn: false,
    }
      // const data = LinkRoot.df;
      store.addNewLink(dt);
      // console.log("add Link",dt);
      // console.log("add Link",dt.title);
    }
    
    return { store, dt, addLink, edit, save, chooseTheme, file}
  },
  methods:{

  }
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

.v-text-field >>> input{
  font-weight: medium;
  font-size: 22px;
  line-height: 24px;
  letter-spacing: 0px;
  color:#252525;
}
.saveBtn {
  font-size: 16px;
  color: #ffffff;
  background-color: #FF4F7D;
  padding: 5px 14px ;
  border-radius: 25px
}
.saveBtn:hover {
  color: #ffffff;
  background-color: #E03965;
}
.editBtn {
  font-size: 20px;
  color: #9E9E9E;
}
.editBtn:hover {
  font-size: 20px;
  color: #FF4F7D;;
}
.v-card{
  background-color: #f8f8f8;
  border-color: #FF4F7D;
  border-width: 1px;
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
  letter-spacing: 1.5px;
  /* color:#000000; */
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