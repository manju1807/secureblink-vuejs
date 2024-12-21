<script setup lang="ts">
interface Props {
  width?: string | number
  height?: string | number
  primaryColor?: string
  secondaryColor?: string
  accentColor?: string
  circleColor?: string
  circleSize?: number
  showCircle?: boolean
  preserveAspectRatio?: string
}

withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100%',
  primaryColor: '#0e77ff',
  secondaryColor: '#fff',
  accentColor: '#209cd9',
  circleColor: '#0e77ff',
  circleSize: 42,
  showCircle: true,
  preserveAspectRatio: 'xMidYMid slice',
})
</script>
<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 1920 1080"
    :preserveAspectRatio="preserveAspectRatio"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <clipPath id="clip-path">
        <rect id="Rectangle_1328" :width="width" :height="height" fill="#fff" />
      </clipPath>
    </defs>
    <g id="Mask_Group_4" clip-path="url(#clip-path)">
      <g id="Group_35704">
        <path id="Path_37452" d="M0,0H1920V1186L0,1220Z" :fill="primaryColor" />
        <path
          id="Union_1"
          d="M169,5379.908v-388s750.557,400.837,1220.793-150.047l-5.749-3.057,12.441-59.863c-71.945-10.555-107.212,87.029-107.212,87.029l-10.8-5.741c19.307-203.017,144.227-167.064,144.227-167.064,48.861-228.8,179.848-252.351,211.585-254.676h0a0,0,0,0,0,0,0c1.007,1.761,2.17,3.9,3.419,6.417,18.372,36.916,55.764,153.7-96.242,311.407,0,0,99.66,83.46-57.85,212.992l-10.8-5.741s61.18-83.805,12.2-137.55l-42.673,43.789-6.478-3.443-.05.065,1.18.685c-6.524,17.592-101.56,257.321,157.392,334.8,267.386,80,502.607-192,502.607-192v370Z"
          transform="translate(-177 -4130.777)"
          :fill="secondaryColor"
          stroke="rgba(0,0,0,0)"
          stroke-width="1"
        />
        <g id="Group_35603" transform="translate(0 -9)">
          <rect
            id="Rectangle_444"
            width="100"
            height="3"
            transform="translate(831 118)"
            :fill="primaryColor"
          />
          <path
            id="Polygon_1"
            d="M7,0l7,12H0Z"
            transform="translate(888 130) rotate(-180)"
            :fill="primaryColor"
          />
        </g>
        <path
          id="Path_37458"
          d="M1003.519,333.21l-45.692,26.38V306.829Z"
          transform="translate(226.57 174.944)"
          :fill="accentColor"
        />
        <path
          id="Path_37485"
          d="M987.022,323.685,957.827,340.54V306.829Z"
          transform="matrix(0.391, 0.921, -0.921, 0.391, 938.017, -677.034)"
          :fill="accentColor"
        />
        <path
          id="Path_37483"
          d="M977.8,318.36l-19.972,11.531V306.829Z"
          transform="matrix(0.966, 0.259, -0.259, 0.966, 592.384, 406.825)"
          :fill="accentColor"
        />
        <path
          id="Path_37459"
          d="M1003.519,333.21V385.97l-45.692-26.38Z"
          transform="translate(676.481 51.944)"
          :fill="secondaryColor"
        />
        <path
          id="Path_37486"
          d="M987.8,333.21v34.614l-29.977-17.307Z"
          transform="matrix(0.616, 0.788, -0.788, 0.616, 779.152, -740.781)"
          :fill="secondaryColor"
        />
        <path
          id="Path_37484"
          d="M1003.519,333.21V385.97l-45.692-26.38Z"
          transform="translate(1205.364 -257.652) rotate(83)"
          fill="#68bae5"
        />
        <path
          id="Path_37482"
          d="M998.484,333.21v46.947l-40.657-23.474Z"
          transform="matrix(0.545, 0.839, -0.839, 0.545, 1436.156, -184.608)"
          fill="#a7d3ec"
        />
        <path
          id="Path_37501"
          d="M1240.1,333.21V659.145L957.827,496.177Z"
          transform="translate(2485.362 -447.953) rotate(97)"
          fill="#68bae5"
        />
        <path
          id="Path_37502"
          d="M1094.356,333.21V490.86L957.827,412.034Z"
          transform="translate(1079.659 1913.027) rotate(-130)"
          fill="#68bae5"
        />
        <path
          id="Path_37488"
          d="M1080.858,333.21V475.273L957.827,404.241Z"
          transform="translate(2062.882 -32.143) rotate(93)"
          fill="none"
          :stroke="accentColor"
          stroke-width="1"
        />
        <path
          id="Path_37489"
          d="M1035.41,333.21v89.585L957.827,378Z"
          transform="translate(2596.119 992.161) rotate(177)"
          fill="none"
          :stroke="accentColor"
          stroke-width="1"
        />
        <path
          id="Path_37490"
          d="M1035.41,333.21v89.585L957.827,378Z"
          transform="translate(2078.953 867.161) rotate(177)"
          fill="none"
          :stroke="accentColor"
          stroke-width="1"
        />
        <path
          id="Path_37467"
          d="M957.827,306.829V359.59l-45.692-26.38Z"
          transform="matrix(0.788, 0.616, -0.616, 0.788, 686.92, -496.051)"
          fill="#a7d3ec"
        />
        <path
          id="Path_37500"
          d="M1226.578,333.21V643.536L957.827,488.372Z"
          transform="translate(1953.848 -734.337) rotate(93)"
          fill="none"
          stroke="#a7d3ec"
          stroke-width="1"
        />
        <circle
          v-if="showCircle"
          id="Ellipse_223"
          :cx="1294"
          :cy="485"
          :r="circleSize"
          transform="translate(1294 485)"
          :fill="circleColor"
        />
      </g>
    </g>
  </svg>
</template>
