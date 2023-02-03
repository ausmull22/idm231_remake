// CONVERT DATE FUNCTION

function convert_date() { // Function used to (1) grab the date, (2) take the birthmonth and day, and (3) find the Zodiac.

    // 1st Process - Grab The Date

    let input = document.getElementById("input").value; // Grab the date from the input
    
    console.log(input)

    if (input == "") { // Check if input is empty  
        
        document.getElementById('js-discover-button').style.animation="horizontal-shaking 0.5s";
    
        setTimeout(reset_style_animation, 1000);
        
    } else { // If the input is not empty, proceed with the dispaying the date and zodiac


        // 2nd Process - Take out the Birth Month and Day separately to determine the zodiac.


        let string_date = new Date(input); // Apply the raw date to a new variable that shows the date as a string 
        
        let birthmonth = string_date.getMonth() + 1;  // Grabbing User's birth month from the input date (Adding +1 because value starts at 0) 

        let day = string_date.getDate() + 1; // Grabbing User's birth day of the month from the input date  (Adding +1 because value starts at 0) 
        
    
        // 3rd Process - Find the Zodiac

        // Aries	March 21 - April 19	
        // Taurus	April 20 - May 20	
        // Gemini	May 21 - June 21	
        // Cancer 	June 22 - July 22	
        // Leo 	    July 23 - August 22	
        // Virgo  	August 23 - September 22	
        // Libra 	September 23 - October 23	
        // Scorpio 	October 24 - November 22	
        // Sagittarius	November 23 - December 21	
        // Capricorn 	December 22 - January 19	
        // Aquarius	January 20 - February 18
        // Pisces	February 19 - March 20

        if ((birthmonth == 3 && day > 21) || (birthmonth == 4 && day <= 19)) { // If date is between March 21st and April 19th...

            window.location.href = "zodiacs/aries.html";

        }

        if ((birthmonth == 4 && day > 20) || (birthmonth == 5 && day <= 20)) { // If date is between April 20th and May 20th...

            window.location.href = "zodiacs/taurus.html";

        }

        if ((birthmonth == 5 && day > 21) || (birthmonth == 6 && day <= 21)) {// If date is between May 21st and June 21st...

            window.location.href = "zodiacs/gemini.html"; // Switch to Gemini

        }


        if ((birthmonth == 6 && day > 22) || (birthmonth == 7 && day <= 22)) { // If date is between June 22nd and July 22nd...

            window.location.href = "zodiacs/cancer.html"; // Switch to Cancer               

        }


        if ((birthmonth == 7 && day > 23) || (birthmonth == 8 && day <= 22)) { // If date is between July 23rd and August 22nd...

            window.location.href = "zodiacs/leo.html"; // Switch to Leo                

        }

        if ((birthmonth == 8 && day > 23) || (birthmonth == 9 && day <= 22)) { // If date is between August 23rd and September 22nd...

            window.location.href = "zodiacs/virgo.html"; // Switch to Virgo   

        }


        if ((birthmonth == 9 && day > 23) || (birthmonth == 10 && day <= 23)) { // If date is between September 23rd and October 23rd...

            window.location.href = "zodiacs/libra.html"; // Switch to Libra     

        }

        if ((birthmonth == 10 && day > 24) || (birthmonth == 11 && day <= 22)) { // If date is between October 24th and November 22nd...

            window.location.href = "zodiacs/scorpio.html"; // Switch to Scorpio              

        }

        if ((birthmonth == 11 && day > 23) || (birthmonth == 12 && day <= 21)) { // If date is between November 23rd and December 21st...

            window.location.href = "zodiacs/sagittarius.html"; // Switch to Saggitarus    

        }


        if ((birthmonth == 12 && day > 22) || (birthmonth == 1 && day <= 19)) { // If date is between Decemebr 22nd and January 19th...

            window.location.href = "zodiacs/capricorn.html"; // Switch to Capricorn

        }

        if ((birthmonth == 1 && day > 20) || (birthmonth == 2 && day <= 18)) { // If date is between January 20th and February 18th...

            window.location.href = "zodiacs/aquarius.html"; // Switch to Aquarius                

        }


        if ((birthmonth == 2 && day > 19) || (birthmonth == 3 && day <= 20)) { // If date is between February 19th and March 20th...

            window.location.href = "zodiacs/pisces.html"; // Switch to Pisces

        }


    }

}


document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        convert_date();
    }
});


function reset_style_animation() {

    document.getElementById('js-discover-button').style.animation="none";

}

