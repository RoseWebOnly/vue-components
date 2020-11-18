import Vue from 'vue'

function create (Component, props) {
    // 1.vue.extend
    const componentCstr = Vue.extend(Component);
    const comp = new componentCstr({propsData: props});
    comp.$mount();
    document.body.appendChild(comp.$el);
    comp.remove = () => {
        document.body.removeChild(comp.$el);
        comp.$destroy();
    }
    // 2.render
    //  const vm = new Vue({
    //     // render函数将传入的组件配置对象转换为虚拟dom
    //     render(h) {
    //         return h(Component, {props})
    //     }
    // }).$mount();
    // document.body.appendChild(vm.$el);
    // // 给组件实例添加销毁时间
    // const comp = vm.$children[0];
    // comp.remove = () => {
    //     document.body.removeChild(vm.$el);
    //     vm.$destroy();
    // }
    return comp;
}
export default create;