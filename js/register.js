$(document).ready(function () {
    // Step 1
    $("#next-1").click(function () {
        $("#step-1").hide();
        $("#step-2").show();
    });

    // Step 2
    $("#next-2").click(function () {
        $("#step-2").hide();
        $("#step-3").show();
    });

    $("#back-2").click(function () {
        $("#step-2").hide();
        $("#step-1").show();
    });

    // Step 3
    $("#next-3").click(function () {
        $("#step-3").hide();
        $("#step-4").show();
    });

    $("#back-3").click(function () {
        $("#step-3").hide();
        $("#step-2").show();
    });

    $("#next-4").click(function () {
        $("#step-4").hide();
        $("#step-5").show();
    });

    $("#back-4").click(function () {
        $("#step-4").hide();
        $("#step-3").show();
    });

    $("#back-5").click(function () {
        $("#step-5").hide();
        $("#step-4").show();
    });

    // Submit form
    $("#registration-form").submit(function (e) {
        e.preventDefault();

        // Send form data to server and redirect to homepage
        $.ajax({
            url: "/process-registration.php",
            type: "post",
            data: $(this).serialize(),
            success: function () {
                window.location.href = "/homepage.html";
            }
        });
    });
});