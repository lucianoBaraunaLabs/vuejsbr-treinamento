import useStore from "./store";
import { setCurrentComponent, setFeedbackType } from "../store";

export interface Navigation {
  next: () => void
  back: () => void
}

export default function useNavigation(): Navigation {
  const store = useStore()

  function next() {
    if(store.currentComponent === 'SelectFeedbackType') {
      setCurrentComponent('WriteAFeedback')
    }
  }

  function back() {
    if(store.currentComponent === 'WriteAFeedback') {
      setCurrentComponent('SelectFeedbackType')
      setFeedbackType('')
    }
  }

  return { next, back }
}