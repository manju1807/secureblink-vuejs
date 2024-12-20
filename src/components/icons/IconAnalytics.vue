<template>
  <svg
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    :class="className"
  >
    <g transform="translate(-4 -4)">
      <line
        id="Line_1"
        data-name="Line 1"
        y1="26"
        transform="translate(15 16)"
        fill="none"
        :stroke="strokeColor"
        stroke-linecap="square"
        :stroke-width="strokeWidth"
      />
      <line
        id="Line_2"
        data-name="Line 2"
        y1="16"
        transform="translate(24 26)"
        fill="none"
        :stroke="strokeColor"
        stroke-linecap="square"
        :stroke-width="strokeWidth"
      />
      <line
        id="Line_3"
        data-name="Line 3"
        y1="26"
        transform="translate(33 16)"
        fill="none"
        :stroke="strokeColor"
        stroke-linecap="square"
        :stroke-width="strokeWidth"
      />
      <line
        id="Line_4"
        data-name="Line 4"
        y1="16"
        transform="translate(42 26)"
        fill="none"
        :stroke="strokeColor"
        stroke-linecap="square"
        :stroke-width="strokeWidth"
      />
      <line
        id="Line_5"
        data-name="Line 5"
        y1="36"
        transform="translate(6 6)"
        fill="none"
        :stroke="strokeColor"
        stroke-linecap="square"
        :stroke-width="strokeWidth"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'AnalyticsIcon',
  props: {
    width: {
      type: [Number, String],
      default: 40,
    },
    height: {
      type: [Number, String],
      default: 40,
    },
    strokeColor: {
      type: String,
      default: '#b5bad0',
    },
    strokeWidth: {
      type: [Number, String],
      default: 4,
    },
    className: {
      type: String,
      default: '',
    },
  },
}
</script>
