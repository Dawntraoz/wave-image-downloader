import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import AppLogo from '../AppLogo.vue'

describe('app logo component', () => {
  it('should render', () => {
    const wrapper = mount(AppLogo)

    expect(wrapper.html()).toBeTruthy()
  })
})
