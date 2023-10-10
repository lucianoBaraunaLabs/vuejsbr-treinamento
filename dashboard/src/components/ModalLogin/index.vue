<template>
  <div class="flex justify-between" id="modal-login">
    <h1 class="text-4xl font-black text-gray-800">
      Entre na sua conta
    </h1>

    <button
      @click="close"
      class="text-4xl text-gray-600 focus:outline-none"
    >
      &times;
    </button>
  </div>
</template>
<script>
import { reactive } from 'vue';
import useModal from '../../hooks/useModal';

export default {
  name: 'ModalLogin',

  setup() {
    const modal = useModal()
    const state = reactive({
      hasErrors: false,
      isLoading: false,
      email: {
        value: '',
        errorMessage: ''
      },
      password: {
        value: '',
        errorMessage: ''
      }
    })

    return { state, close: modal.close }
  }
}
</script>