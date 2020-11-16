<template>
  <div class="box" v-if="isShow">
       <h2>{{title}}</h2>
       <p class="box_content">{{message}}</p>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        message: {
            type: String,
            default: ''
        },
        duration: {
            type: Number,
            default: 1000
        },
    },
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        show() {
            this.isShow = true;
            setTimeout(this.hide, this.duration);
        },
        hide() {
            this.isShow = false;
            this.remove();
        }
    }

}
</script>

<style>
    .box{
        position:fixed;width:100%;top:16px;left:0;text-align:center;pointer-events:none;background-color:#fff;border:grey3pxsolid;box-sizing:border-box;}
        .box-content{width:200px;margin:10pxauto;font-size:14px;padding:8px16px;background:#fff;border-radius:3px;margin-bottom:8px;}
</style>