<template>
    <Trap :disabled="trapActive">
        <transition name="modal">
            <div class="modal" v-show="show" :v-transition="modal">
                <div class="modal-wrapper">
                    <div class="modal-container">
                        <div class="card-body mb-0 p-0">
                            <div class="modal-header">
                                <h4 class="modal-title" id="myLargeModalLabel">
                                    <slot name="title">
                                        This is a sample Header
                                    </slot>
                                </h4>
                                <button type="button" class="close" @click=" show = false"  aria-hidden="true">×
                                </button>
                            </div>
                            <div class="m-0 modal-body">
                                <slot name="body">
                                    This is a sample Header
                                    This is a sample Header
                                    This is a sample Header
                                </slot>
                            </div>
                            <slot name="footer">
                                <div class="modal-footer">

                                    <button type="button" class="btn btn-danger waves-effect text-left" @click=" show = false" >
                                        Close
                                    </button>
                                </div>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </Trap>
</template>

<script>
    import Trap from 'vue-focus-lock';

    export default {
        components:
            {
                Trap: Trap
            },
        data() {
            return {
                show: true,
                active: true,
                title: '',
                body: '',
                modal: ''
            }

        },
        computed: {
            trapActive() {
                return !this.active;
            }
        },
        methods: {
            close() {
                this.show = false;
            }
        },
        mounted() {
            Event.listen('show-modal', (value) => {
                if (value) {
                    return this.show = true;
                }
                return this.show = false;
            });
        }
    }
</script>

<style lang="scss">
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity .3s ease;

        &-wrapper {
            display: table-cell;
            vertical-align: middle;
        }

        &-container {
            background: #fff;
            width: 450px;
            border-radius: 5px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
            transition: all .3s ease;
            margin: 0 auto;
            padding: 20px 30px;
        }

        &-footer {
            margin-top: 15px;
        }

        &-enter, &-leave {
            opacity: 0;
        }

        &-enter &-container,
        &-leave &-container {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }

        button:focus {
            outline:0;
        }
    }

</style>