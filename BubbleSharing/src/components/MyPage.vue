<template>
    <body>
      <v-container fluid class="pa-0">
        <v-row no-gutters>
          <v-col cols="12" >
            <v-row no-gutters>

              <!-- left side -->
              <v-col cols="8">
              <!-- nav bar -->
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
                <!-- Body -->
                <v-row no-gutters 
                  class="tw-pt-[61px]"
                  v-if="addLinkBtn == false" 
                >
                  <v-col></v-col>
                  <v-col cols="8">
                    <button
                      class="
                        textBody3btn
                        tw-w-full
                        tw-bg-[#FF4F7D]
                        tw-rounded-full
                        
                      "
                      @click="addLinkBtn = true"
                    >
                      + Add Link
                    </button>
                  </v-col>
                  <v-col></v-col>
                </v-row>

                <!-- after clicked (+ Add Link) button -->
                <!-- enter first url -->
                <v-row no-gutters
                  v-if="addLinkBtn == true && addUrlBtn == false" 
                  class="
                    tw-pt-[71px]
                  "
                >
                  <v-col></v-col>
                  <v-col cols="10"
                    class="
                      tw-border
                      tw-border-[#FF4F7D]
                      tw-rounded-[20px]
                      tw-bg-[#F8F8F8]
                      tw-p-[42px]
                    "
                  >
                    <v-row no-gutters
                      class="heading2-24
                        tw-pl-[42px]
                        tw-pt-[42px]
                        
                      "
                    >
                      Enter URL
                    </v-row>
                    <v-row no-gutters
                      class="
                        tw-px-[42px]
                        tw-pt-[12px]
                        tw-pb-[42px]
                      "
                    >
                      <v-col cols="9">
                        <form>
                          <!-- <label for="url">Enter URL</label> -->
                          <input 
                            type="text" 
                            id="url" 
                            name="url" 
                            placeholder="URL"
                            v-model="url"
                            v-on:keyup="inputUrl()" 

                          >
                        </form>
                      </v-col>
                      <v-col cols="3"
                        class="
                        d-flex justify-center align-center
                        "
                      >
                        <button
                          class="addBtn
                          tw-w-full
                          tw-bg-[#FF4F7D]
                          tw-rounded-full
                          
                          "
                          @click="addUrlBtn = true"
                          @click.stop="urlCheck()"
                        >
                          Add
                        </button>
                      </v-col>
                      
                    </v-row>
                  </v-col>
                  <v-col></v-col>
                </v-row>
                <!-- end of enter first url -->


                <!-- grey decorate -->
                <v-row no-gutters
                  class="
                    d-flex justify-center align-center
                    tw-pt-[70px]
                  "
                  v-if="addUrlBtn == false"
                >
                  <img src="../assets/logoGrey.png" width="65.43" />
                </v-row>
                <v-row no-gutters
                  class="
                    textBody3
                    tw-pt-[70px]
                  "
                  v-if="addUrlBtn == false"
                >
                  <v-col>
                    <v-row no-gutters
                      class="
                        d-flex justify-center align-center
                      "
                    >
                      Show the world who you are.
                    </v-row>
                    <v-row no-gutters
                      class="
                        d-flex justify-center align-center
                      "
                    >
                      Add a link to get started.
                    </v-row>
                  </v-col>
                </v-row>
                <!-- end of grey decorate -->

                <!-- after added first URL -->
                <!-- add next URL -->
                <v-row no-gutters 
                  class="tw-pt-[61px]"
                  v-if="addUrlBtn == true" 
                >
                  <v-col cols="12">
                    <!-- ( + Add Link ) btn -->
                    <v-row no-gutters>
                      <v-col></v-col>
                      <v-col cols="8">
                        <button
                          class="
                            textBody3btn
                            tw-w-full
                            tw-bg-[#FF4F7D]
                            tw-rounded-full
                            
                          "
                        >
                          + Add Link
                        </button>
                      </v-col>
                      <v-col></v-col>
                    </v-row>

                    <!-- edit first url -->
                    <!-- <v-row no-gutters
                      v-for="(item, index) in store.products" :key="item"
                      class="
                        tw-pt-[61px]
                      "
                    > -->
                    <v-row no-gutters
                      v-for="i in countNumber" v-bind:key="i"
                      class="
                        tw-pt-[61px]
                      "
                    >
                      <v-col></v-col>
                      <v-col cols="10"
                        class="
                          tw-border
                          tw-border-[#FF4F7D]
                          tw-rounded-[20px]
                          tw-bg-[#F8F8F8]
                          tw-p-[36px]
                        "
                      >
                        <v-row no-gutters
                          class="
                            textBody3-24
                            tw-pt-[36px]
                            tw-px-[36px]
                            d-flex align-center
                          "
                        >
                          <button
                            
                            @click="titleBtn = true"
                            v-if="titleBtn == false"
                            class="
                              d-flex align-center
                            "
                          >
                            <span
                              v-if="titleCheck == false"
                            >
                              Title
                            </span>
                            <span
                              v-else
                            >
                              {{title}}
                            </span>
                            <img 
                              class="tw-w-4 tw-h-4 tw-ml-2"
                              src="../assets/pencilIcon.png"
                            />
                          </button>
                          <div
                            v-if="titleBtn == true"
                            class="
                              d-flex align-center
                            "
                          >
                            <form>
                              <input 
                                type="textTitle" 
                                id="title" 
                                name="title" 
                                placeholder="Title"
                                v-model="title"
                                v-on:keyup="inputTitle()"
                              >
                            </form>
                            <button
                              @click="titleBtn = false"
                              class="
                                tw-ml-4
                                tw-px-6
                                tw-py-2
                                tw-font-medium
                                tw-text-lg
                                tw-bg-[#FF4F7D]
                                tw-text-[#F8F8F8]
                                tw-rounded-full
                                hover:tw-bg-[#E03965]
                              "
                            >
                              Save
                            </button>
                          </div>
                        </v-row>
                        <v-row no-gutters
                          class="
                            textRegular20
                            tw-px-[36px]
                            d-flex align-center
                            tw-pt-[16px]
                          "
                        >
                          <button
                            @click="urlEditBtn = true"
                            v-if="urlEditBtn == false"
                            class="
                              d-flex align-center
                            "
                          >
                            <span
                              v-if="urlEditCheck == false"
                            >
                              URL
                            </span>
                            <span
                              v-else
                            >
                              {{url}}
                            </span>
                            <img 
                              class="tw-w-4 tw-h-4 tw-ml-2"
                              src="../assets/pencilIcon.png"
                            />
                          </button>
                          <div
                            v-if="urlEditBtn == true"
                            class="
                              d-flex align-center
                            "
                          >
                            <form>
                              <input 
                                type="textUrl" 
                                id="url" 
                                name="url" 
                                placeholder="url"
                                v-model="url"
                                v-on:keyup="inputUrl()"
                              >
                            </form>
                            <button
                              @click="urlEditBtn = false"
                              class="
                                tw-ml-4
                                tw-px-6
                                tw-py-2
                                tw-font-medium
                                tw-text-lg
                                tw-bg-[#FF4F7D]
                                tw-text-[#F8F8F8]
                                tw-rounded-full
                                hover:tw-bg-[#E03965]
                              "
                            >
                              Save
                            </button>
                          </div>
                        </v-row>
                        <v-row no-gutters
                          class="
                            tw-px-[36px]
                            tw-pb-[36px]
                            d-flex align-center
                            tw-pt-[16px]
                          "
                        >
                          <v-col
                            class="
                              d-flex justify-start align-center
                            "
                          >
                            <button>
                              <img 
                                class="tw-w-[21px] tw-h-[21px] tw-mr-[18px]"
                                src="../assets/picIcon.png"
                              />
                            </button>
                            <input
                                        type="file" 
                                        accept="image/*" 
                                        ref="file.value" 
                                        @change="onFileChange"
                                        class="form-control-file"
                            >
                            
                            
                            <img 
                              class="tw-w-[21px] tw-h-[21px] tw-mr-[7px]"
                              src="../assets/statIcon.png"
                            />
                            <span
                              class="
                                textRegular16
                              "
                            >
                              0 Clicks
                            </span>
                          </v-col>
                          <v-col cols="2"
                            class="
                              d-flex justify-end align-center
                            "
                          >
                            <button
                              @click="deleteUrlBox()"
                            >
                              <img 
                                class="tw-w-[21px] tw-h-[21px]"
                                src="../assets/binIcon.png"
                              />
                            </button>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col></v-col>
                    </v-row>

                    <!-- clicked add link more -->
                    <!-- <div v-if="moreUrl">
                      <div v-for="i in count.number" v-bind:key="i">
                        <v-text-field label="Image Link" v-model="editImage[editImage.length-1+i].src" hint="For example, www.example.jpg"
                          solo required>
                        </v-text-field>
                      </div>
                    </div> -->
                  </v-col>
                </v-row>

                

              </v-col> 
              <!-- end of left side -->


              <!-- right side -->
              <v-col cols="4">
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
                <v-row no-gutters
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
                      tw-bg-[#04021D]
                      tw-text-[#f6f6f6]
                      tw-rounded-[40px]
                      tw-relative
                     
                    "
                  >
                    <v-row no-gutters>
                      <v-img 
                        src="../src/assets/StatusBar.png" 
                      ></v-img>
                    </v-row>
                    <v-row no-gutters
                      class="
                        tw-pt-[40px]
                        tw-pr-[36px]
                        tw-flex tw-justify-end
                      "
                    >
                      <img 
                        src="../assets/shareIcon.png" 
                        height="24" 
                      />
                    </v-row>
                    <v-row no-gutters>
                      <v-img 
                        src="../src/assets/accountPic.png" 
                        height="100" 
                      ></v-img>
                    </v-row>
                    <v-row no-gutters
                      class="
                        d-flex justify-center align-center
                        tw-text-[#f6f6f6]
                        tw-font-medium
                        tw-text-2xl
                        tw-pt-[19px]
                      "
                    >
                      @username
                    </v-row>

                    <!-- title box -->
                    <v-row no-gutters
                      v-if="addUrlBtn == true"
                      class="
                        tw-pt-[30px]
                        tw-px-[40px]
                      "
                    >
                       <!--img  -->
                       <v-img 
                          v-if="file != null" 
                          :src="file" 
                          width="50" 
                          height="50" 
                          cover
                        ></v-img>
                        <v-icon 
                                    v-else 
                                    size="80" 
                                    color="#e4e4e4" 
                                    class="ma-13"
                                >
                                    mdi-camera-plus
                                </v-icon>
                      <!-- title url -->
                      <span
                        v-if="titleCheck == false"
                        class="textBody1-16
                          tw-bg-[#f6f6f6]
                          tw-text-[#161616]
                          tw-rounded-full
                          tw-w-full
                          d-flex justify-center align-center
                          tw-px-4
                          tw-py-3
                        "
                      >
                        Title
                      </span>
                      <span
                        v-else if="titleCheck == true"
                        class="textBody1-16
                          tw-bg-[#f6f6f6]
                          tw-text-[#161616]
                          tw-rounded-full
                          tw-w-full
                          d-flex justify-center align-center
                          tw-px-4
                          tw-py-3
                        "
                      >
                        {{title}}
                      </span>
                    </v-row>
                    <!-- end of title box -->

                    <!-- buble sharing & line home buttom iPhone -->
                    <v-row no-gutters
                      class="
                        tw-absolute tw-inset-x-0 tw-bottom-0
                        d-flex justify-center align-center
                        tw-font-bold
                        tw-text-[#f6f6f6]
                        tw-text-[24px]
                      "
                    >
                      <span class="tw-pb-4">
                        bubble sharing
                      </span>
                      <img 
                        src="../assets/iPhoneX.png" 
                      />
                    </v-row>

                    
                  </v-col>
                  <v-col></v-col>

                </v-row>
                <!-- end of iPhone screen -->
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

const  { store, updateByEdit } = useProductStore();


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

let image = ref('');

const editTitle = ref('');
const editImage = ref('');
const editUrl = ref('');
const editIndex= ref('');


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

 
const onFileChange = (e) => {
  let files = e.target.files || e.dataTransfer.files;
  if (!files.length) {
    return
  }
    const fileName = files[0].name
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

// delete url box
const deleteUrlBox = () => {
  
  title.value = '';
  image.value = '';
  url.value = '';
  addLinkBtn.value = false;
  addUrlBtn.value = false;
  console.log(title);
  console.log(image);
  console.log(url);
  console.log(addLinkBtn.value);
  console.log(addUrlBtn.value);
  titleCheck.value = false;
  urlCheck.value = false;
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
  