<template>
  <div>
      <input :value="value" @input="onInput" v-bind="$attrs">
  </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    methods: {
        onInput() {
            this.$parent.$emit('validate');
        }
    }
}
</script>

<style>

</style>