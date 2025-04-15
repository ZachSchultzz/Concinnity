document.getElementById('loginForm').addEventListener('submit', function(event) {
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
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});