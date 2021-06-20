<template>
  <page title="File System Test">
    <div>
      <ion-button @click="benchmark"> Start Test </ion-button>
    </div>
    <div>
      <ion-button v-if="testsDone == 3" router-link="/geolocation-test"> Next Test </ion-button>
    </div>
    <table>
      <tr>
        <td>1 File</td>
        <td>{{ test1 }} ms</td>
      </tr>
      <tr>
        <td>10 File</td>
        <td>{{ test2 }} ms</td>
      </tr>
      <tr>
        <td>100 File</td>
        <td>{{ test3 }} ms</td>
      </tr>
    </table>
  </page>
</template>
<script>
import { defineComponent } from "vue";
import Page from "@/views/Page.vue";
import { Filesystem, Directory, Encoding } from "@capacitor/filesystem";
import { IonButton } from "@ionic/vue";
import { measureExecutionTimeForBenchmarkAsync } from "@/utils/performanceUtils";
export default defineComponent({
  name: "FileSystemTest",
  components: {
    Page,
    IonButton,
  },
  created() {},
  data: () => ({
    test1: 0,
    test2: 0,
    test3: 0,
    testsDone: 0,
  }),
  methods: {
    benchmark: function () {
      this.testsDone = 0;
      measureExecutionTimeForBenchmarkAsync(async () => {
        await this.benchmarkFileCount(1);
      }).then((res) => {
        this.test1 = res;
        this.testsDone++;
      });

      measureExecutionTimeForBenchmarkAsync(async () => {
        await this.benchmarkFileCount(10);
      }).then((res) => {
        this.test2 = res;
        this.testsDone++;
      });

      measureExecutionTimeForBenchmarkAsync(async () => {
        await this.benchmarkFileCount(100);
      }).then((res) => {
        this.test3 = res;
        this.testsDone++;
      });
    },
    benchmarkFileCount: async function (fileNum) {
      for (let i = 0; i < fileNum; i++) {
        let fileName = this.generateRandomData(12);
        let fileContent = this.generateRandomData(150);
        await this.writeFile(fileName, fileContent);
        await this.deleteFile(fileName);
      }
    },
    writeFile: function (name, content) {
      return Filesystem.writeFile({
        path: name,
        data: content,
        directory: Directory.Data,
        encoding: Encoding.UTF8,
      });
    },
    deleteFile: function (name) {
      return Filesystem.deleteFile({
        path: name,
        directory: Directory.Data,
      });
    },
    readFile: function (name) {
      return Filesystem.readFile({
        path: name,
        directory: Directory.Data,
        encoding: Encoding.UTF8,
      });
    },
    generateRandomData: function (size) {
      var chars = "abcdefghijklmnopqrstuvwxyz".split("");
      var len = chars.length;
      var random_data = [];

      for (let i = size; i > 0; i--) {
        let val = chars[(Math.random() * len) | 0];
        random_data.push(val);
      }
      return random_data + "";
    },
  },
});
</script>
;