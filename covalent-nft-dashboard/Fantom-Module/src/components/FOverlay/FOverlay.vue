<template>
    <transition name="fade">
        <div v-if="isVisible" class="foverlay" :style="style" @click="onClick">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'FOverlay',

    emits: ['before-overlay-hide', 'overlay-hide'],

    props: {
        hideOnClick: {
            type: Boolean,
            default: true,
        },
        zIndex: {
            type: Number,
            default: 1,
        },
        visible: {
            type: Boolean,
            default: true,
        },
    },

    data() {
        return {
            isVisible: false,
            style: {
                zIndex: this.zIndex,
            },
        };
    },

    watch: {
        visible(_value) {
            this.isVisible = _value;
        },
    },

    mounted() {
        document.body.appendChild(this.$el);

        if (this.visible) {
            this.$nextTick(() => {
                this.show();
            });
        }
    },

    unmounted() {
        this.$el.remove();
    },

    methods: {
        show() {
            if (!this.isVisible) {
                this.isVisible = true;
            }
        },

        hide(_hiddenByClick = false) {
            if (this.isVisible) {
                const payload = {
                    preventDefault: false,
                    hiddenByClick: _hiddenByClick,
                };

                this.$emit('before-overlay-hide', payload);

                if (!payload.preventDefault) {
                    this.isVisible = false;

                    this.$nextTick(() => {
                        this.$emit('overlay-hide', _hiddenByClick);
                    });
                }
            }
        },

        onClick() {
            if (this.hideOnClick) {
                this.hide(true);
            }
        },
    },
};
</script>

<style lang="scss">
@use 'style';
</style>
