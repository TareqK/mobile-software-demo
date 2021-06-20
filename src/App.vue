<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>
<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  created(){
    defineCustomElements(window);
  }
});
</script>
