document.addEventListener("DOMContentLoaded", function () {

    const form =
        document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let isValid = true;

        const firstName =
            document.getElementById("firstName").value.trim();

        const lastName =
            document.getElementById("lastName").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const username =
            document.getElementById("username").value.trim();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        clearErrors();


        if (firstName === "") {

            showError(
                "firstNameError",
                "Please enter your first name."
            );

            isValid = false;
        }


        if (lastName === "") {

            showError(
                "lastNameError",
                "Please enter your last name."
            );

            isValid = false;
        }


        if (email === "") {

            showError(
                "emailError",
                "Please enter your email address."
            );

            isValid = false;

        } else if (
            !email.includes("@") ||
            !email.includes(".")
        ) {

            showError(
                "emailError",
                "Please enter a valid email address."
            );

            isValid = false;
        }


        if (username === "") {

            showError(
                "usernameError",
                "Please enter a username."
            );

            isValid = false;
        }


        if (password.length < 6) {

            showError(
                "passwordError",
                "Password must be at least 6 characters."
            );

            isValid = false;
        }


        if (confirmPassword !== password) {

            showError(
                "confirmPasswordError",
                "Passwords must match."
            );

            isValid = false;
        }


        const selectedGenre =
            document.querySelector(
                'input[name="genre"]:checked'
            );


        if (!selectedGenre) {

            showError(
                "genreError",
                "Please select a game genre."
            );

            isValid = false;
        }


        const selectedPlatforms =
            document.querySelectorAll(
                'input[name="platform"]:checked'
            );


        if (selectedPlatforms.length === 0) {

            showError(
                "platformError",
                "Please select at least one platform."
            );

            isValid = false;
        }


        if (isValid) {

            document.getElementById(
                "successMessage"
            ).textContent =
                "Registration completed successfully!";

            form.reset();
        }

    });


    function showError(elementId, message) {

        document.getElementById(
            elementId
        ).textContent = message;

    }


    function clearErrors() {

        const errorMessages =
            document.querySelectorAll(
                ".error-message"
            );


        errorMessages.forEach(function (error) {

            error.textContent = "";

        });


        document.getElementById(
            "successMessage"
        ).textContent = "";

    }

});