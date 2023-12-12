<template>
  <component :is="store.currentComponent" @select-feedback-type="handleSelectFeedbackType" @next="next" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SelectFeedbackType from './SelectFeedbackType.vue'
import WriteAFeedback from './WriteAFeedback.vue'
import Success from './Success.vue'
// import ErrorState from './Error.vue'
import useStore from '../../hooks/store'
import useNavigation from '../../hooks/navigation'
import type { Navigation } from '../../hooks/navigation'
import { setFeedbackType } from '../../store'
import type { StoreState } from '../../store'

interface SetupReturn {
  store: StoreState;
  next: Navigation['next'];
  handleSelectFeedbackType(type: string): void;
}

export default defineComponent({
  components: { SelectFeedbackType, WriteAFeedback, Success },
  setup(): SetupReturn {
    const store = useStore()
    const { next } = useNavigation()

    function handleSelectFeedbackType(type: string): void {
      setFeedbackType(type)
    }

    return {
      store,
      next,
      handleSelectFeedbackType
    }
  }
})
</script>