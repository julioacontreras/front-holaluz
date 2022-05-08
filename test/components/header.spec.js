
import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils'
import Header from '@/components/headerComponent.vue'

describe('Header', () => {
  it('renders props.isVisibleLogout when passed', () => {
    const isVisibleLogout = true
    const wrapper = shallowMount(Header, {
      propsData: { isVisibleLogout }
    })
    expect(wrapper.componentVM.isVisibleLogout).toBe(isVisibleLogout)
  })

  it('renders default isVisibleLogout false', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.componentVM.isVisibleLogout).toBe(false)
  })
})
