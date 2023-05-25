<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goTo = (val) => {
  router.push(val);
};
</script>

<template>
  <div class="w-full px-4 py-4 relative">
    <div
      class="absolute top-0 left-0 w-full h-full bg-[#414141] opacity-60 z-0 rounded-[16px]"
    ></div>

    <div class="relative z-30">
      <div class="h-20 w-full px-1 py-2 mb-3">
        <img
          src="../assets/covers/cover-example-3.png"
          alt=""
          class="h-20 w-full rounded-[10px]"
        />
      </div>

      <div class="grid grid-cols-2 justify-between items-end">
        <h1 class="text-2xl text-white mb-3" @click="goTo('/event-details')">
          Dark Sessions
        </h1>

        <div class="flex mb-3 items-center justify-self-center">
          <img src="../assets/icons/clock.png" alt="" class="mr-3 h-[1rem]" />
          <h2 class="text-white text-sm">23:00 - 8:00</h2>
        </div>

        <div class="">
          <div class="flex items-center mb-3">
            <img
              src="../assets/icons/calendar.png"
              alt=""
              class="mr-1 h-[1em]"
            />
            <h2 class="text-xs text-white">SEX 14/04</h2>
          </div>
          <div class="flex items-center mb-3">
            <img src="../assets/icons/marker.png" alt="" class="mr-1 h-[1em]" />
            <h2 class="text-xs text-white">Rua Estacao, 12 Braga</h2>
          </div>
        </div>

        <div class="self-start justify-self-center">
          <button
            class="bg-[#00FF296E] text-white text-sm px-8 py-2 rounded-[5px] shadow-button"
          >
            Interesado
          </button>
        </div>
      </div>

      <div class="divider"></div>

      <div class="w-full mt-4 flex justify-between">
        <div class="flex items-center">
          <img src="../assets/covers/group.png" alt="" class="h-[1.5em] mr-3" />
          <span class="text-white text-sm font-bold">345 interesados</span>
        </div>

        <div class="flex items-center">
          <img src="../assets/icons/eye.png" alt="" class="w-[1em] mr-3" />
          <span class="text-white text-sm font-bold">1k vistos</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  object-fit: cover;
  object-position: center;
}

.divider {
  border: 1px solid #ffffff;
}

.shadow-button {
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.5);
}
</style>
