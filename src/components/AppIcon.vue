<template>

    <svg width="24" height="24">

        <use :xlink:href="'#' + glyph"></use>

    </svg>

</template>

<script>

    export default {

        props : {

            glyph : {

                default: '',
                type: String

            }

        }

    }

</script>
