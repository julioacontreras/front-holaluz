<template>
  <div class="section">
    <div class="content">
      <div class="title">
        Verifique puedes tener tejado solar
      </div>
      <div class="space-3" />
      <div class="input-text">
        <input
          v-model="cups"
          type="text"
          placeholder="Escribe el nombre de tu calle"
          @keyup.enter="onSearch(cups)"
        >
      </div>
      <div class="space-3" />
      <StatusComponent :data="solarRoofStatus" />
    </div>
  </div>
</template>

<script>
import StatusComponent from "./statusComponent.vue";
import getSolarRoofPricesByCUPS from "@/api/getSolarRoofPricesByCUPS";

export default {
  components: {
    StatusComponent,
  },
  data() {
    return {
      cups: "",
      solarRoofStatus: null,
    };
  },
  methods: {
    async onSearch(cups) {
      const response = await getSolarRoofPricesByCUPS(cups);
      if (response.data.status === "ok") {
        this.solarRoofStatus = response.data.result;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/_colors.scss";
@import "@/assets/style/_gradients.scss";
@import "@/assets/style/_typography.scss";
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $gradient-linear-primary;
  width: 100%;
  height: 70vh;
  color: $color-white;
}
.content {
  max-width: 70vw;
}

.title {
  font-size: $font-2xl;
}
</style>
