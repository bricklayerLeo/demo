import Vue from 'vue'

function changeStr(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


//第一个参数的当前目录，第二个参数是否匹配子目录，第三次参数正则匹配.vue结尾的文件
const requireAll = require.context('./', false, /\.vue$/)

console.log('requireAll00000000000000', requireAll);


const install = (Vue) => {

    requireAll.keys().forEach(fileName => {

        let config = requireAll(fileName);

        let componentName = changeStr(
            fileName.replace(/^\.\//, '').replace(/\.\w+$/, '') //获取到的是./button.vue 此步去掉前面的额./和后面的.vue 只保留button当组件名称
        )

        console.log(componentName)
        Vue.component(componentName, config.default || config)

    });
}
export default {
    install
}