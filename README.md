# Stopwatch
This project was finalized on 2/11/2022. See the progress log below for additional information.

Progress Log:

2/9/2022: In addition to establishing the page's contents in HTML, I have implemented the start and reset features in JavaScript. Some of the remaining items include: (1) creating a functioning stop button, (2) adding CSS to enhance the page's aesthetics, and (3) conducting a final revision of the code for quality.

2/10/2022: I revised the JavaScript that I wrote yesterday. One of the differences is that I used setInterval instead of setTimeout. I also did away with the if statements in favor of a more simplified approach (which can now be seen). The remaining items as of today include: (1) adding CSS to enhance the page's aesthetics, and (2) conducting a final revision of the code for quality. 

2/11/2022: I edited my style.css file to enhance the visual appeal of the page. Additionally, I added the following lines of code to my app.js file:

if (hour.toString().length === 1) {
        hour = "0" + hour;
    }
    if (min.toString().length === 1) {
        min = "0" + min;
    }
    if (sec.toString().length === 1) {
        sec = "0" + sec;
    }
    
This code makes it so that the seconds, minutes, and hours are properly formatted when their values are single digits.
