<template>
    <div class="hero">
        <div class="hero-bg">
            <video autoplay muted loop>
                <source src="/video/hero.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>            
        </div>
        <div class="hero-text">
            La Revolución de los Tejados empieza por ti
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/style/_colors.scss';
    @import '@/assets/style/_spaces.scss';
    @import '@/assets/style/_layouts.scss';
    @import '@/assets/style/_typography.scss';

    .hero {
        width: 100%;
        overflow: hidden;
        height: $hero-height;
        position: relative;
    }

    .hero-bg {
        width: 100%;
        position: absolute;
        z-index: 0;
        video {
            height: $hero-height;
            min-width: 100%;
            object-fit: cover;
            overflow: hidden;
        }
    }

    .hero-text {
        /* display & box model */
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: $hero-height;
        padding: 0 $padding-lg 0 $padding-lg;

        /* positioning */
        position: absolute;
        z-index: $z-1;

        /* decoration & typography */
        font-size: min(max($font-2xl, 4vw), $font-4xl);
        font-weight: $bold;
        color: $color-white-85;
        text-shadow: $shadow-text;
    }  

</style>
