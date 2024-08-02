

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

function closeGTAPopup() {
    document.getElementById('popupGTA').style.display = 'none';
}

function startRandomIcons() {
    var duration = 10000; // 10 seconds
    var endTime = Date.now() + duration;

    function createIcon() {
        if (Date.now() > endTime) {
            showBlueScr(); // Show the blue screen after 10 seconds
            return;
        }

        // Create a new icon element
        var icon = document.createElement('img');
        icon.src = 'images/warning.png'; // Path to your icon image
        icon.className = 'random-icon';

        // Randomly position the icon on the screen
        icon.style.position = 'absolute';
        icon.style.top = Math.random() * (window.innerHeight - 50) + 'px';
        icon.style.left = Math.random() * (window.innerWidth - 50) + 'px';

        // Append the icon to the body
        document.body.appendChild(icon);

        // Remove the icon after 15 seconds
        setTimeout(function() {
            icon.remove();
        }, duration - (Date.now() - (endTime - duration)));

        // Continue creating icons
        setTimeout(createIcon, 100); // Faster generation
    }

    createIcon();
}

function showBlueScr() {
    var overlay = document.getElementById('blue-scr');
    overlay.style.display = 'flex'; // Show the blue screen
}

function closeBlueScr() {
    window.location.href = 'index.html'; // Redirect to index.html
}

document.getElementById('yesBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    closeGTAPopup(); // Close the GTA window
    startRandomIcons(); // Start generating random icons
});

