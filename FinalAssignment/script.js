document.addEventListener('DOMContentLoaded', function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarContent = document.getElementById('navbarContent');
    var closeBtn = document.querySelector('.close-btn');

    navbarToggler.addEventListener('click', function() {
        navbarContent.classList.toggle('show');
    });

    closeBtn.addEventListener('click', function() {
        navbarContent.classList.remove('show');
    });

    // jQuery-dependent code
    $(function(){
        $('#enrollForm1').on('submit', function(event) {
            event.preventDefault();
            const fullName = $('#fullName1').val();
            const email = $('#email1').val();
            alert(`Thank you, ${fullName}, for enrolling! We will send details to ${email}.`);
            $('#modal1').modal('hide');
        });

        // Handling form submission for Course 2
        $('#enrollForm2').on('submit', function(event) {
            event.preventDefault();
            const fullName = $('#fullName2').val();
            const email = $('#email2').val();
            alert(`Thank you, ${fullName}, for enrolling in Course 2! We will send details to ${email}.`);
            $('#modal2').modal('hide');
        });

        // Handling form submission for Course 3
        $('#enrollForm3').on('submit', function(event) {
            event.preventDefault();
            const fullName = $('#fullName3').val();
            const email = $('#email3').val();
            alert(`Thank you, ${fullName}, for enrolling in Course 3! We will send details to ${email}.`);
            $('#modal3').modal('hide');
        });
    });


});

