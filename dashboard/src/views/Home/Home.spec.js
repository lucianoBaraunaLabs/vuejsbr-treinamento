import Home from './index.vue'
import { shallowMount } from '@vue/test-utils'
import { routes } from '../../router'
import { expect, it, describe } from 'vitest'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

describe('<Home />', () => {
  it('should render home correctly', async () => {
    router.push('/')
    await router.isReady()

    // shallowMount - monta somente a home e ignora os
    // componentes filhos
    const wrapper = shallowMount(Home, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
