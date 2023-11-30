
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
import { watch } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import services from './services';
import { setCurrentUser } from './store/user';
import ModalFactory from './components/ModalFactory/index.vue'

export default {
  components: {
    ModalFactory
  },
  setup () {
    const router = useRouter()
    const route = useRoute()

    watch(() => route.path, async () => {
      if (route.meta.hasAuth) {
        const token = window.localStorage.getItem('token')
        if (!token) {
          router.push({ name: 'Home' })
          return
        }
        const { data } = await services.users.getMe()
        setCurrentUser(data)
      }
    })
  }
}
</script>

