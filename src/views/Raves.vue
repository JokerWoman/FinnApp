<script setup>
import TopNavigationBar from "@/components/TopNavigationBar.vue";
import SearchBar from "@/components/SearchBar.vue";
import InfoCard from "@/components/InfoCard.vue";
import BottomNavBar from "../components/BottomNavBar.vue";
</script>

<template>
  <div class="relative w-full">
    <div class="glow absolute"></div>
    <top-navigation-bar class="px-8" />

    <div class="px-8">
      <h1 class="text-white font-['Novatica'] text-4xl font-medium mt-4">
        RAVES
      </h1>

      <search-bar placeholder="" className="h-[1em] py-7 px-6" class="" />

      <div class="mt-16">
        <info-card class="mb-8" />
        <info-card class="mb-8" />
        <info-card class="mb-8" />
        <info-card class="mb-8" />
        <info-card class="mb-8" />
      </div>
    </div>

    <bottom-nav-bar button-invert />
  </div>
</template>

<style lang="scss" scoped>
.glow {
  position: absolute;
  width: 464px;
  height: 464px;
  left: -195px;
  top: -450px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 255, 102, 0.75) 100%
  );
  filter: blur(100px);
}
</style>
