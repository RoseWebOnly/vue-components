<template>
  <div>
      <input :value="value" @input="onInput" v-bind="$attrs">
  </div>
</template>

<script>
import emitter from '@/mixins/emitter'

export default {
    inheritAttrs: false,
    mixins: [emitter],
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    methods: {
        onInput(e) {
            this.$emit('input', e.target.value);
            this.dispatch('formItem', 'validate');
        }
    }
}
</script>

<style>

</style>