import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faPlay, faPause, faComputerMouse, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faPlay, faPause, faComputerMouse, faArrowDown)

const app = createApp(App);

app.component('font-awesome', FontAwesomeIcon);
app.mount('#app');
