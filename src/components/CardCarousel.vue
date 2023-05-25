<script setup>
import { computed, ref } from "vue";

import MusicCard from "@/components/MusicCard.vue";

import cover1 from "@/assets/covers/cover-example.png";
import cover2 from "@/assets/covers/cover-example-2.png";
import cover3 from "@/assets/covers/cover-example-3.png";
import cover4 from "@/assets/covers/cover-example-4.png";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  items: {
    type: Object,
    default: [],
  },
});

const carousel = ref(null);

const cover = computed(() => {
  return {
    cover1,
    cover2,
    cover3,
    cover4,
  };
});

const manageScroll = (e) => {
  if (e.deltaX != 0) {
    e.preventDefault();
    carousel.value.scrollLeft += e.deltaX;
  }
};
</script>

<template>
  <div class="w-full mb-4">
    <div class="flex justify-between items-end w-full mb-4">
      <h1 class="text-white text-3xl">{{ title }}</h1>

      <a href="" class="text-white text-lg"> Ver todos </a>
    </div>

    <div
      ref="carousel"
      class="flex flex-row w-full overflow-x-scroll scroll-event"
      @mousewheel="manageScroll($event)"
    >
      <music-card
        v-for="item of items"
        :key="item.id"
        :title="item.title"
        :day="item.day"
        :month="item.month"
        :distance="item.distance"
        :image="cover[item.image]"
        :color="item.color"
        :invert="item.invert"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
