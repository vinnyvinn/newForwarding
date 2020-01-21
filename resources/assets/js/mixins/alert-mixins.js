const alertMixins = {
    methods: {
        deleteAlert() {
            this.$swal({
                type: 'warning',
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                    this.$swal(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            });
        },
        deleteConfirmAlert() {
            this.$swal({
                type: 'warning',
                title: 'Custom width, padding, background.',
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                            rgba(0,0,123,0.4)
                            url("/images/nyan-cat.gif")
                            center left
                            no-repeat
                          `
            })
        },
        flash(message) {
            this.$swal(message)
        },
        flashError(message) {
            this.$swal(
                'Error!',
                message,
                'error'
            );
        },
        flashSucces(message) {
            this.$swal(
                'success!',
                message,
                'success'
            )
        },
        showDrawer(value) {
            Event.fire('show-drawer', value)
        },
        loading(value) {
            Event.fire('show-loader', value)
        }
    }
};

export default alertMixins;