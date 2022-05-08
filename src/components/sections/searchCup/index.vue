<template>
<div class="section">
    <div class="content">
        <div class="title"> Verifique puedes tener tejado solar </div>
        <div class="space-3" />
        <div class="input-text">
            <input
                type="text"
                v-model="cups"
                placeholder="Escribe el nombre de tu calle"
                @keyup.enter="onSearch(cups)"
            />
        </div>
        <div class="space-3" />
        <Status :data="solarRoofStatus" />
    </div>
</div>    
</template>

<script>
import Status from './status.vue';
import getSolarRoofPricesByCUP from '@/api/getSolarRoofPricesByCUP';

export default {
    components: {
        Status
    },
    data () {
        return {
            cups: '',
            solarRoofStatus: null
        }
    },
    methods: {
        async onSearch(cups) {
            const response = await getSolarRoofPricesByCUP(cups)
            if (response.data.status === 'ok') {
                this.solarRoofStatus = response.data.result
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/style/_colors.scss';
    @import '@/assets/style/_gradients.scss';
    @import '@/assets/style/_typography.scss';
    .section {
       display:flex; 
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
