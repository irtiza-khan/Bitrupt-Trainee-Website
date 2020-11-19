//Form Validation


//* Form Validation For Contact us Page 
document.querySelector('.main-form').addEventListener('submit', (e) => {

        e.preventDefault();
        const name = document.myForm.name.value;
        const email = document.myForm.email.value;
        const country = document.myForm.country.value;
        const subject = document.myForm.subject.value;
        const message = document.myForm.text.value;
        //Regular Expression for email
        let mailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!name || !email || !country || !subject || !message) {
            validModal('All Fields Are Required', 'Please Enter All fields');
            return false;
        }
        if (!name.match(/^[A-Z]/)) {
            validModal('Full Name Should Start With Capital letter', 'Please Enter Correct Name');
            return false;
        }
        if (!email.match(mailPattern)) {
            validModal('Incorrect Email', 'Please Enter Correct email Address');
            return false;
        }
    }

)


function validModal(message, msg) {
    var modal = document.getElementById("myModal");
    const btn = document.querySelector(".close");
    let modalText = document.getElementById('modal-text');

    if (message && msg) {
        modalText.innerHTML = `${message} <br> ${msg}`;
        modal.style.display = 'block';

        btn.onclick = () => {
                modal.style.display = "none";
            }
            //To Close modal when click on screen
        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

}