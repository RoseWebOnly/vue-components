import Vue from 'vue'

function create (Component, props) {
    const vm = new Vue({
        // render函数将传入的组件配置对象转换为虚拟dom
        render(h) {
            return h(Component, {props})
        }
    }).$mount();
    document.body.appendChild(vm.$el);

    // 给组件实例添加销毁时间
    const comp = vm.$children[0];
    console.log(comp);
    comp.remove = () => {
        document.body.removeChild(vm.$el);
        vm.$destroy();
    }
    return comp;
}
export default create;