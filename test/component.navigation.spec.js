import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Navigation from '../src/components/navigation'

function setup() {
  const renderer = TestUtils.createRenderer()
  renderer.render(<Navigation />)
  const output = renderer.getRenderOutput()

  return {
    output,
    renderer
  }
}

describe("components", () => {
  describe("Navigation", () => {
    it("renders Navigation component", () => {
      const { output } = setup()

      expect(output.type).toBe('nav')
    })

    it("renders a bank title component", () => {
      const { output } = setup()

      var text = output.props.children

      while (typeof text.props != "undefined") {
        text = text.props.children
      }

      expect(text).toBe('Bank Accounts')
    })
  })
})
