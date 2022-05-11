<template>
  <div class="section">
    <div class="content">
      <div class="title">
        Verifique puedes tener tejado solar
      </div>
      <div class="space-3" />
      <div class="input-search">
        <input
          v-model="cups"
          type="tel"
          placeholder="Código CUPS ex:123456"
          @keyup.enter="onSearch(cups)"
        >
        <button
          class="btn"
          @click="onSearch(cups)"
        >
          Buscar
        </button>
      </div>
      <div class="space-3" />
      <StatusComponent :data="solarRoofStatus" />
      <div
        v-if="notFoundCups"
        class="message-error"
      >
        No encontrado CUPS
      </div>
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
      notFoundCups: false
    };
  },
  methods: {
    async onSearch(cups) {
      this.notFoundCups = false;
      this.solarRoofStatus = null;
      const response = await getSolarRoofPricesByCUPS(cups);
      if (response.data.status === "ok") {
        this.solarRoofStatus = response.data.result;
      } else
      if (response.data.status === "not-found-cups") {
        this.$nextTick(() => {
          this.notFoundCups = true;
        })
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/_borders.scss";
@import "@/assets/style/_spaces.scss";
@import "@/assets/style/_colors.scss";
@import "@/assets/style/_gradients.scss";
@import "@/assets/style/_typography.scss";
@import "@/assets/style/_buttons.scss";

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

.message-error {
  font-size: $font-lg;
  display: flex;
  width: 100%;
  justify-content: center;
}

input {  
  appearance: none;
  border: none;
  outline: 0;

  padding-top: $padding-base;
  width: 100%;

  position: relative;

  + .btn {
    @extend .btn-primary;

    overflow: hidden;

    position: absolute;

    width: 100px;
    right: -100px;

    padding: $padding-base 0 $padding-base 0;
    font-size: $font-lg;

    transition: all 0.5s;
  }

  &:not(:placeholder-shown) {
    + .btn {
      width: 100px;
      right: 0;      
    }
  }
}
</style>
