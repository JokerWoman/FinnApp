<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import discotecas from "@/assets/covers/discoteca.png";
import bares from "@/assets/covers/bares.png";
import raves from "@/assets/covers/raves.png";
import festival from "@/assets/covers/festival.png";
import rock from "@/assets/covers/rock.png";

const router = useRouter();
const carousel = ref(null);

const eventTypes = ref([
  {
    name: "Discotecas",
    url: discotecas,
    path: "/",
  },
  {
    name: "Bares",
    url: bares,
    path: "/",
  },
  {
    name: "Raves",
    url: raves,
    path: "/raves",
  },
  {
    name: "Festival",
    url: festival,
    path: "/",
  },
  {
    name: "Rock",
    url: rock,
    path: "/",
  },
]);

const manageScroll = (e) => {
  if (e.deltaX != 0) {
    e.preventDefault();
    carousel.value.scrollLeft += e.deltaX;
  }
};

const goTo = (val) => {
  router.push(val);
};
</script>

<template>
  <div class="w-full my-10">
    <div
      ref="carousel"
      class="flex w-full overflow-x-scroll scroll-envent"
      @mousewheel="manageScroll($event)"
    >
      <button
        class="flex flex-col items-center mr-6"
        v-for="(event, index) in eventTypes"
        :key="index"
        @click="goTo(event.path)"
      >
        <img
          :src="event.url"
          :alt="event.name"
          style="width: 4em; height: 4em"
        />
        <p class="text-white font-['Euclid']">{{ event.name }}</p>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
button {
  img {
    max-width: none !important;
  }
}
</style>
