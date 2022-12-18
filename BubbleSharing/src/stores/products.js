import { defineStore } from 'pinia';
import { ref } from 'vue'
export const useProductStore = defineStore({
  id: 'products',
  state: () => ({
    account: [
      {username: 'EverythingShop', bio: 'hey', themeTemplate: '5', userLink: 'bubble.sh/bimbiim'},
    ],
    design: [],
    Link: [],
    countNumber: 1,
    products: [
      {
        title: "Pencil",
        image: 'src/assets/greyProfile.png',
        url: 'https://policies.google.com/privacy?hl=en',
      },
      {
        title: "Eraser",
        image: 'src/assets/eraser.png',
        url: 'https://www.youtube.com/',
      },
    ],
    theme: [
      {
        themeNo: '1',
        bgColor: '#B75555',
        ssBar: '../assets/StatusBar.png',
        share: '../assets/shareIcon.png',
        profileImg: '../assets/whiteProfile.png',
        usernameColor: '#ffffff',
        bioColor: '#ffffff',
        btnColor: '#ffffff',
        textBtnColor: '#161616',
        logo: '../assets/firstLogo.png',
        bar: '../assets/iPhoneX.png',
      },
      {
        themeNo: '2',
        bgColor: '#f8f8f8',
        ssBar: '../assets/blackSsBar.png',
        share: '../assets/secondShare.png',
        profileImg: '../assets/secondProfile.png',
        usernameColor: '#B75555',
        bioColor: '#616161',
        btnColor: '#B75555',
        textBtnColor: '#ffffff',
        logo: '../assets/secondLogo.png',
        bar: '../assets/blackBar.png',
      },
      {
        themeNo: '3',
        bgColor: '#f8f8f8',
        ssBar: '../assets/blackSsBar.png',
        share: '../assets/thirdShare.png',
        profileImg: '../assets/thirdProfile.png',
        usernameColor: '#FFB650',
        bioColor: '#616161',
        btnColor: '#FFB650',
        textBtnColor: '#ffffff',
        logo: '../assets/thirdLogo.png',
        bar: '../assets/blackBar.png',
      },
      {
        themeNo: '4',
        bgColor: '#C9D7FC',
        ssBar: '../assets/blackSsBar.png',
        share: '../assets/shareIcon.png',
        profileImg: '../assets/whiteProfile.png',
        usernameColor: '#161616',
        bioColor: '#616161',
        btnColor: '#ffffff',
        textBtnColor: '#161616',
        logo: '../assets/firstLogo.png',
        bar: '../assets/blackBar.png',
      },
      {
        themeNo: '5',
        bgColor: '#E0FAEE',
        ssBar: '../assets/blackSsBar.png',
        share: '../assets/fifthShare.png',
        profileImg: '../assets/fifthProfile.png',
        usernameColor: '#69DDC7',
        bioColor: '#616161',
        btnColor: '#ffffff',
        textBtnColor: '#69DDC7',
        logo: '../assets/fifthLogo.png',
        bar: '../assets/blackBar.png',
      },
      {
        themeNo: '6',
        bgColor: '#FFF5F7',
        ssBar: '../assets/blackSsBar.png',
        share: '../assets/sixthShare.png',
        profileImg: '../assets/sixthProfile.png',
        usernameColor: '#FF7A94',
        bioColor: '#616161',
        btnColor: '#FF7A94',
        textBtnColor: '#ffffff',
        logo: '../assets/sixthLogo.png',
        bar: '../assets/blackBar.png',
      },
    ],
  }),
  actions: {
    pushData(param) {
      this.products.push(param);
      console.log(this.products);
    },
    addNewAccount(data) {
      this.account.push(data);
      console.log("out ", this.account);
    },
    deleteUsername(){
      this.account.splice(0, 1);  
    },
    setTheme(themeNum) {
      // if (themeNum == this.theme[].)
      const find = this.theme.find((each, index) => {
        console.log(index)
        console.log(themeNum.value)

        if (index == themeNum.value) return each
      })
      console.log(find)
      return find;
    },
    updateProfile(item) {
      console.log("item",item)
      const find = this.account.find((each, index) => {
        console.log("index", index)
        console.log("item.username", item.username)
        console.log("item.bio", item.bio)
        console.log("item.profileImage", item.profileImage)
        console.log("item.themeTemplate", item.themeTemplate)

        if (true) return each

        // if (index == item.index.value) return each

        // if (username == item.username.value) return each
        // console.log(each)
      })
      console.log("find", find)
      find.username = item.username
      find.bio = item.bio
      find.profileImage = item.profileImage
      find.themeTemplate = item.themeTemplate

      // this.account[0].push(themeTemplate: item.themeTemplate);
      // this.account.push('jojo');
      console.log("this.account", this.account)

      // this.account.push(item);
      // console.log("this.account + item", this.account)
    },
    updateByEdit(item) {
      const find = this.products.find((each, index) => {
        console.log(index)
        console.log(item.index)

        if (index == item.index.value) return each
      })
      find.name = item.name.value
      find.price = item.price.value
      find.each = item.each.value
      find.image = item.image.value
      find.category = item.category.value
      this.products.splice(item.index.value, 1, find)
    },
    pushData(param) {
      this.products.push(param);
      console.log(this.products);
    },
    incrementNumber() {
      this.countNumber++;
      console.log(this.countNumber);
    },
    
    
  },
});