//Function to return education data
export function getContactData(){
    let output =    '<section><h3>Contact Me</h3>' +
                    '<form id="myForm" method="post" action="/CS601%20Final%20Project/scripts/contact.php">' +
                    '<div class="flex-container-data">' +
                    '<div><label for="firstName">First Name : </label>' +
                    '<input type="text" name="firstName" id="firstName" required minlength="2" placeholder="John"></div>' +
                    '<div><label for="lastName">Last Name : </label><input type="text" name="lastName" id="lastName" required minlength="2" placeholder="Doe"></div>' +
                    '<div><label for="email">Your Email : </label><input type="text" name="email" id="email" required minlength="2" placeholder="my@email.com"></div>' +
                    '<div></div><div><label for="message">Message : </label><textarea name="message" id="message" rows="4" cols="40" placeholder="My message to you" required></textarea></div>' +
                    ' <span id="errorMsg"></span><div></div><div><input type="submit" id="submitButton" value="Submit"></div></div></form></section>';
    return output;
}