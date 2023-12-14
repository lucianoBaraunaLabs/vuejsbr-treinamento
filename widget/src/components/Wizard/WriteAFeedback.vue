<template>
    <div class="felx flex-col items-center justify-center w-full my-5">
      <textarea
        v-model="state.feedback"
        class="w-full rounded-lg border-2 border-gray-300 border-solid h-24 p-2 resize-none focus:outline-none">
    </textarea>
    <button
        :disabled="submitButtonIsDisabled"
        :class="{
          'opacity-50': state.isLoading,
          'opacity-50 bg-gray-100 text-gray-500': submitButtonIsDisabled,
          'bg-brand-main text-white': !submitButtonIsDisabled
        }"
        @click="submitAFeedback"
        class="
        rounded-lg font-black mt-3 flex flex-col
        justify-center items-center py-2 w-full cursor-pointer
        focus:outline-none transition-all duration-200
      ">
       <icon v-if="state.isLoading" name="loading" class="animate-spin" color="white" />
        <template v-else>
          Enviar feedback
        </template>
    </button>
    </div>
</template>
<script lang="ts">
import useNavigation from '@/hooks/navigation';
import useStore from '@/hooks/store';
import services from '@/services';
import { defineComponent, reactive, computed } from 'vue';
import type { ComputedRef, SetupContext } from 'vue';

type State = {
  feedback: string;
  isLoading: boolean;
  hasError: Error | null;
}

interface SetupReturn {
  state: State,
  submitButtonIsDisabled: ComputedRef<boolean>
}

export default defineComponent({
  setup(_, { emit }: SetupContext): SetupReturn {
    const store = useStore()
    const { setErrorState } = useNavigation()
    const state = reactive<State>({
      feedback: '',
      isLoading: false,
      hasError: null
    })

    const submitButtonIsDisabled = computed<boolean>(() => {
      return !state.feedback.length
    })

     function handleError(error: Error) {
      state.hasError = error
      state.isLoading = false
      setErrorState()
     }

    async function submitAFeedback(): Promise<void>{
      try {
        const response = await services.feedbacks.create({

        })
      } catch (error) {

      }
    }

    return {
      state,
      submitButtonIsDisabled

     }

  }
})
</script>