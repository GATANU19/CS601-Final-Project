//Function to return about data
export function getAboutData(){
    let output = '<section>' + 
    '<header>' +
        '<h3>About Me</h3>' +
    '</header>' +
    '<p>I live in Clinton, New Jersey with my wife and my teddy bear Samba whose video is below. I love' +
        ' hiking, photography, kayaking and long road trips.</p><br>' +    
    '<video width="180" height="320" controls>' +
        '<source src="../assets/Samba.MP4" type="video/mp4">' +
        'Your browser does not support the video tag.' + 
    '</video><br><br>' +    
    '<h3>Connect with me at</h3>' +
    '<div class="flex-container-social">' +
        '<div class="grow"><a href="https://www.linkedin.com/in/atanughorai88/" target="_blank"><img' +
                    ' src="assets/linkedin.png" alt="Link to Atanu Ghorai LinkedIn Profile" width="50"' +
                    ' height="50"></a></div>' +
        '<div class="grow"><a href="https://twitter.com/Atanu_evil" target="_blank"><img src="assets/twitter.png"' +
                    ' alt="Link to Atanu Ghorai Twitter Profile" width="50" height="50"></a></div>' +
        '<div class="grow"><a href="https://www.facebook.com/atanu.ghorai" target="_blank"><img' +
                    ' src="assets/facebook.png" alt="Link to Atanu Ghorai Facebook Profile" width="50"' + 
                    ' height="50"></a></div>' +
        '<div class="grow"><a href="https://www.instagram.com/atanu_g/" target="_blank"><img' +
                    ' src="assets/instagram.png" alt="Link to Atanu Ghorai Instagram Profile" width="50"' +
                    ' height="50"></a></div>' +
    '</div></section>';
    return output;
}