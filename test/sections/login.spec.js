
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils'

import Login from '@/components/sections/loginSection.vue'

describe('Login', () => {
  it('Should be exist Login', () => {
    const wrapper = mount(Login)
    expect(wrapper.exists()).toBe(true)
  })

  it('Should be exist classes', () => {
    const wrapper = mount(Login)
    expect(wrapper.html()).toContain('class="container')
    expect(wrapper.html()).toContain('class="panel')
    expect(wrapper.html().includes('shakeBox')).toBe(false)
  })

  it('Should be login', async () => {
    const wrapper = mount(Login)
    vi.spyOn(wrapper.componentVM, 'checkLogin').mockImplementation(() => true)
    await wrapper.componentVM.login('', '')
    expect(wrapper.componentVM.notFoundUser).toBe(true)
  })
  
})
