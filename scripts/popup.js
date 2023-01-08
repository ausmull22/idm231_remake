let popup = 1; // Variable set to open pop-up on start 

function popup_exit() { // Function to stop displaying popup
    document.getElementById('popup').style.animationName="exit"; // Activate animation set for pop-up to exit out 
    setTimeout(show_hide, 1000); // Once animation is complete proceed to close pop-up using show_hide()
}

function popup_activate() { // Function to start displaying popup

    document.getElementById('popup').style.display="inline"; // Display Popup 
    document.getElementById('popup').style.animationName="startup"; // Activate "Startup" Animation
    popup = 1;

}

function show_hide() // function used to close pop-up 
{
    if (popup==1) // If popup equals 1
    
        {
            document.getElementById('popup').style.display="none"; // Stop displaying popup
            return popup=0;
        }
        
    else // If not...
        
        {
            document.getElementById('popup').style.display="inline"; // Display popup
            return popup=1;
        }
    
}

