<template>
  <div v-if="data" class="status">
    <div class="title space-2">Suerte! Area habilitada en la</div>
    <div class="subtitle text-primary space-2">dirección {{ data.client.address }}</div>
    <div class="costs space-6">
      <div>
        <div class="subtitle-lg"
              :class="{'text-disable': data.have_discount}"
        >
          Valor:
        </div>
        <div class="value-lg "
              :class="{
                'line-through': data.have_discount,
                'text-disable': data.have_discount
              }"
        >
          {{ data.price }}
        </div>
      </div>
      <div v-if="data.have_discount">
        <div class="subtitle-lg text-primary">{{ data.discount }} dst:</div>
        <div class="value-lg text-primary">{{ data.price_discount }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/style/_spaces.scss';
    @import '@/assets/style/_borders.scss';
    @import '@/assets/style/_colors.scss';
    @import '@/assets/style/_gradients.scss';
    @import '@/assets/style/_typography.scss';

    .costs {
        display:flex;
        gap: 2em;
        justify-content: center;
    }

    .title {
        font-size: $font-xl;
        font-weight: $bold;
        color: $color-primary;
        display: flex;
        justify-content: center;
    }

    .subtitle {
        font-size: $font-lg;
        font-weight: $bold;
        display: flex;
        justify-content: center;
    }

    .subtitle-lg {
        font-size: $font-2xl;
        font-weight: $bold;
        display: flex;
        justify-content: center;
    }    

    .subtitle-value {
        font-size: $font-lg;
        color: $color-primary;
    }

    .line-through {
        text-decoration: line-through;
    }

    .value {
        font-size: $font-base;
    }

    .value-lg {
        font-size: $font-3xl;
        font-weight: $bold;
    }

    .text-primary {
        color: $color-primary;
    }

    .text-disable {
        color: $color-black-1;
    }    

    .status {
       display:flex; 
       flex-direction: column;
       padding: $padding-lg;
       background: $color-white-85;
       border-radius: $border-base;
       color: $color-black;

       /* animaitons */
       animation-name: fadeIn;
       animation-duration: 1s;
    }

    @keyframes fadeIn {
      from {opacity: 0;}
      to {opacity: 1;}
    }
</style>
