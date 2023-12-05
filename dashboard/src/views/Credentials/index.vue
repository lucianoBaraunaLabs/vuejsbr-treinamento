<template>
   <div class="flex justify-center w-full h-28 bg-brand-main">
      <header-logged />
  </div>

  <div class="flex flex-col items-center justify-center h-64 bg-brand-gray">
    <h1 class="text-4xl font-black text-center text-gray-800">
      Credenciais
    </h1>
    <p class="text-lg text-center text-gray-800 font-regular">
      Guia de instalação e geração de suas credenciais
    </p>
  </div>

  <div class="flex justify-center w-full h-full">
    <div class="flex flex-col w-4/5 max-w-6xl py-10">
      <h1 class="text-3xl font-black text-brand-darkgray">
        Instalação e configuração
      </h1>
      <p class="mt-10 text-lg text-gray-800 font-regular">
        Este aqui é a sua chave de api
      </p>

      <content-loader
        v-if="store.Global.isLoading || state.isLoading"
        class="rouded"
        width="600px"
        height="50px"
      />
      <div class="flex py-3 pl-5 pr-20 mt-2 rounded items-center bg-brand-gray">
        <span>{{ store.User.currentUser.apiKey }}</span>
        <div class="flex ml-20 mr-5">
          <icon name="copy" :color="brandColors" size="24" class="cursor-pointer" />
          <icon name="loading" :color="brandColors" size="24" class="cursor-pointer ml-3" />
        </div>
      </div>

      <p class="mt-5 text-lg text-gray-800 font-regular">
        Coloque o script abaixo no seu site para começar a receber feedbacks
      </p>

      <content-loader
        v-if="store.Global.isLoading || state.isLoading"
        class="rouded"
        width="600px"
        height="50px"
      />

      <div class="py-3 pl-5 pr-20 mt-2 rounded bg-brand-gray w-full lg:w-2/3 overflow-x-scroll">
        <pre>
          &lt;script
            defer
            async
            onload="init('{{ store.User.currentUser.apiKey }}')"
            src="https://lucianobarauna-feedbacker-widget.netlify.app/init.js"
          &gt;&lt;/script&gt;
        </pre>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderLogged from '../../components/HeaderLogged/index.vue'
import Icon from '../../components/Icon/index.vue'
import ContentLoader from '../../components/ContentLoader/index.vue'
import useStore from '../../hooks/useStore'
import { reactive } from 'vue'


export default {
  components: { HeaderLogged, Icon, ContentLoader },
  setup () {
    const store = useStore()
    const state = reactive({
      isLoading: false
    })

    return { store, state, brandColors: '#F9F9F9' }
  }
}
</script>
