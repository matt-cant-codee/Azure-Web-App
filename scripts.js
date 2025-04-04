document.getElementById('dark-mode').addEventListener('click', function() {
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#f0f8ff';
});

document.getElementById('light-mode').addEventListener('click', function() {
    document.body.style.backgroundColor = '#f0f8ff';
    document.body.style.color = '#333';
});

document.getElementById('membership').addEventListener('click', function() {
    fetch('fetch_data.php?type=membership')
        .then(response => response.text())
        .then(data => {
            document.getElementById('info-content').innerHTML = data;
        })
});

document.getElementById('trainers').addEventListener('click', function() {
    fetch('fetch_data.php?type=trainers')
        .then(response => response.text())
        .then(data => {
            document.getElementById('info-content').innerHTML = data;
        })
});

document.getElementById('default').addEventListener('click', function() {
    document.getElementById('info-content').innerHTML = '<div class="image-info"><img src="images/MATTigas.png" alt="MATTigas"></div>' +
    '<p class = "services-default">Our gym is here to help you through your journey on becoming fit and healthy our website <br> is here to provide some guides to help you achieve your dream body.</p>' +
    '<p class = "services-default"><b>Yoga Classes:</b> Discover serenity and strength in our yoga classes at Mattigas Gym. <br> Whether youre a beginner or seasoned yogi, our expert instructors guide you through <br> poses that enhance flexibility, reduce stress, and promote inner balance. Join us <br> on the mat and cultivate a healthier, more centered you.</p>' +
    '<p class = "services-default"><b>Personal Trainers:</b> Transform your fitness journey with our certified personal trainers. <br> They provide personalized workouts that cater to your goals, whether its building muscle, <br> losing weight, or improving endurance. Experience motivation, accountability, and results <br> -driven training that pushes you to achieve your best self.</p>' +
    '<p class = "services-default"><b>Dietitian Services:</b> Optimize your nutrition with the guidance of our experienced dietitians. <br> They create customized meal plans tailored to your lifestyle and goals, whether youre looking <br> to fuel your workouts, manage weight, or enhance overall health. Let our dietitians empower <br> you with knowledge and support for long-term success.</p>' + 
    '<p class = "services-default">Join us at <b>Mattigas Gym</b> and embark on a journey to a healthier, stronger you. Experience <br> the benefits of our comprehensive fitness services designed to meet your individual needs <br> and exceed your expectations. Start your transformation today!</p>';
});