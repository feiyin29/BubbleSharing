<template>
  <v-container fluid class="pa-0 tw-bg-[#E5E5E5]" style="height: 1024px ">
    <v-row no-gutters class="sheetPadding">
      <v-col cols="12" class="headingFont d-flex justify-center"> My Account </v-col>

        <v-col cols="12" class="h2Font mt-10 ">My information</v-col>
        <div class="mt-8 box ">
        <col cols="12" class="mt-9 ">

        <v-col cols="12">
          <v-responsive class="mx-auto mt-3" >
            <v-text-field
              v-model="model"
              hide-details="auto"
              label="Username"
              variant="underlined"
            ></v-text-field>
          </v-responsive>
        </v-col>

        <v-col cols="12" class="mt-12">
          <v-responsive class="mx-auto" width="900">
            <v-text-field
              v-model="email"
              hide-details="auto"
              label="Email"
              variant="underlined"
            ></v-text-field>
          </v-responsive>
        </v-col>
        </div>
      <v-col cols="12 mt-16"><button class="button">Save change</button></v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  data: () => ({
    model: "Kasapak",
    email: "Kasapak@gmail.com",
  }),
};
</script>

<style scoped>
@import url("http://fonts.googleapis.com/css?family=Roboto");
body {
  font-family: "Roboto";
}

.sheetPadding {
  padding: 0px 118px 0px 118px;
}

.box {
  padding: 0px 215px 0px 215px;
  background-color: #fff;
  height: 240px;
  width: 1010px;
  margin-left: 215px;
  border-radius : 10px;
  
}

.headingFont {
  margin-top: 136px;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -1px;
  color: #282828;
}

.h2Font {
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.25px;
  font-weight: medium;
  margin-left: 147px;
}

.button {
  background-color: #5b78ff;
  border-radius: 20px;
  border: none;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  cursor: pointer;
  height: 60px;
  width: 222px;
/*  float: right; */
  margin-left: 1003px;
}

.button:hover {
  background-color: #4462f0;
}

textarea {
  width: 1204px;
  height: 446px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #c9d7fc;
  border-radius: 10px;
  font-size: 20px;
  resize: none;
  caret-color: #c9d7fc;
}
</style>
