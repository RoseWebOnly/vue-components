<template>
  <form>
      <slot></slot>
  </form>
</template>

<script>
export default {
    provide() {
        return {
            form: this
        }
    },
    props: {
        model: {
            type: Object,
            require: true
        },
        rules: {
            type: Object,
        }
    },
    methods: {
        validate(cb) {
            const tasks = this.$children
            .filter(item => item.prop)
            .map(item => item.validate());
            // 所有任务执行完就算验证通过
            Promise.all(tasks)
            .then(() => {cb(true)})
            .catch(() => {cb(false)})
        }
    }

}
</script>

<style>

</style>