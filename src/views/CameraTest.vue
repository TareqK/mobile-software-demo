<template>
  <page title="Camera Test">
    <div>
      <ion-button @click="benchmark">Start Test</ion-button>
    </div>
    <div>
      <ion-button router-link="/accelerometer-test" v-if="testDone"
        >Next Test</ion-button
      >
    </div>
    <table>
      <tr>
        <td>Test Result</td>
        <td>{{ test }} ms</td>
      </tr>
    </table>
  </page>
</template>
<script>
import { defineComponent } from "vue";
import Page from "@/views/Page.vue";
import { Camera, CameraResultType } from "@capacitor/camera";
import { IonButton } from "@ionic/vue";
import { measureExecutionTimeForBenchmarkAsync } from "@/utils/performanceUtils";
export default defineComponent({
  name: "CameraTest",
  components: {
    Page,
    IonButton,
  },
  data: () => ({
    test: 0,
    testDone: false,
  }),
  methods: {
    benchmark: function () {
      this.testDone = false;
      measureExecutionTimeForBenchmarkAsync(async () => {
        await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.Uri,
        });
      }).then((res) => {
        this.test = res;
        this.testDone = true;
      });
    },
  },
});
</script>

;
