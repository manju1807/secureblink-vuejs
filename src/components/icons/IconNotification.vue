<template>
  <svg
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 46.364 37.676"
    :class="className"
  >
    <g id="sound-wave" transform="translate(1.512)">
      <path
        id="Path_14"
        data-name="Path 14"
        d="M.5,28.47,8.206,13.059,19.764,36.176,31.323,1.5,42.882,28.47"
        fill="none"
        :stroke="strokeColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke-width="strokeWidth"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'SoundWaveIcon',
  props: {
    width: {
      type: [Number, String],
      default: 46.364,
    },
    height: {
      type: [Number, String],
      default: 37.676,
    },
    strokeColor: {
      type: String,
      default: '#b5bad0',
    },
    strokeWidth: {
      type: [Number, String],
      default: 3,
    },
    className: {
      type: String,
      default: '',
    },
  },
}
</script>
