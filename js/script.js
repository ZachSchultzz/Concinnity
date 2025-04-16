document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the login page (index.html) by looking for the login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const businessName = document.getElementById('businessName').value;
            const bin = document.getElementById('bin').value;
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const password = document.getElementById('password').value;
            const pin = document.getElementById('pin').value;

            const testAccount = {
                businessName: 'Concinnity.Vision',
                bin: '1234',
                firstName: 'Zach',
                lastName: 'Schultz',
                password: 'Password123',
                pin: '4321'
            };

            if (
                businessName === testAccount.businessName &&
                bin === testAccount.bin &&
                firstName === testAccount.firstName &&
                lastName === testAccount.lastName &&
                password === testAccount.password &&
                pin === testAccount.pin
            ) {
                // Redirect to dashboard with company name as a URL parameter
                window.location.href = `dashboard.html?companyName=${encodeURIComponent(businessName)}`;
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }

    // Check if we're on a dashboard page by looking for the nav-bar
    const navBar = document.querySelector('.nav-bar');
    if (navBar) {
        // Select all navigation links
        const navLinks = document.querySelectorAll('.nav-item');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent immediate navigation
                const href = link.getAttribute('href');

                // Apply fade-out animation to the entire dashboard container
                const dashboardContainer = document.querySelector('.dashboard-container');
                dashboardContainer.style.animation = 'fadeOut 0.5s ease-out forwards';

                // Navigate to the new page after the animation completes
                setTimeout(() => {
                    window.location.href = href;
                }, 500); // Match the animation duration
            });
        });
    }
});