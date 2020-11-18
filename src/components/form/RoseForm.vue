<template>
  <form>
      <slot></slot>
  </form>
</template>

<script>
export default {
    componentName: 'roseForm',
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
    data() {
        return {
            fields: []
        }
    },
    created() {
        this.$on('addFields', (item) => {
            this.fields.push(item);
        });
    },
    methods: {
        validate(cb) {
            const tasks = this.fields
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