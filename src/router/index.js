import { createRouter, createWebHistory } from '@ionic/vue-router';
import StartTest from '../views/StartTest.vue'
import CpuTest from '../views/CpuTest.vue'
import AccelerometerTest from '../views/AccelerometerTest.vue'
import CameraTest from '../views/CameraTest.vue'
import EmbeddedDatabaseTest from '../views/EmbeddedDatabaseTest.vue'
import FileSystemTest from '../views/FileSystemTest.vue'
import GarbageCollectionTest from '../views/GarbageCollectionTest.vue'
import GeolocationTest from '../views/GeolocationTest.vue'
import ReRenderTest from '../views/ReRenderTest.vue'
import StartRenderTest from '../views/StartRenderTest.vue'
const routes = [
  {
    path: '/',
    redirect: '/start-test'
  },
  {
    path: '/start-test',
    name: 'StartTest',
    component: StartTest
  },{
    path: '/cpu-test',
    name: 'CpuTest',
    component: CpuTest
  },
  {
    path : '/accelerometer-test',
    name : 'AccelerometerTest',
    component: AccelerometerTest
  },
  {
    path : '/camera-test',
    name : 'CameraTest',
    component : CameraTest
  },{
    path : '/embedded-database-test',
    name : "EmbeddedDatabaseTest",
    component: EmbeddedDatabaseTest
  },{
    path : '/file-system-test',
    name : 'FileSystemTest',
    component: FileSystemTest
  },{
    path: '/garbage-collection-test',
    name : "GarbageCollectionTest",
    component : GarbageCollectionTest
  },
  {
    path : '/geolocation-test',
    name : 'GeolocationTest',
    component: GeolocationTest
  },{
    path : '/re-render-test',
    name : 'ReRenderTest',
    component: ReRenderTest
  },
  {
    path : '/start-render-test',
    name : 'StartRenderTest',
    component: StartRenderTest
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
