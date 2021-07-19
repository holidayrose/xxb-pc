import Vue from 'vue'
// import Antd from 'ant-design-vue/lib'
import { Row, Col, Button, Anchor, Layout, Input, Card, Breadcrumb, Form, Progress, Icon, message, Pagination, Menu, Table, Checkbox, Affix } from 'ant-design-vue'
export default () => {
  Vue.use(Row)
  Vue.use(Col)
  Vue.use(Button)
  Vue.use(Anchor)
  Vue.use(Layout)
  Vue.use(Input)
  Vue.use(Card)
  Vue.use(Breadcrumb)
  Vue.use(Form)
  Vue.use(Progress)
  Vue.use(Icon)
  Vue.use(Pagination)
  Vue.use(Menu)
  Vue.use(Table)
  Vue.use(Checkbox)
  Vue.use(Affix)
  Vue.prototype.$message = message
}
