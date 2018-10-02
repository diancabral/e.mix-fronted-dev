<template>

    <div id="app">

        <transition name="translate-quint">

            <router-view :key="$route.fullPath" />

        </transition>

    </div>

</template>

<script>

    export default {

    }

</script>

<style lang="scss">

    @import '@/scss/style.scss';

    /* */

    .translate {

        &-enter-active,
        &-leave-active {

            transition: .3s ease-in-out !important;
            transition-property: opacity, transform !important;

        }

        &-enter-active {

            transition-delay: .3s !important;

        }

        &-enter,
        &-leave-active {

            opacity: 0;
            transform: translate3d(0, 5px, 0) !important;

        }

    }

    .translate-quint {

        &-enter-active,
        &-leave-active {

            transition: .6s cubic-bezier(0.86, 0, 0.07, 1);
            transition-property: opacity, transform;

        }

        &-enter-to,
        &-leave-to {

            transition-delay: .6s;

        }

        &-enter,
        &-leave-active {

            opacity: 0;
            transform: translate3d(0, 5px, 0);

        }

    }

    .fade {

        &-enter-active,
        &-leave-active {

            transition: .3s ease;
            transition-property: opacity;

        }

        &-enter-active {

            transition-delay: .3s;

        }

        &-enter,
        &-leave-active {

            opacity: 0;

        }

        &-leave-active {

            position: absolute;

        }

    }

</style>

<style lang="scss" module>

    @import '@/scss/components.scss';

    /* */

</style>
