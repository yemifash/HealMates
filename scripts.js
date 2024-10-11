// Function to show the mobile navigation menu
function showMenu() {
    document.getElementById('nav-links').style.display = 'block';
}

// Function to hide the mobile navigation menu
function hideMenu() {
    document.getElementById('nav-links').style.display = 'none';
}

// Function to handle form submission and display a confirmation message
function submitForm() {
    document.getElementById('registration-form').style.display = 'none';

    document.getElementById('confirmation-message').style.display = 'block';

    return false;
}

// Function to handle poll submission
function submitVote() {
    const selectedOption = document.querySelector('input[name="support-method"]:checked');
    
    if (selectedOption) {
        document.getElementById('poll-results').style.display = 'block'; 
    } else {
        alert('Please select an option before voting.');
    }
}

// Function to scroll back to the top of the page (optional feature)
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show the scroll-to-top button when the user scrolls down (optional feature)
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById('scroll-to-top-btn').style.display = 'block';
    } else {
        document.getElementById('scroll-to-top-btn').style.display = 'none';
    }
};
