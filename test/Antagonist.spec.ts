import { mount } from '@vue/test-utils'
import Antagonist from '@/components/Antagonist.vue'

describe('Antagonist', () => {
  test('renders an antagonist', async () => {
    const wrapper = mount(Antagonist, {propsData: {
      content: {
        title: 'antagonist test'
      }
    }})
    expect(wrapper.find('h1').exists()).toBeTruthy()
    console.log('h1: ' + wrapper.find('h1')?.text())
  })
})