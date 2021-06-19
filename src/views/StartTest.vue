<template>
  <page title="Start Test">
    <div>
      <ion-button @click="testMethod"> Start </ion-button>
    </div>
  </page>
</template>
<script>
import { defineComponent } from "vue";
import Page from "@/views/Page.vue";
import { IonButton } from "@ionic/vue";
export default defineComponent({
  name: "StartTest",
  components: {
    Page,
    IonButton,
  },
  methods:{
      testMethod: function(){
          console.log("YOU CLICKED")
      }
  }
});
</script>

;
