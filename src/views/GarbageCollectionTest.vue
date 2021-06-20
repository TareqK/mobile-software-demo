<template>
  <page title="Garbage Collection Test">
    <div>
      <ion-button @click="startTest">Start Test</ion-button>
      <table>
        <tr>
          <td>Current Memory</td>
          <td>{{ processMem }} mb</td>
        </tr>
        <tr>
          <td>Start Memory</td>
          <td>{{ startMem }} mb</td>
        </tr>
        <tr>
          <td>End Memory</td>
          <td>{{ endMem }} mb</td>
        </tr>
        <tr>
          <td>Time Elapsed</td>
          <td>{{ timeElapsed }} ms</td>
        </tr>
      </table>
    </div>
    <div v-if="testDone">
      <ion-button router-link="/file-system-test">Next Test</ion-button>
    </div>
  </page>
</template>
<script>
import { defineComponent } from "vue";
import Page from "@/views/Page.vue";
import { Device } from "@capacitor/device";
import {IonButton} from "@ionic/vue"
import { measureExecutionTimeForBenchmark } from "@/utils/performanceUtils";
export default defineComponent({
  name: "GarbageCollectionTest",
  components: {
    Page,
    IonButton
  },
  methods: {
    generateRandomData: function (size) {
      if (size < 1) {
        return {};
      }
      var chars = "abcdefghijklmnopqrstuvwxyz".split("");
      var len = chars.length;
      var random_data = {};

      for (let i = size; i > 0; i--) {
        let key = chars[(Math.random() * len) | 0] + i;
        let value = this.generateRandomData(i / 1000);
        random_data[key] = value;
      }
      return random_data;
    },
    startTest: async function () {
      this.testDone = false;
      this.startMem = (await Device.getInfo()).memUsed / 1048576;
      // eslint-disable-next-line no-unused-vars
      let randomData = this.generateRandomData(100000);
      this.dataSize = randomData.length;
      this.processMem = (await Device.getInfo()).memUsed / 1048576;

      this.timeElapsed = measureExecutionTimeForBenchmark(() => {
        for (let i = 0; i < randomData.length; i++) {
          randomData[i] = undefined;
        }
      });
      this.endMem = (await Device.getInfo()).memUsed / 1048576;
      this.testDone = true;
    },
  },
  created() {},
  data: () => ({
    startMem: 0,
    endMem: 0,
    timeElapsed: 0,
    processMem: 0,
    testDone: false,
  }),
});
</script>

;
