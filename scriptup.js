$(document).ready(function() {
    function validateForm(username, email, password, confirmPassword, checkbox, errorSelector, successSelector) {
        $(errorSelector).text('');
        $(successSelector).text('');

        if (username === '') {
            $(errorSelector).text('Username is not Null');
        } else if (email === '') {
            $(errorSelector).text('Email is not Null');
        } else if (password === '') {
            $(errorSelector).text('Password is not Null');
        } else if (password != confirmPassword) {
            $(errorSelector).text('Password not match!');
        } else if (!$(checkbox).is(":checked")) {
            $(errorSelector).text('Click Agree for sign up.');
        } else {

            $(successSelector).text('Sign up successful.');

            window.location.href = "/signin";
        }
    }

    $('#signup-pc').submit(function(event) {
        event.preventDefault();
        validateForm(
            $('#username-pc').val(),
            $('#email-pc').val(),
            $('#password-pc').val(),
            $('#confirm-password-pc').val(),
            '#checkbox-pc',
            '#error',
            '#success'
        );
    });

    $('#signup-on-mobile').submit(function(event) {
        event.preventDefault();
        validateForm(
            $('#username-mobile').val(),
            $('#email-mobile').val(),
            $('#password-mobile').val(),
            $('#confirm-password-mobile').val(),
            '#checkbox-mobile',
            '#error-mobile',
            '#success-mobile'
        );
    });

    $.ajax({
        url: "/signin",
        method: "POST",
        data: { username: username, password: password },
        success: function(response) {

            if (response.success) {

                $(successSelector).text('Sign in successful.');

                $(errorSelector).text('Invalid credentials');
            }
        },
        error: function() {

            $(errorSelector).text('An error occurred during Sign In');
        }
    });
    
});
