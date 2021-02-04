import { mount } from '@vue/test-utils'
import Antagonist from '@/components/antagonists/Antagonist.vue'

describe('Antagonist', () => {
  test('renders an antagonist', () => {
    const wrapper = mount(Antagonist, {
      propsData: {
        content: {
          title: 'antagonist test'
        }
      }
    })
    expect(wrapper.find('h1').exists()).toBeTruthy()
    // eslint-disable-next-line no-console
    console.log('h1: ' + wrapper.find('h1')?.text())
  })
})
