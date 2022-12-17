<template>
    <v-container fluid class="pa-0 tw-bg-[#F8F8F8]">

        <v-row no-gutters class="sheetPadding">
            <v-col cols="12" class="justify-center tw-border-[#d9d9d9] tw-border-1 tw-rounded-xl tw-bg-[#fff] pa-6">
                <v-row>
                    <v-col cols="12" class="hFont d-flex justify-center tw-h-full">Lifetime Analytics</v-col>
                </v-row>
    
                <v-row class="caption d-flex justify-center">
                    <v-col cols="1">
                        <span class="dot tw-bg-[#00C97B] mr-2"></span> <span>Views:</span>
                    </v-col>
    
                    <v-col cols="1" class="d-flex justify-center"><span class="dot tw-bg-[#5B78FF] mr-2"></span> <span>Clicks:</span></v-col>
      
                    <v-col cols="1" class="d-flex justify-center"><span class="dot tw-bg-[#E7A98B] mr-2"></span> <span>CTR:</span></v-col>
   
                    <v-col cols="1" class="d-flex justify-center"><span class="dot tw-bg-[#BD8EDE] mr-2"></span> <span>Revenue:</span></v-col>
   
                    <v-col cols="1" class="d-flex justify-center"><span class="dot tw-bg-[#EC5F93] mr-2"></span><span>Subcribers:</span></v-col>
                </v-row>
    
                <v-row class="caption d-flex justify-center mt-0">    
                    <v-col cols="1 " class="d-flex justify-center">N/A</v-col>
   
                    <v-col cols="1" class="d-flex justify-center">N/A</v-col>
    
                    <v-col cols="1" class="d-flex justify-center">N/A</v-col>
    
                    <v-col cols="1" class="d-flex justify-center">-</v-col>
   
                    <v-col cols="1" class="d-flex justify-center">0</v-col>   
                </v-row>    
            </v-col>    
        </v-row>
    
        <v-row no-gutters class="bodyFont Padding mt-8">
            <v-col cols="12" class="tw-border-[#d9d9d9] tw-border-1 tw-rounded-xl tw-bg-[#fff] pa-6">
                <v-row>
                    <v-col cols="1"><img src="../assets/calendar.png" width="32" height="32" /></v-col>
   
                    <v-col cols="11" class="mt-1">14 November 200 - 9 December 2022</v-col>  
                </v-row>   
            </v-col>
    
            <v-col cols="12" class="tw-text-[#616161] mt-2">Select up to 26 days</v-col>
    
            <v-col cols="12" class="mt-6">Activity</v-col>
   
            <v-col cols="12" class="d-flex justify-center tw-border-[#d9d9d9] tw-border-1 tw-rounded-xl tw-bg-[#fff] pa-6 mt-4"> 
                <img src="../assets/1_ana.png" /> 
            </v-col>
 
            <v-col cols="12" class="mt-8">Subscribers</v-col>
  
            <v-col cols="12" class="tw-text-[#616161]">Note: This is example data.</v-col>
 
            <v-col cols="12" class="d-flex justify-center tw-border-[#d9d9d9] tw-border-1 tw-rounded-xl tw-bg-[#fff] pa-6 mt-4">
                <img src="../assets/2_ana.png" />    
            </v-col>

            <v-col cols="12" class="mt-8">Subscribers</v-col>
   
            <v-col cols="12" class="tw-text-[#616161]">Note: This is example data.</v-col>
   
            <v-col cols="12" class="d-flex justify-center tw-border-[#d9d9d9] tw-border-1 tw-rounded-xl tw-bg-[#fff] pa-6 mt-4">    
                <img src="../assets/3_ana.png" />   
            </v-col>
        </v-row>
    
    </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("http://fonts.googleapis.com/css?family=Roboto");
body {
    font-family: "Roboto";
}

.sheetPadding {
    padding: 133px 68px 0px 68px;
}

.Padding {
    padding: 0px 397px 0px 397px;
}

.hFont {
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
}

.bodyFont {
    font-size: 16px;
    line-height: 24px;
}

.caption {
    font-size: 12px;
    line-height: 16px;
}

.dot {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    display: inline-block;
}
</style>
