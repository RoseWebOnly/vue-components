<template>
  <div>
    <label>{{label}}</label>
    <slot></slot>
    <p v-if="error">{{error}}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'

export default {
    inject: ['form'],
    props: {   
        label: {
            type: String,
            default: ''
        },
        prop: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            error: ''
        }
    },
    methods: {
        validate() {
            // 获取当前验证规则
            const rules = this.form.rules[this.prop];
            // 当前校验值
            const value = this.form.model[this.prop];
            // 校验描述对象
            const desc = {[this.prop]: rules};
            // 创建校验器
            const schema = new Schema(desc);
            return schema.validate({[this.prop]: value}, errors => {
                if (errors) {
                    this.error = errors[0].message;
                } else {
                    this.error = '';
                }
            });
            
        }   
    },
    mounted() {
        this.$on('validate', () => {
            this.validate();
        })
    }

}
</script>

<style>

</style>