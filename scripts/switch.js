
let toggle = true /* Set toggle to true */

function image_switch() { /* Function to toggle between different icons */


    if (!toggle) {  /* If toggle is not equal to true... */

        toggle = true;  /* Set toggle to true */
        document.getElementById("zodiac_toggle").style.display = "block";  /* Enable zodiac icons */
        document.getElementById("cereal_toggle").style.display = "none"; /* Disable cereal icons */
        return;


    }
    
    if (toggle) { /* If toggle is equal to true... */

        toggle = false; /* Set toggle to false */
        document.getElementById("zodiac_toggle").style.display = "none"; /* Disable zodiac icons */
        document.getElementById("cereal_toggle").style.display = "block"; /* Enable cereal icons */
        return;


    } 
        
}
