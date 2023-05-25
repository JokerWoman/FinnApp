<script setup>
import { computed, ref, toRefs } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  day: {
    type: String,
    default: "",
  },
  month: {
    type: String,
    default: "",
  },
  distance: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "white",
  },
  invert: {
    type: Boolean,
    default: false,
  },
});

const { title } = toRefs(props);
const { day } = toRefs(props);
const { month } = toRefs(props);
const { distance } = toRefs(props);
const { image } = toRefs(props);
const { color } = toRefs(props);
</script>

<template>
  <div class="relative rounded-[10px] mr-8 w-[12rem] h-[8rem]">
    <img class="w-[12rem] h-[8rem] rounded-[10px]" :src="image" alt="" />

    <div class="w-full h-full absolute top-0 left-0 z-10 cover"></div>

    <div class="absolute bottom-0 left-0 px-3 flex items-center w-full z-20">
      <div class="flex flex-col items-center rounded-[10px] px-2 py-1 dateBg">
        <h1 class="text-white">{{ day }}</h1>
        <h2 class="text-white">{{ month }}</h2>
      </div>

      <div class="flex flex-col ml-2">
        <h1 class="text-white">{{ title }}</h1>
        <div class="flex items-center">
          <img
            src="../assets/icons/marker.png"
            alt=""
            style="width: 1em; height: 1em"
          />
          <h2 class="text-white">{{ distance }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  max-width: none;
  object-fit: cover;
  object-position: center;
}
.cover {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.72) 100%
  );
}
.dateBg {
  background: v-bind(color);
}
</style>
