
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils'

import Hero from '@/components/heroComponent.vue'

describe('Hero', () => {
  it('Should be exist Hero', () => {
    const wrapper = mount(Hero)
    expect(wrapper.exists()).toBe(true)
  })

  it('Should be exist classes', () => {
    const wrapper = mount(Hero)
    expect(wrapper.html()).toContain('class="hero"')
    expect(wrapper.html()).toContain('class="hero-bg"')
    expect(wrapper.html()).toContain('class="hero-text"')
  })

  it('Should be exist video', () => {
    const wrapper = mount(Hero)
    expect(wrapper.html()).toContain('<video')
    expect(wrapper.html()).toContain('src="/video/hero.mp4"')
  })
  
})
