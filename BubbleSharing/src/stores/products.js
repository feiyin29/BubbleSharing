import { defineStore } from 'pinia';
import { ref } from 'vue'
export const useProductStore = defineStore({
  id: 'products',
  state: () => ({
    account: [],
    design: [],
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

      this.Link.splice(seq, 1, find)
      console.log("udE find",find);
      console.log("udE Link",this.Link);
    },
    
  },
});