<template>

    <div :class="$style.tooltip">

        <div :class="[

            $style.tooltipBox,
            !top && !bottom && !left && !right ? $style.tooltipBoxTop : null,
            top ? $style.tooltipBoxTop : null,
            bottom ? $style.tooltipBoxBottom : null,
            left ? $style.tooltipBoxLeft : null,
            right ? $style.tooltipBoxRight : null,
            limited ? $style.tooltipBoxLimited : null

        ]" v-html="label"></div>

        <slot></slot>

    </div>

</template>

<script>

    export default {

        props : {

            label: {

                default : '',
                type: String

            },

            limited: Boolean,

            top: Boolean,
            bottom: Boolean,
            left: Boolean,
            right: Boolean,

            margin : Number

        },

        watch : {

            label : function(){

                this.$nextTick(() => {

                    this.centerTooltip();

                });

            }

        },

        mounted(){

            this.centerTooltip();

        },

        methods : {

            centerTooltip(){

                if(

                    (this.top || this.bottom) ||
                    (!this.top && !this.bottom && !this.left && !this.right)

                ){

                    this.$el.firstChild.style.marginLeft = '-' + (this.$el.firstChild.offsetWidth / 2) + 'px';

                }

            }

        }

    }

</script>

<style lang="scss" module>

    @import '@/scss/components.scss';

    /* */

    $tooltip-height: 24px;
    $tooltip-gutter: 6px;
    $tooltip-arrow-size: 4px;
    $tooltip-background: rgba(black, 1);

    /* */

    .tooltip {

        position: relative;

        float: left;

        &:hover &__box {

            opacity: 1;

            &--top {

                transform: translate3d(0, calc(-100% - #{$tooltip-gutter}), 0);

            }

            &--bottom {

                transform: translate3d(0, calc(100% + #{$tooltip-gutter}), 0);

            }

            &--left {

                transform: translate3d(-$tooltip-gutter, -50%, 0);

            }

            &--right {

                transform: translate3d($tooltip-gutter, -50%, 0);

            }

        }

        &__box {

            position: absolute;

            height: $tooltip-height;

            padding: $theme-padding / 4 $theme-padding / 2;

            background: $tooltip-background;

            white-space: nowrap;

            border-radius: 3px;

            font-family: 'Raleway', sans-serif;
            @include font-sizer(12);
            font-weight: 400;
            text-transform: none;
            color: white;
            letter-spacing: normal;
            line-height: 1.4rem;

            opacity: 0;

            box-shadow: 0 10px 25px rgba(black, .1);

            transition-property: transform, opacity;
            transition-duration: .2s;
            transition-timing-function: ease;

            pointer-events: none;

            &--limited {

                width: 250px;
                height: auto;

                padding: $theme-padding;

                white-space: normal;

            }

            &--top {

                left: 50%;

                transform: translate3d(0, calc(-100% - #{($tooltip-gutter + 2px)}), 0);

                &::after {

                	top: 100%;
                	left: 50%;
                	border: solid transparent;
                	content: " ";
                	height: 0;
                	width: 0;
                	position: absolute;
                	pointer-events: none;
                	border-color: rgba(black, 0);
                	border-top-color: $tooltip-background;
                	border-width: $tooltip-arrow-size;
                	margin-left: -$tooltip-arrow-size;

                }

            }

            &--bottom {

                left: 50%;
                bottom: 0;

                transform: translate3d(0, calc(100% + #{($tooltip-gutter + 2px)}), 0);

                &::after {

                	bottom: 100%;
                	left: 50%;
                	border: solid transparent;
                	content: " ";
                	height: 0;
                	width: 0;
                	position: absolute;
                	pointer-events: none;
                	border-color: rgba(black, 0);
                	border-bottom-color: $tooltip-background;
                	border-width: $tooltip-arrow-size;
                	margin-left: -$tooltip-arrow-size;

                }

            }

            &--left {

                top: 50%;
                right: 100%;

                transform: translate3d(-($tooltip-gutter + 2px), -50%, 0);

                &::after {

                	left: 100%;
                	top: 50%;
                	border: solid transparent;
                	content: " ";
                	height: 0;
                	width: 0;
                	position: absolute;
                	pointer-events: none;
                	border-color: rgba(black, 0);
                	border-left-color: $tooltip-background;
                	border-width: $tooltip-arrow-size;
                	margin-top: -$tooltip-arrow-size;

                }

            }

            &--right {

                top: 50%;
                left: 100%;

                transform: translate3d(($tooltip-gutter + 2px), -50%, 0);

                &::after {

                    right: 100%;
	                top: 50%;
                	border: solid transparent;
                	content: " ";
                	height: 0;
                	width: 0;
                	position: absolute;
                	pointer-events: none;
                	border-color: rgba(black, 0);
                	border-right-color: $tooltip-background;
                	border-width: $tooltip-arrow-size;
                	margin-top: -$tooltip-arrow-size;

                }

            }

        }

    }

</style>
