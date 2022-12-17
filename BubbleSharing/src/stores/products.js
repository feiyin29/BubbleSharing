import { defineStore } from 'pinia';
import { ref } from 'vue'
export const useProductStore = defineStore({
  id: 'products',
  state: () => ({
    account: [],
    design: [],
    Link: [],
    countNumber: 1,
    products: [
      // {
      //   title: "Pencil",
      //   image: 'src/assets/pencil.png',
      //   url: 'www.google.com',
      // },
      // {
      //   title: "Eraser",
      //   image: 'src/assets/eraser.png',
      //   url: 'www.youtube.com',
      // },
    ],
  }),
  actions: {
    addNewAccount(data) {
      this.account.push(data);
      console.log("out ", this.account);
    },
    pushData(param) {
      this.products.push(param);
      console.log(this.products);
    },
    incrementNumber() {
      this.countNumber++;
      console.log(this.countNumber);
    },
    updateByEdit(item) {
      const find = this.products.find((each, index) => {
        console.log(index)
        console.log(item.index)

        if (index == item.index.value) return each
      })
      find.title = item.title.value
      find.image = item.image.value
      find.url = item.url.value
      this.products.splice(item.index.value, 1, find)
    },
    
  },
});