<template>
  <svg
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 45.691 45.691"
    :class="className"
  >
    <g id="metrics" transform="translate(1 1)">
      <circle
        id="Ellipse_1"
        data-name="Ellipse 1"
        cx="8"
        cy="8"
        r="8"
        transform="translate(0.5 27.191)"
        fill="none"
        :stroke="strokeColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke-width="strokeWidth"
      />
      <path
        id="Path_13"
        data-name="Path 13"
        d="M2.5,12.143V.5A34.929,34.929,0,0,1,37.429,35.429H25.786"
        transform="translate(5.762)"
        fill="none"
        :stroke="strokeColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke-width="strokeWidth"
      />
      <line
        id="Line_6"
        data-name="Line 6"
        y1="10.036"
        x2="10.036"
        transform="translate(14.75 18.905)"
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
  name: 'MetricsIcon',
  props: {
    width: {
      type: [Number, String],
      default: 45.691,
    },
    height: {
      type: [Number, String],
      default: 45.691,
    },
    strokeColor: {
      type: String,
      default: '#1f64ff',
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
