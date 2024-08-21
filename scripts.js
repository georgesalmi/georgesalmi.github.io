function openTab(evt, tabId) {
    var i, tabcontent, tabbuttons;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }
    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.className += " active";
}

function showEmail(event) {
    event.preventDefault();
    var emailLink = document.getElementById('email-link');
    var emailDisplay = document.getElementById('email-display');

    emailLink.style.opacity = 0;
    setTimeout(function() {
        emailLink.style.display = 'none';
        emailDisplay.textContent = 'gmsalmi@icloud.com';
        emailDisplay.style.opacity = 1;
    }, 300);
}

function showEmail(event) {
    event.preventDefault();
    // Get the <a> element
    const emailLinkElement = document.getElementById('email-link');
    // Create the email link
    const emailLink = '<a href="mailto:your.email@example.com?subject=Inquiry%20from%20your%20website&body=Hello,%20I%20would%20like%20to%20know%20more%20about...">your.email@example.com</a>';
    // Replace the text of the <a> element with the email link
    emailLinkElement.outerHTML = emailLink;
}
