import Vue from "vue"
import {Button, Col, Form, FormItem, Menu, MenuItem, Popover, Row, Submenu, Table, TableColumn, Tag} from "element-ui"
import lang from "element-ui/lib/locale/lang/en"
import locale from "element-ui/lib/locale"
import "element-ui/lib/theme-chalk/index.css"
import "./utils/less/custom.less"

import App from "./App.vue"
import router from "./router"
import "whatwg-fetch"

locale.use(lang)

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Popover)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Tag)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
