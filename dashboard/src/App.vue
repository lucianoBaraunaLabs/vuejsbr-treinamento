
<template>
  <!--
    O modal factory aqui pode ser usado em qualquer lugar
    por que estamos utilizando o teleport mas por conta de
    boas práticas estamos colocando ele aqui.
  -->
  <modal-factory />
  <RouterView />
</template>

<script>
import ModalFactory from './components/ModalFactory/index.vue'

export default {
  components: {
    ModalFactory
  }
}
</script>

