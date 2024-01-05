@component('mail::message')
{{ trans('email.new_ip_body') }}

{{ trans('email.ip_address') }}: {{ $ipAddress }}

@if('' !== $host)
{{ trans('email.host_name') }}: {{ $host }}
@endif

{{ trans('email.date_time') }}: {{ $time }}

{{ trans('email.new_ip_warning') }}
@endcomponent
