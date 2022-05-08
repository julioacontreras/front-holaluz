<template>
  <div>
    <HeaderComponent />
    <HeroComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/headerComponent.vue";
import HeroComponent from "@/components/heroComponent.vue";

export default {
  components: {
    HeaderComponent,
    HeroComponent,
  },
};
</script>