<script setup>
const emit = defineEmits(["toggle"]);

const toggleMenu = () => {
  emit("toggle");
};
</script>

<template>
  <div class="absolute top-0 w-full z-10">
    <div
      class="relative flex justify-between items-center bg-transparent px-10 py-3"
    >
      <button @click="toggleMenu">
        <img src="../assets/icons/menu.png" alt="" style="height: 1em" />
      </button>

      <button
        class="rounded-full relative h-[2rem] w-[2rem] flex justify-center"
      >
        <img
          src="../assets/icons/user.png"
          alt=""
          style="height: 1.5em"
          class="absolute bottom-0"
        />
        <div
          class="bg-white opacity-10 absolute top-0 rounded-full h-full w-full"
        ></div>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
