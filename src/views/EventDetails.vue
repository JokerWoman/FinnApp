<script setup>
import CoverCard from "@/components/CoverCard.vue";

import BottomNavBar from "@/components/BottomNavBar.vue";
</script>

<template>
  <div class="relative w-full pb-36 oveflow-scroll">
    <div class="w-screen h-full absolute overflow-hidden">
      <div class="w-full h-full relative">
        <div class="glow sticky top-0 z-0"></div>
      </div>
    </div>
    <cover-card class="z-10" />

    <div class="flex items-center justify-between px-6 mt-8 w-100 z-10">
      <div class="flex items center">
        <img
          src="../assets/covers/icon-org.png"
          alt=""
          class="w-[4.5em] h-[4.5em]"
          style="max-width: none"
        />

        <div class="ml-4">
          <h1 class="text-white text-3xl">Lustre</h1>
          <h2 class="text-white text-md">Organizador</h2>
        </div>
      </div>

      <div>
        <button
          class="bg-[#00FF296E] text-white text-sm px-8 py-2 rounded-[5px] shadow-button"
        >
          Interesado
        </button>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-y-8 gap-x-6 mt-8 px-12">
      <div class="flex items-center">
        <img
          src="../assets/icons/calendar.png"
          alt=""
          style="max-width: none"
          class="w-[1.5em] h-[1.5em] mr-5"
        />
        <span class="text-white text-sm font-bold">SEX 14/04</span>
      </div>
      <div class="flex items-center">
        <img
          src="../assets/icons/clock.png"
          alt=""
          style="max-width: none"
          class="w-[1.5em] h-[1.5em] mr-5"
        />
        <span class="text-white text-sm font-bold"> 23:00 - 8:00 </span>
      </div>
      <div class="flex items-center">
        <img
          src="../assets/icons/marker.png"
          alt=""
          style="max-width: none"
          class="w-[1.5em] h-[1.5em] mr-5"
        />
        <span class="text-white text-sm font-bold"> Rua Estacao, 12 </span>
      </div>
      <div class="flex items-center">
        <img
          src="../assets/icons/p-icon.png"
          alt=""
          style="max-width: none"
          class="w-[1.5em] h-[1.5em] mr-5"
        />
        <span class="text-white text-sm font-bold"> Livre </span>
      </div>
    </div>

    <div class="w-full px-12 mt-8">
      <p class="text-white text-justify text-lg">
        A discoteca Lustre é uma casa noturna tradicional da cidade, que oferece
        uma atmosfera animada e descontraída para os frequentadores locais.
      </p>
    </div>

    <div class="w-full px-12 mt-8 relative z-10">
      <img
        src="../assets/covers/maps.png"
        style="max-width: none"
        class="w-full"
        alt=""
      />
    </div>

    <bottom-nav-bar />
  </div>
</template>

<style lang="scss" scoped>
.glow {
  position: absolute;
  width: 362px;
  height: 362px;
  left: 228px;
  top: 700px;

  background: rgba(41, 204, 0, 0.65);
  filter: blur(225px);
}
</style>
