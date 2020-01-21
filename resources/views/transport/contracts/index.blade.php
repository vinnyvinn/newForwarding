@extends('layouts.main')
@section('content')
    <div class="container-fluid">
        <contracts-component></contracts-component>
    </div>
@endsection
@section('scripts')
    <script>
        var customer = $('#search_lead');

        customer.on('keyup', function () {
            axios.post('{{ url('/search-lead') }}', {
                'search_item': customer.val()
            }).then(function (response) {
                $('#customers').empty().append(response.data.output);
            })
                .catch(function (error) {
                    console.log(error)
                });
        });
    </script>
@endsection
