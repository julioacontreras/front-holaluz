
import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils'
import Header from '@/components/header.vue'

describe('Header', () => {
  it('renders props.isVisibleLogout when passed', () => {
    const isVisibleLogout = true
    const wrapper = shallowMount(Header, {
      propsData: { isVisibleLogout }
    })
    expect(wrapper.props.isVisibleLogout).toBe(isVisibleLogout)
  })

  it('renders default isVisibleLogout false', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.props.isVisibleLogout).toBe(false)
  })
})