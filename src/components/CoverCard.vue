<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>

<template>
  <div class="relative w-full">
    <button class="absolute top-10 left-6 z-20 mt-10" @click="goBack">
      <img
        src="../assets/icons/arrow-left.png"
        alt=""
        class="h-[2em] w-[2em]"
        style="max-width: none"
      />
    </button>

    <img
      src="../assets/covers/cover-example-3.png"
      alt=""
      style="max-width: none"
      class="object-cover object-center w-full h-full rounded-b-[35px] z-0"
    />

    <div
      class="absolute bottom-10 px-6 w-full grid grid-cols-2 items-center justify-between z-20"
    >
      <div class="justify-self-start">
        <h1 class="text-white text-3xl">Dark Sessions</h1>
        <h1 class="text-white text-3xl">Lustre</h1>
      </div>

      <div class="justify-self-end">
        <button>
          <img
            src="../assets/icons/share.png"
            alt=""
            class="w-[2em] h-[2em]"
            style="max-width: none"
          />
        </button>
      </div>
    </div>

    <div class="w-full h-full absolute top-0 left-0 z-10 gradient"></div>
  </div>
</template>

<style lang="scss" scoped>
.gradient {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.72) 100%
  );
  border-radius: 0px 0px 22px 25px;
}
</style>
