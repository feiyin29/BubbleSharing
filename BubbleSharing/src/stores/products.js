import { defineStore } from 'pinia';
import { ref } from 'vue'
export const useProductStore = defineStore({
  id: 'products',
  state: () => ({
    account: [{
      username: "esus",
      email: "email.value",
      password: "password.value",
      cfpassword: "cfpassword.value",
      userLink: 'bubble.sh/bimbiim',
    }],
    design: [
      {
        username: 'EverythingShop', 
        bio: 'hey',
        profileImage: null,
        themeTemplate: '0', 
        
    }
  ],
    Link: [],
    countNumber: 1,
    
  }),
  actions: {
    addNewAccount(data) {
      this.account.push(data);
      console.log("out ", this.account);
    },
    addNewLink(Link){
      this.Link.push(Link);
      console.log("Link pinia ", this.Link);
    },
    deleteUsername(){
      this.account.splice(0, 1);  
    },
    deleteLink(index){
      this.Link.splice(index, 1);  
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
      const find = this.design.find((each, index) => {
        console.log("index", index)
        console.log("item.username", item.username)
        console.log("item.bio", item.bio)
        console.log("item.profileImage", item.profileImage)
        console.log("item.themeTemplate", item.themeTemplate)
        console.log("UD item.themeTemplate", item.themeTemplate)

        if (true) return each

        // if (index == item.index.value) return each

        // if (username == item.username.value) return each
        // console.log(each)
      })
      console.log("find", find)
      find.username = item.username
      find.bio = item.bio
      find.profileImage = item.profileImage.value
      find.themeTemplate = item.themeTemplate
      console.log("find af", find)
      // this.account[0].push(themeTemplate: item.themeTemplate);
      // this.account.push('jojo');
      console.log("this.account", this.design)

      // this.account.push(item);
      // console.log("this.account + item", this.account)
    },

    updateByEdit(item,seq) {
      
      const find = this.Link.find((each, index) => {
        // console.log("update",index)
        console.log("update item",item)
        console.log("item sq",seq)
        
        if (index == seq) return each
      })

      console.log("find",find)
      console.log("udE find tt",item.title);

      find.title = item.title
      find.url = item.url
      find.click = item.click

      this.Link.splice(seq, 1, find)
      console.log("udE find",find);
      console.log("udE Link",this.Link);
    },
    updateClick(click,seq){
      const find = this.Link.find((each, index) => {
        if (index == seq) return each
      })
        find.click = click
        this.Link.splice(seq, 1, find)
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