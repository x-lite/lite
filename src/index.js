/*
 * @Module: 框架入口
 * @Author: chaoshuai
 * @Date: 2018-05-17 
 */

import { Alert } from 'components/alert'
import { Button } from 'components/button'
import { Input } from 'components/input'
import { Modal } from 'components/modal'
import { Progress } from 'components/progress'
import { Tabs, Tab } from 'components/tabs'

let lite = [
    Button,
    Alert,
    Input,
    Modal,
    Progress,
    Tabs,
    Tab
]
    

function install (Vue) {
    if (install.installed) return

    // 注册全局组件
    lite.map( component => Vue.component(component.name, component))

}

// 全局模式下自动安装
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    ...lite
}
