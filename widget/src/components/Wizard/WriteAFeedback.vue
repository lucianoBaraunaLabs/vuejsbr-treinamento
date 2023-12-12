<template>
  <h1>Write feedback</h1>
</template>
<script lang="ts">
import useNavigation from '@/hooks/navigation';
import useStore from '@/hooks/store';
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

    return {
      state,
      submitButtonIsDisabled

     }

  }
})
</script>