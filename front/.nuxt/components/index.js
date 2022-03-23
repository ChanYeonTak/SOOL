export { default as IncBottomFooter } from '../..\\components\\inc\\BottomFooter.vue'
export { default as IncTopHeader } from '../..\\components\\inc\\TopHeader.vue'
export { default as IncTopLogo } from '../..\\components\\inc\\TopLogo.vue'
export { default as IncTopLogoMobile } from '../..\\components\\inc\\TopLogoMobile.vue'
export { default as IncTopNavi } from '../..\\components\\inc\\TopNavi.vue'
export { default as IncTopNaviMobile } from '../..\\components\\inc\\TopNaviMobile.vue'
export { default as IndexFeature } from '../..\\components\\index\\Feature.vue'
export { default as IndexMain } from '../..\\components\\index\\Main.vue'
export { default as IndexSchedule } from '../..\\components\\index\\Schedule.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
