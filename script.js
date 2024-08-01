var btn = document.getElementById("btn");

function toggleBtn(){
    btn.classList.toggle("active")
}

function openApp() {
    document.getElementById('popupWindow').style.display = 'block';
}
function openGTA() {
    document.getElementById('popupGTA').style.display = 'block';
}
function closePopup() {
    document.getElementById('popupWindow').style.display = 'none';
}
function closeGTAPopup() {
    document.getElementById('popupGTA').style.display = 'none';
}


function showNotification() {
    var notificationBar = document.getElementById('notificationBar');
    var progressBar = document.getElementById('progressBar');
    var notificationMessage = document.getElementById('notificationMessage');

    // Show the notification bar
    notificationBar.style.display = 'flex';
    notificationBar.style.opacity = '1';

    // Reset progress bar width to 0% and message to 'Downloading...'
    progressBar.style.width = '0%';
    notificationMessage.textContent = 'Downloading...';

    // Trigger reflow to ensure the progress bar animation restarts
    progressBar.offsetWidth; // Trigger reflow

    // Start the progress bar animation to 100%
    progressBar.style.width = '100%';

    // Change the message and fade out the notification bar after 5 seconds
    setTimeout(function() {
        notificationMessage.textContent = 'Download Completed'; // Change the message
        
        // Fade out the notification bar
        notificationBar.style.opacity = '0'; // Start fade out
        setTimeout(function() {
            notificationBar.style.display = 'none'; // Hide the notification bar after fade out
            addNewApp();
        }, 500); // Match this time with the CSS opacity transition duration
    }, 5000); // 5 seconds for progress bar animation
}

document.querySelector('.download-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    openApp(); // Open the popup
    showNotification(); // Show the notification
});

function addNewApp() {
    // Create a new div element
    var newApp = document.createElement('div');
    
    // Add the class 'gc-container' to the new div
    newApp.classList.add('gta-container');
    
    // Set up the content for the new element
    newApp.innerHTML = `
        <img src="images/game-icon.svg" class="gc-icon">
        <p class="gc-name">GTA X</p>
    `;
    
    // Append the new element to the app-container
    document.querySelector('.app-container').appendChild(newApp);
    
    // Add the same click event listener to the new element
    newApp.addEventListener('click', function() {
        openGTA(); // Function to be executed when clicking the new app
    });
}
