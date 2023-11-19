import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSpinner,
  faXmark,
  faUser,
  faAngleUp,
  faAngleDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
  faEye,
  faEyeSlash,
  faTrash,
  faSearchMinus,
  faSearchPlus,
  faRotate,
  faCheck,
  faMinus,
  faBoxArchive,
  faList,
  faCircleCheck,
  faXmarkCircle,
  faCircleInfo,
  faCircleExclamation
} from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'
import './style/main.scss'

library.add(
  faSpinner,
  faXmark,
  faUser,
  faAngleUp,
  faAngleDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
  faEye,
  faEyeSlash,
  faTrash,
  faRotate,
  faSearchMinus,
  faSearchPlus,
  faCheck,
  faMinus,
  faBoxArchive,
  faList,
  faCircleCheck,
  faXmarkCircle,
  faCircleInfo,
  faCircleExclamation
)

const app = createApp(App)

app.use(createPinia())

app.use(router)

app.component('fa', FontAwesomeIcon)

app.mount('#app')
