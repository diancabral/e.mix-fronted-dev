<template>

    <div :class="[

        $style.modal,
        active ? $style.modalActive : null

    ]">

        <div class="container" :class="$style.modalContainer">

            <div :class="$style.modalBox">

                <slot></slot>

            </div>

        </div>

    </div>

</template>

<script>

    export default {

        props: {

            active : {

                default : false,
                type: Boolean

            }

        }

    }

</script>

<style lang="scss" module>

    @import '@/scss/components.scss';

    /* */

    .modal {

        position: fixed;

        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background: rgba(black, .75);

        display: flex;
        align-items: center;
        justify-content: center;

        opacity: 0;

        pointer-events: none;

        transition: opacity .6s cubic-bezier(0.86, 0, 0.07, 1);

        z-index: 2000;

        &--active {

            opacity: 1;

            pointer-events: all;

        }

        &__container {

            display: flex;
            justify-content: center;

        }

        &__box {

            float: left;

            width: 100%;
            max-width: 600px;
            height: 100vh;
            max-height: 90vh;

            display: flex;
            align-items: center;

        }

    }

</style>
