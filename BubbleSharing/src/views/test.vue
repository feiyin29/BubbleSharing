<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-row no-gutters class="mb-8 mx-10 mt-16 tw-border-4">
        <v-col cols="1" 
            class="
                innerShadow 
                bg-white 
                tw-rounded-[200px]
                mr-10 
                d-flex 
                justify-center 
                align-center"
                style="height: 123px"
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
                size="20" 
                color="#e4e4e4" 
                class="ma-13"
            >
                mdi-camera-plus
            </v-icon>
        </v-col>
        <v-col cols="7" class="d-flex flex-column ">
            <v-row no-gutters class="d-flex align-center">
                Change Image
            </v-row>
            <v-row no-gutters class="">
                <input 
                    type="file" 
                    accept="image/*" 
                    ref="file.value" 
                    @change="onFileChange"
                    class="form-control-file">
            </v-row>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12">
      <v-row no-gutters class="mb-8 mx-10 mt-16 tw-border-4">
        <v-col cols="1" 
            class="
                innerShadow 
                bg-white 
                tw-rounded-[200px]
                mr-10 
                d-flex 
                justify-center 
                align-center"
                style="height: 123px"
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
                size="20" 
                color="#e4e4e4" 
                class="ma-13"
            >
                mdi-camera-plus
            </v-icon>
        </v-col>
        <v-col cols="7" class="d-flex flex-column ">
        </v-col>
      </v-row>
    </v-col>

  </v-row>
</template>

<script>
import { ref } from 'vue';
export default {
    setup:() => {
      const file = ref("")
    return { file }
    },
    methods: {
        onFileChange(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) {
                return
            }
            this.fileName = files[0].name
            this.createImage(files[0])
            console.log("onFile",files);
        },
        createImage(file) {
            var image = new Image()
            var reader = new FileReader()

            reader.onload = (e) => {
                this.file = e.target.result;
                this.$emit('change', this.file)
            }
            reader.readAsDataURL(file)
            console.log("creatFile",file);
        },
    },
  }
</script>

<style scoped>
.innerShadow{
    border: 2px solid #e4e4e4;
    box-shadow: inset 0px 0px 15px 0.5px rgba(231, 231, 231, 0.9);
}
.sheetBorder {
     border: 2px solid #e4e4e4;
}
</style>