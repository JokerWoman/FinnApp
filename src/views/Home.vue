<script setup>
import { ref } from "vue";

import SearchBar from "@/components/SearchBar.vue";
import EventScroll from "@/components/EventScroll.vue";
import CardCarousel from "@/components/CardCarousel.vue";

const items = ref([
  [
    {
      id: 1,
      title: "Sound Waves",
      day: "01",
      month: "ABRIL",
      distance: "500 m",
      image: "cover1",
      color: "#4a044e",
      invert: false,
    },
    {
      id: 2,
      title: "Plano B",
      day: "03",
      month: "ABRIL",
      distance: "500 m",
      image: "cover2",
      color: "#2e1065",
      invert: true,
    },
  ],
  [
    {
      id: 3,
      title: "Dark Sessions",
      day: "02",
      month: "ABRIL",
      distance: "1 km",
      image: "cover3",
      color: "#14532d",
      invert: false,
    },
    {
      id: 4,
      title: "Plano B",
      day: "03",
      month: "ABRIL",
      distance: "500 m",
      image: "cover4",
      color: "#451a03",
      invert: true,
    },
  ],
]);
</script>

<style lang="scss" scoped></style>

<template>
  <div class="mt-6 mb-14 w-full">
    <h1 class="text-white font-['Novatica'] text-4xl font-medium">
      Vamos Sair?
    </h1>

    <h2 class="mt-4 text-white font-['Novatica'] text-md font-normal">
      Encontra novos eventos
    </h2>

    <search-bar className="px-7 py-9 h-[3em]" />

    <event-scroll />

    <card-carousel title="Esta Semana" :items="items[0]" />

    <card-carousel title="Brevemente" :items="items[1]" />

    <card-carousel title="Descobre" :items="items[1]" />
    <!-- <card-carousel title="Mejo de la semana" :items="items[0]" /> -->
  </div>
</template>

<style lang="scss"></style>
