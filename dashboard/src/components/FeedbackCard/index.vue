<template>
  <div
    @click="handleToggle"
    class="flex flex-col px-8 py-6 rounded cursor-pointer bg-brand-gray">
    <div class="flex items-center justify-between w-full mb-8">
      <badge :type="feedback.type" />
      <span class="font-regular text-brand-graydark">
        {{ feedback.createAt }}
      </span>
    </div>

  </div>
</template>
<script>
import { reactive } from "vue";
import Badge from './Badge.vue'
export default {
  name: "FeedbackCard",
   components: {
    Badge,
  },
  props: {
    isOpened: { type: Boolean, default: false },
    feedback: { type: Object, required: true }
  },
  setup (props) {
    const state = reactive({
      isOpen: props.isOpened,
      isClosing: !props.isOpened
    })

    function handleToggle () {

    }

    return {
      state,
      handleToggle
    }
  }

}
</script>
<style>

</style>