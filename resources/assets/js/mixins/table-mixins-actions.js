const TableMixinsActions = {
    methods: {
        removeRecord(url,refresh=true) {
            return new Promise((resolve, reject) => {
                this.$swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                        Event.fire('show-loader', true);
                        axios.post(url).then((response) => {
                            Event.fire('show-loader', false);

                            resolve(response);

                            this.$toastr.s(
                                "Service deleted successfully "
                            );

                            if(refresh){
                                Event.fire('refresh-data');
                            }

                        }).catch((error) => {
                            Event.fire('show-loader', false);

                            reject(error.response);

                            this.$swal(
                                'Not Deleted!',
                                'The record has not been deleted, an error occured',
                                'error'
                            )

                        });

                    }
                })
            });
        },
        deleteRecord(url, params ={},refresh=true) {
            return new Promise((resolve, reject) => {
                this.$swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                        Event.fire('show-loader', true);
                        axios.delete(url, {params:params}).then((response) => {
                            Event.fire('show-loader', false);

                            resolve(response);

                            this.$toastr.s(
                                "Service deleted successfully "
                            );

                            if(refresh){
                                Event.fire('refresh-data');
                            }

                        }).catch((error) => {
                            Event.fire('show-loader', false);

                            reject(error.response);

                            this.$swal(
                                'Not Deleted!',
                                'The record has not been deleted, an error occured',
                                'error'
                            )

                        });

                    }
                })
            });
        },
        addRecord(url, formData, serviceName, refresh=true) {
            return new Promise((resolve, reject) => {
                Event.fire('show-loader', true);

                axios.post(url, formData).then((response) => {

                    if(refresh){
                        Event.fire('refresh-data');
                    }

                    resolve(response);

                    // this.flashSucces(serviceName+ " added successfully");

                    this.$toastr.s(
                        serviceName + " added successfully"
                    );


                    Event.fire('show-loader', false);

                }).catch((error) => {
                    reject(error.response);

                    this.flashError(serviceName + " not added" + error);

                })
            });
        },
        getRecord(url, params, serviceName, refresh=true) {
            return new Promise((resolve, reject) => {
                Event.fire('show-loader', true);

                axios.get(url, {params:params}).then((response) => {
                    if(refresh){
                        Event.fire('refresh-data');
                    }
                    Event.fire('show-loader', false);

                    resolve(response);


                }).catch((error) => {
                    reject(error.response);

                    this.flashError(serviceName + " not retrieved" + error);

                    Event.fire('show-loader', false);

                })
            });
        }
    }
};

export default TableMixinsActions;
