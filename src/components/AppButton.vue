<template>

    <button :class="[

        $style.button,

        withLabel ? $style.buttonPadding : '',
        disabled ? $style.buttonDisabled : '',
        full ? $style.buttonFull : '',
        loading ? $style.buttonLoading : '',
        small ? $style.buttonSmall : ''

    ]" :type="type" :style="{

        color: !light ? 'white' : 'var(--md-' + colorDefault + ')'

    }">

        <div :class="$style.buttonBackground" :style="{

            backgroundColor: light ? 'white' : 'var(--md-' + colorDefault + ')'

        }"></div>

        <app-icon v-if="icon" :class="[

            $style.buttonIcon,
            small ? $style.buttonIconSmall : '',
            withLabel ? $style.buttonIconLabel : ''

        ]" :glyph="icon" />

        {{ label }}

    </button>

</template>

<script>

export default {

    computed: {

        colorDefault(){

            return /\d/.test(this.color) || this.color == 'white' || this.color == 'black' ? this.color : this.color + '-500';

        },

        withLabel(){

            return (this.label !== '') ? true : false;

        }

    },

    props : {

        disabled : {

            default : false,
            type: Boolean

        },

        loading : {

            default : false,
            type: Boolean

        },

        color : {

            default : 'blue-500',
            type: String

        },

        light : {

            default : false,
            type: Boolean

        },

        label : {

            default : '',
            type: String

        },

        icon : {

            default : '',
            type: String

        },

        full : {

            default : false,
            type: Boolean

        },

        small : {

            default : false,
            type: Boolean

        },

        type : {

            default: 'button',
            type: String

        }

    }

}

</script>

<style lang="scss" module>

    @import '@/scss/components.scss';

    /* */

    $button-min-size: 40px;
    $button-min-size-small: 30px;

    /* */

    .button {

        position: relative;

    	float: left;

        min-width: $button-min-size;
        min-height: $button-min-size;

        padding: 0;

        font-family: 'Raleway', sans-serif;
        @include font-sizer(12);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
    	color: white;

        background: rgba(white, 0);

    	display: flex;
        align-items: center;
        justify-content: center;

    	cursor: pointer;

        outline: none !important;
        border: none;

        z-index: 100;

        &__background {

            position: absolute;

            width: 100%;
            height: 100%;

            border-radius: 100px;
            transition: .2s ease;
            transition-property: filter, background;

            z-index: -1;

        }

        &:hover &__background {

            filter: brightness(0.9);

        }

        &:active &__background {

            filter: brightness(0.8);

        }

        &:not(:last-of-type){

            margin-right: $theme-padding;

        }

        &--light {

            color: white;

        }

        &--dark {

            color: black;

        }

        &--full {

            width: 100%;

        }

        &--padding {

            padding: 0 $theme-padding * 2;

        }

        &--small {

            min-width: $button-min-size-small;
            min-height: $button-min-size-small;

        }

        &--disabled {

            pointer-events: none !important;

            opacity: .5;

        }

        &--disabled &__title {

            opacity: 0 !important;

        }

        &--loading {

    		color: #DDD !important;

    		pointer-events: none;

    		&::before {

    			$size: 24px;

    			content: '';

    			position: absolute;

    			top: 50%;
    			left: 50%;

    			width: $size;
    			height: $size;

    			margin-top: -($size / 2);
    			margin-left: -($size / 2);

    			border: 3px solid rgba($theme-color-1, .25);
    			border-right-color: $theme-color-1;
    			border-radius: $size;

    			animation: wait .4s linear infinite;

    			@keyframes wait {

    				from { transform: rotate(0deg); }
    				to { transform: rotate(360deg); }

    			}

                @include hardware;

    		}

    	}

        &--loading &__background {

        	background: #DDD !important;

        }

        &--loading &__icon {

        	opacity: 0;

        }

        &__icon {

            width: 24px;
            height: 24px;

            fill: white;

            transition: opacity .2s ease;

            &--label {

                margin-right: $theme-padding / 2;

            }

            &--small {

                width: 16px;
                height: 16px;

            }

        }

        &:hover &__title {

            opacity: 1;
            visibility: visible;
            transform: translate3d(-50%, -($theme-padding), 0);

        }

    }

</style>
