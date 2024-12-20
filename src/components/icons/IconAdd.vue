<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    :class="className"
  >
    <g id="e-add" :opacity="opacity">
      <path
        id="Path_21"
        data-name="Path 21"
        d="M22,10H14V2a2,2,0,1,0-4,0v8H2a2,2,0,0,0,0,4h8v8a2,2,0,1,0,4,0V14h8a2,2,0,1,0,0-4Z"
        :fill="color"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'AddIcon',
  props: {
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: String,
      default: '#fff',
    },
    opacity: {
      type: [Number, String],
      default: 0.7,
    },
    className: {
      type: String,
      default: '',
    },
  },
}
</script>
