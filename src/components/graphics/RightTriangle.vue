// RightTriangle.vue
<template>
  <svg :width="width" :height="height" :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg">
    <g :transform="`translate(${-translateX} ${-translateY})`">
      <g :transform="`translate(${-groupTranslateX} ${groupTranslateY})`">
        <path
          :d="smallTrianglePath"
          :transform="`translate(${triangleTranslateX} ${triangleTranslateY}) rotate(90)`"
          :fill="primaryColor"
        />
        <path
          :d="largeTrianglePath"
          :transform="`translate(${largeTriangleTranslateX} ${largeTriangleTranslateY}) rotate(90)`"
          :fill="primaryColor"
          :style="{ opacity: opacity }"
        />
      </g>
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Props {
  width?: number | string
  height?: number | string
  primaryColor?: string
  opacity?: number
  translateX?: number
  translateY?: number
  groupTranslateX?: number
  groupTranslateY?: number
}

export default defineComponent({
  name: 'RightTriangle',

  props: {
    width: {
      type: [Number, String],
      default: 38.008,
    },
    height: {
      type: [Number, String],
      default: 46.907,
    },
    primaryColor: {
      type: String,
      default: '#0e77ff',
    },
    opacity: {
      type: Number,
      default: 0.1,
    },
    translateX: {
      type: Number,
      default: 392.992,
    },
    translateY: {
      type: Number,
      default: 2582.546,
    },
    groupTranslateX: {
      type: Number,
      default: 686,
    },
    groupTranslateY: {
      type: Number,
      default: 1081,
    },
  },

  setup(props) {
    const viewBox = '0 0 38.008 46.907'
    const smallTrianglePath = 'M841.9,407.237,853.775,388l11.871,19.237Z'
    const largeTrianglePath = 'M841.9,426.008,865.358,388l23.454,38.008Z'
    const triangleTranslateX = 1492.528
    const triangleTranslateY = 671.327
    const largeTriangleTranslateX = 1505
    const largeTriangleTranslateY = 659.643

    return {
      viewBox,
      smallTrianglePath,
      largeTrianglePath,
      triangleTranslateX,
      triangleTranslateY,
      largeTriangleTranslateX,
      largeTriangleTranslateY,
    }
  },
})
</script>
