$(document).ready(function () {

    $('#login, #login2').on('click', function () {
        return false;
    });
    $('#login, #login2').popover({
        html: true,
        placement: 'bottom',
        trigger: 'click',
        content: function () {
            return $("#login-popover-content").html();
        }
    });

    $('#buy').on('click', function () {
        var formBlock = $('#buy-form-block');

        if ($(this).hasClass('active-tab') && formBlock.hasClass('form-block-show')) {
            $(this).removeClass('active-tab');
            formBlock.removeClass('form-block-show');
            formBlock.addClass('form-block-hide');
        } else {
            $('#rent-form-block').removeClass('form-block-show').addClass('form-block-hide');
            $('#rent').removeClass('active-tab');

            $(this).addClass('active-tab');
            formBlock.removeClass('form-block-hide');
            formBlock.addClass('form-block-show');
        }
        return false;
    });

    $('#rent').on('click', function () {
        var formBlock = $('#rent-form-block');

        if ($(this).hasClass('active-tab') && formBlock.hasClass('form-block-show')) {
            $(this).removeClass('active-tab');
            formBlock.removeClass('form-block-show');
            formBlock.addClass('form-block-hide');
        } else {
            $('#buy-form-block').removeClass('form-block-show').addClass('form-block-hide');
            $('#buy').removeClass('active-tab');

            $(this).addClass('active-tab');
            formBlock.removeClass('form-block-hide');
            formBlock.addClass('form-block-show');
        }
        return false;
    });

});
