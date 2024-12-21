// IconUI.vue
<template>
  <svg :width="width" :height="height" :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg">
    <g :transform="`translate(${-translateX} ${-translateY})`">
      <g :transform="`translate(${translateX} ${translateY})`">
        <path
          v-for="(path, index) in paths"
          :key="index"
          :d="path.d"
          :transform="path.transform || ''"
          :fill="color"
        />
      </g>
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

interface PathData {
  d: string
  transform?: string
}

interface Props {
  width?: number | string
  height?: number | string
  color?: string
  size?: number
  translateX?: number
  translateY?: number
}

export default defineComponent({
  name: 'IconUI',

  props: {
    width: {
      type: [Number, String],
      default: 97,
    },
    height: {
      type: [Number, String],
      default: 97,
    },
    color: {
      type: String,
      default: '#0e77ff',
    },
    size: {
      type: Number,
      default: 97,
    },
    translateX: {
      type: Number,
      default: 843,
    },
    translateY: {
      type: Number,
      default: 2230,
    },
  },

  setup(props) {
    const viewBox = '0 0 97 97'

    const paths: PathData[] = [
      {
        d: 'M94.979,93.416a2.02,2.02,0,0,0-2.021,2.021v41.6L70.729,159.267V145.958a6.07,6.07,0,0,1,6.063-6.062h6.063a2.021,2.021,0,1,0,0-4.042H76.792a10.116,10.116,0,0,0-10.1,10.1v16.167H10.1a6.07,6.07,0,0,1-6.062-6.062V95.447c.012-1.015.358-6.073,6.062-6.073H26.271a2.021,2.021,0,0,0,0-4.042H10.1c-7.992,0-10.1,6.61-10.1,10.1v60.625a10.116,10.116,0,0,0,10.1,10.1h58.6a2,2,0,0,0,.778-.158,2.025,2.025,0,0,0,.653-.436L96.408,139.3A2.016,2.016,0,0,0,97,137.875V95.437A2.02,2.02,0,0,0,94.979,93.416Z',
        transform: 'translate(0 -69.166)',
      },
      {
        d: 'M364.688,46.709h12.1a1.857,1.857,0,0,1,2.045,2.021V64.872a1.856,1.856,0,0,1-2.021,2.045h-7.247l2.613-2.613a2.021,2.021,0,0,0-2.858-2.858l-6.06,6.06a2.026,2.026,0,0,0,0,2.861l6.06,6.061a2.021,2.021,0,0,0,2.858-2.858l-2.613-2.613h7.247a5.892,5.892,0,0,0,6.063-6.062V48.729a5.892,5.892,0,0,0-6.062-6.062H364.688a2.021,2.021,0,0,0,0,4.042Z',
        transform: 'translate(-293.959 -34.584)',
      },
      // ... rest of the paths
      {
        d: 'M257.458,394.667h-10.1a2.021,2.021,0,1,0,0,4.042h10.1a2.021,2.021,0,1,0,0-4.042Z',
        transform: 'translate(-198.854 -319.896)',
      },
    ]

    const scaledWidth = computed(() => {
      return typeof props.width === 'number' ? props.width : parseInt(props.width as string)
    })

    const scaledHeight = computed(() => {
      return typeof props.height === 'number' ? props.height : parseInt(props.height as string)
    })

    return {
      viewBox,
      paths,
      scaledWidth,
      scaledHeight,
    }
  },
})
</script>
