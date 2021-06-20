<template>
  <page title="Start Test">
    <div>
      <ion-button router-link="/cpu-test">Start Test Suite</ion-button>
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
  methods: {},
});
</script>

;
