<template>
  <svg
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40.469 40.469"
    :class="className"
  >
    <g id="logout" transform="translate(1 1)">
      <path
        id="Path_15"
        data-name="Path 15"
        d="M8.5,3,18.719,13.219,8.5,23.437"
        transform="translate(19.25 6.016)"
        fill="none"
        :stroke="strokeColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke-width="strokeWidth"
      />
      <line
        id="Line_7"
        data-name="Line 7"
        x1="27.25"
        transform="translate(10.719 19.234)"
        fill="none"
        :stroke="strokeColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke-width="strokeWidth"
      />
      <path
        id="Path_16"
        data-name="Path 16"
        d="M17.531,37.969H3.906A3.406,3.406,0,0,1,.5,34.562V3.906A3.406,3.406,0,0,1,3.906.5H17.531"
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
  name: 'LogoutIcon',
  props: {
    width: {
      type: [Number, String],
      default: 40.469,
    },
    height: {
      type: [Number, String],
      default: 40.469,
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
