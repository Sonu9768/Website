//clock start//


// Function to update the clock time
function updateClock() {
    // Get the current time in Nepal (NPT)
    const nepalTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' });

    // Format the time in hours, minutes, and seconds
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedTime = new Date(nepalTime).toLocaleTimeString('en-US', options);

    // Update the clock display
    document.getElementById('clock').textContent = formattedTime;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial clock update
updateClock();

//clock end//





//order comfirmation alert//
document.addEventListener("DOMContentLoaded", function () {
    // Function to show the confirmation popup
    function showConfirmationPopup() {
        // Create a popup element
        const popup = document.createElement("div");
        popup.className = "popup";
        popup.innerHTML = "<p>Your order is confirmed!</p>";

        // Append the popup to the body
        document.body.appendChild(popup);

        // Remove the popup after 3 seconds (adjust as needed)
        setTimeout(function () {
            document.body.removeChild(popup);
        }, 2000);
    }

    // Attach click event listener to the "Order" button
    const orderButton = document.querySelector(".normal");
    orderButton.addEventListener("click", showConfirmationPopup);
});





// submit Alert msg//

function showThankYouMessage() {
    alert("Thank You!");
}





