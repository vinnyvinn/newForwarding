<template>
    <modal :name="id"
           transition="nice-modal-fade"
           classes="demo-modal-class"
           :min-width="200"
           :pivot-y="0.5"
           :adaptive="true"
           :scrollable="true"
           :reset="true"
           :width="width"
           :height="height"
           :clickToClose="false"
           :transition="fade"
           @before-open="beforeOpen"
           @opened="opened"
           @closed="closed"
           @before-close="beforeClose">
        <div class="card size-modal-content mb-0">
            <div class="card-body mb-0 p-0">
                <div class="modal-header">
                    <h4 class="modal-title" id="myLargeModalLabel">
                        <slot name="title"></slot>
                    </h4>
                    <button type="button" class="close" @click="$emit('close-modal')" aria-hidden="true">×</button>
                </div>
                <div class="m-0 modal-body">
                    <slot name="body">

                    </slot>
                </div>
                <slot name="footer">
                    <div class="modal-footer">

                        <button type="button" class="btn btn-danger waves-effect text-left" @click="hide">
                            Close
                        </button>
                    </div>
                </slot>

            </div>
        </div>
    </modal>
</template>
<script>
    export default {
        props: {
            width: {
                default: "60%"
            },
            height: {
                default: "auto"
            },
            id:{
                default:"example",
                type:String
            }
        },
        name: 'SizeModalTest',
        data() {
            return {
                paragraphs: [true],
                timer: null,
                fade:'fade',
                visible:true
            }
        },
        methods: {
            beforeOpen() {
                this.visible = true;
                this.timer = setInterval(() => {
                    this.paragraphs.push(true)
                }, 5000)

            },

            beforeClose() {
                clearInterval(this.timer)
                this.timer = null;
                this.paragraphs = []
            },

            opened(e) {
                // e.ref should not be undefined here
                // console.log('opened', e);
                // console.log('ref', e.ref)
            },

            closed(e) {
                this.visible = false;
                console.log('closed');
            },
            show() {
                this.$modal.show(this.id);
            },
            hide() {
                this.$modal.hide(this.id);
            }
        },
        computed: {
            currentTime() {
                return new Date();
            }
        },
        mounted() {
            Event.listen('show-modal', (value) => {
                if (value) {
                    return this.show();
                }
                return this.hide();
            });
        }
    }
</script>
<style>
    .size-modal-content {
        padding: 10px;
    }

    .v--modal-overlay[data-modal="example"] {
        background: rgba(0, 0, 0, 0.3);
    }

    .demo-modal-class {
        border-radius: 5px;
        background: #F7F7F7;
        box-shadow: 5px 5px 30px 0 rgba(46, 61, 73, 0.2);
    }
</style>