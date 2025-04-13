/*
         Name: Aidress Qadeer
         File: script.js
         Date: 10 April 2025
         Description: JavaScript for the futuristic, accessible web page.
         Handles the advanced droplet effect for the "Click Me!" button. On click, the button fades out with a droplet effect.
         On moving to the left, it also triggers a radar pulse effect before reappearing.
*/

document.addEventListener('DOMContentLoaded', function() {
    const demoButton = document.getElementById('demo-button');
    let isOnLeft = true; // Button initially at left (10%)

    demoButton.addEventListener('click', function() {
        demoButton.classList.add('droplet-out');
    });

    demoButton.addEventListener('animationend', function(e) {
        // When dropletOut finishes:
        if (e.animationName === 'dropletOut') {
            demoButton.classList.remove('droplet-out');
            let direction;
            if (isOnLeft) {
                // Move to right
                demoButton.style.left = "70%";
                direction = "right";
            } else {
                // Move to left
                demoButton.style.left = "10%";
                direction = "left";
            }
            // Toggle for next click
            isOnLeft = !isOnLeft;
            // If the button is now moving left, add the radar effect
            if (direction === "left") {
                demoButton.classList.add('radar');
            }
            // Start droplet-in animation
            demoButton.classList.add('droplet-in');
        } else if (e.animationName === 'dropletIn') {
            demoButton.classList.remove('droplet-in');
            // Remove radar effect after its duration (if added)
            if (demoButton.classList.contains('radar')) {
                setTimeout(() => {
                    demoButton.classList.remove('radar');
                }, 1000);
            }
        }
    });
});
