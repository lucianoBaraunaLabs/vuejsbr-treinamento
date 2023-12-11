import Store from '../store'
import type { StoreState } from '../store'

export default function useStore ():StoreState {
  return Store
}