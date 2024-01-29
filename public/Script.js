document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                // Check if server response contains redirect URL
                if (data.redirectTo) {
                    // Redirect to the specified URL
                    window.location.href = data.redirectTo;
                } else {
                    // Redirect to default dashboard if no redirect URL provided
                    window.location.href = "/dashboard.html";
                }
            } else {
                errorMessage.innerText = data.message;
            }
        } catch (error) {
            console.error('Error:', error);
            errorMessage.innerText = 'An unexpected error occurred';
        }
    });
});
