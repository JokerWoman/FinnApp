<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>

<template>
  <div class="w-full z-10">
    <div class="relative flex justify-between items-center bg-transparent py-3">
      <button @click="goBack">
        <img
          src="../assets/icons/arrow-left.png"
          alt=""
          style="height: 1.5em"
        />
      </button>

      <button class="rounded-full relative flex justify-center">
        <img src="../assets/icons/map.png" alt="" style="height: 1.5em" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
