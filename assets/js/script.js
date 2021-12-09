$(document).ready(function () {
    //search button
    $(document).on("click", ".searchTrigger", function () {
        $(".main-nav").toggleClass("top-search-open");
        $(".top-search-parent").toggleClass("relative");
        $(".nav-item.has-children .nav-title").removeClass("is-open");
    });

    $(document).on("click", ".nav-item.has-children .nav-title", function () {
        $(this).toggleClass("is-open");
    });

    //mobile menu
    $(document).on("click", ".showMenu", function () {
        $(this).toggleClass("opened");
        $(".toggleMenu").toggleClass("menu-open");
        $("body").toggleClass("active-menu");
        // $("html").toggleClass("overflow");
        $(".navbar-wrapper").toggleClass("navbar-open-menu");
    });
    $(document).on("click", ".overlayJs", function () {
        $(".showMenu").removeClass("opened");
        $(".toggleMenu").removeClass("menu-open");
        $("body").removeClass("active-menu");
        // $("html").removeClass("overflow");
        $(".navbar-wrapper").removeClass("navbar-open-menu");
    });

    // click outside hide megamenu
    $(document).mouseup(function (e) {
        var navigationMenu = $(".main-nav .nav-item");
        if (navigationMenu.has(e.target).length === 0) {
            $(".nav-item.has-children .nav-title").removeClass("is-open");
        }
    });

    // collapse
    $(".collapse-heading").click(function () {
        $(this).toggleClass("is-active");
        $(this).next(".collapse-panel").slideToggle("slow");
    });

    // modal
    $(document).on("click", ".modal-trigger", function (e) {
        e.preventDefault();
        dataModal = $(this).attr("data-modal");
        $(dataModal).css({ display: "block" });
        $("body").addClass("modal-open");
        $("html").css({ "overflow-y": "hidden" });
    });
    //close modal
    $(document).on("click", ".modal-close, .modal-sandbox", function () {
        $(".modal-container").css({ display: "none" });
        $("body").removeClass("modal-open");
        $("html").toggleClass("overflow");
        $("html").css({ "overflow-y": "auto" });
    });

    //rule for phone number
    $.validator.addMethod(
        "phoneno",
        function (value, element) {
            return (
                value.match(/^\+(?:[0-9] ?){6,14}[0-9]$/) ||
                value.match(/^(?:[0-9] ?){6,14}[0-9]$/)
            );
        },
        "Enter Valid  phone number"
    );

    //rule for start date
    $.validator.addMethod("birth", function (value, element) {
        var year = value.split("/");
        if (
            value.match(/^\d\d?\/\d\d?\/\d\d\d\d$/) &&
            parseInt(year[2]) <= 2019
        )
            return true;
        else return false;
    });

    // modal validation
    $(".validateJs").each(function () {
        $(this).validate({
            rules: {
                required: "required",

                firstName: {
                    required: true,
                },
                lastName: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true,
                },
                phone: {
                    required: true,
                    phoneno: true,
                },
                city: {
                    required: true,
                },
                exprctedsalary: {
                    required: true,
                },
                startdate: {
                    required: true,
                    startdate: true,
                },
            },
            messages: {
                required: "This field is required",
                firstName: "Please enter a valid first name",
                lastName: "Please enter a valid last name",
                email: "Please enter a valid email address",
                phone: "Please enter a valid phone",
                city: "Please enter a valid city",
                // exprctedsalary: '',
                startdate: "Please enter a valid date",
            },
            submitHandler: function (form) {
                // for demo
                form.submit();
            },
        });
    });
});
