//adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    //console.log("This DOM has finished loading");

    const submitButton = document.querySelector("#submit")
   
    //submitButton.addEventListener('click', () =>{
        //console.log("Submit button has been clicked");
    
        //submitButton.innerText = `Clicked`;
    const input = prompt('Enter your score');
    //console.log(Number(input));
});

function generateGrade(input) {
    if (typeof input !== 'number') {
        return 'Enter a valid number';
    } if (input < 30) {
        return 'E';
    }

}
