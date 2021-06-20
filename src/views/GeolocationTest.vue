<template>
  <page title="Geolocation Test">
    <div>
      <ion-button @click="benchmark">Start Test</ion-button>
    </div>
    <div>
      <ion-button router-link="/camera-test" v-if="testDone"
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
import { Geolocation } from "@capacitor/geolocation";
import { IonButton } from "@ionic/vue";
import { measureExecutionTimeForBenchmarkAsync } from "@/utils/performanceUtils";

export default defineComponent({
  name: "GeolocationTest",
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
      measureExecutionTimeForBenchmarkAsync(
        Geolocation.getCurrentPosition
      ).then((res) => {
        this.test = res;
        this.testDone = true;
      });
    },
  },
});
</script>

;
