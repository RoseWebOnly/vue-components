<template>
  <div>
        <h1>rose表单插件</h1>
        <hr>
        <rose-form :model="model" :rules="rules" ref="loginForm">
            <rose-form-item label='用户名' prop="userName">
                <rose-input v-model="model.userName"></rose-input>
            </rose-form-item>
            <rose-form-item label='密码' prop="password">
                <rose-input type="password" v-model="model.password"></rose-input>
            </rose-form-item>
             <rose-form-item>
                <button @click='submitForm'>登录</button>
            </rose-form-item>
        </rose-form>
  </div>
</template>

<script>

import RoseInput from './RoseInput'
import RoseFormItem from './RoseFormItem'
import RoseForm from './RoseForm.vue'


export default {
    components: {
        RoseInput,
        RoseFormItem,
        RoseForm
    },
    data() {
        return {
            model: {
                userName: '',
                password: '',
            },
            rules: {
                userName: {required: true, message: '请输入用户名'},
                password: {required: true, message:'请输入密码'}
            }
        }
    },
    methods: {
        submitForm() {
            this.$refs['loginForm'].validate(valid => {
                if (valid) {
                    alert('提交成功');
                } else {
                    alert('失败');
                }
            })
        }
    }
}
</script>

<style>

</style>