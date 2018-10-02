<template>

    <div>{{ message }}</div>

</template>

<script>

    export default {

        computed : {

            message(){

                return this.$store.getters.message

            }

        }

    }

</script>

<style lang="scss" module>

    @import '@/scss/components.scss';

    /* */

</style>
