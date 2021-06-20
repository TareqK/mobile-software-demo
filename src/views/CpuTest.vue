<template>
  <page title="CPU Test">
    <div>
       <ion-button @click="startTest">Start Test</ion-button>
    </div>
    <ion-button v-if="testDone" router-link="/garbage-collection-test">Next Test</ion-button>
      <table v-if="testDone">
        <tr>
          <td>1000000 Operations</td>
          <td>{{results["1000000"]}} ms</td>
        </tr>
         <tr>
          <td>100000000 Operations</td>
          <td>{{results["100000000"]}} ms</td>
        </tr>
          <tr>
          <td>10000000000 Operations </td>
          <td>{{results["10000000000"]}} ms</td>
        </tr>
      </table>
  </page>
</template>
<script>
import { defineComponent } from "vue";
import Page from "@/views/Page.vue";
import {IonButton} from "@ionic/vue";
import {measureExecutionTimeForBenchmark} from "@/utils/performanceUtils"
export default defineComponent({
  name: "CpuTest",
  components: {
    Page,
    IonButton,
  },
  methods:{
    startTest:function(){
      this.testDone = false
      this.results["1000000"] = measureExecutionTimeForBenchmark(()=>{
        this.benchmark(1000000);
      })
      this.results["100000000"] = measureExecutionTimeForBenchmark(()=>{
        this.benchmark(100000000);
      })
      this.results["10000000000"] = measureExecutionTimeForBenchmark(()=>{
        this.benchmark(10000000000);
      })
      this.testDone = true
    },
    benchmark:function(number){
      let benchmark = 1;
      for(let i=1;i<number;i++){
        benchmark *= i;
        if(benchmark > 1000000){
          benchmark = 1;
        }
      }
    }
  },
  data:()=>({
    testDone:false,
    results:{
      "1000000":0,
      "100000000":0,
      "10000000000":0
    }
  })
});
</script>

;
