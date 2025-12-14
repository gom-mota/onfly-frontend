// Packages
import type { Component } from 'vue'

export interface ITabs {
  [key: string]: {
    icon: string
    label: string
    disable?: boolean
    content?: Component
  }
}
