<template>
    <div class="callout alert-flash" :class="[show ? 'alert-flash-show':'', flashType]" role="alert" v-show="show">
        <strong v-if="flashType==='success'">Success!</strong>
        <strong v-if="flashType==='alert'">Error!</strong>
        {{ body }}
    </div>
</template>

<script>
    export default {
        props: {
            message: {
                type: String
            },
            level: {}
        },
        data() {
            return {
                body: '',
                kind: '',
                show: false,
            }
        },
        computed: {
            flashType() {
                if (this.kind === 0) {
                    return "success"
                } else if (this.kind === 1) {
                    return "alert"
                } else if (this.kind === 2) {
                    return "warning"
                } else if (this.kind === 3) {
                    return "primary"
                } else if (this.kind === 4) {
                    return "secondary"
                }
                return "success"
            }

        },
        created() {
            this.prepareComponent()
        },
        methods: {
            flash(message) {
                this.body = message;
                this.show = true;
                this.hide();
            },
            hide() {
                setTimeout(() => {
                    this.show = false;
                }, 4000);
            },
            prepareComponent() {
                this.message ? this.flash(this.message) : '';

                Event.listen(
                    'flash', (message) => {
                        message.level ? this.kind = message.level : this.kind = '';

                        this.flash(message.message);
                    }
                );
            }
        }
    };
</script>

<style lang="scss">
    .alert-flash {
        display: inline-block;
        position: fixed;
        bottom: 10px;
        z-index: 200;
        min-width: 200px;
        right: 20px;
        margin: auto;
        text-align: center;
        border-radius: 3px;
        background-color: #293846;
        color: #fff;
    }

    .alert-flash-show {
        visibility: visible;
        -webkit-animation: fadein 0.9s, fadeout 0.5s 3.5s;
        animation: fadein 0.9s, fadeout 0.5s 3.5s;
    }

    @-webkit-keyframes fadein {
        from {
            right: 0;
            opacity: 0;
        }
        to {
            right: 20px;
            opacity: 1;
        }
    }

    @keyframes fadein {
        from {
            right: 0;
            opacity: 0;
        }
        to {
            right: 20px;
            opacity: 1;
        }
    }

    @-webkit-keyframes fadeout {
        from {
            right: 20px;
            opacity: 1;
        }
        to {
            right: 0;
            opacity: 0;
        }
    }

    @keyframes fadeout {
        from {
            right: 20px;
            opacity: 1;
        }
        to {
            right: 0;
            opacity: 0;
        }
    }

</style>