import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'
import App from './App.vue'
import Antd from 'ant-design-vue';
import VXETable from 'vxe-table';
import '@/assets/css/style.css';
import 'vxe-table/lib/style.css';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VXETable)
app.use(Antd)

router.isReady().then(() => app.mount('#app'))
