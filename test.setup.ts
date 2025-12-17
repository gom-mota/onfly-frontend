import { config } from '@vue/test-utils'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'

config.global.plugins = [[Quasar, { plugins: {} }], createPinia()]

config.global.stubs = {}

config.global.mocks = {
  $router: {
    push: vi.fn(),
    replace: vi.fn(),
    go: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
  },
  $route: {
    path: '/',
    params: {},
    query: {},
    meta: {},
  },
}
