const correctPasswords = ['ponedeljek', 'torek', 'sreda', 'cetrtek', 'petek', 'sobota'];
let currentPasswordIndex = 0;

const logo = document.getElementById('logo');
const passwordInput = document.getElementById('password-input');
const statusMessage = document.getElementById('status-message');

// Add an array of image URLs in the desired order
const images = ['tretja_logo_1.png', 'tretja_logo_2.png', 'tretja_logo_3.png', 'tretja_logo_4.png', 'tretja_logo_5.png', 'tretja_logo_6.png'];

document.getElementById('submit-button').addEventListener('click', function () {
    const userPassword = passwordInput.value;
    
    const element = document.getElementById("besedilo");

if (element) {
    document.getElementById("besedilo").remove();
} else {

}
    
    if (correctPasswords.includes(userPassword)) {
        logo.src = images[currentPasswordIndex];
        currentPasswordIndex++;
        

        if (currentPasswordIndex === correctPasswords.length) {
            statusMessage.textContent = 'Iskrene čestitke, uspelo ti je doseči cilj. Končno nagrado lahko prevzameš v učilnici Pridem na Tretjo, ki se nahaja v pritličju šole. Hvala za sodelovanje. Ekipa III. gimnazije Maribor';
            passwordInput.disabled = true;
            
            const element2 = document.getElementById("password-input");

                if (element2) {
                    document.getElementById("password-input").remove();
                    } else {

                }
            const element3 = document.getElementById("submit-button");

                if (element3) {
                    document.getElementById("submit-button").remove();
                    } else {

                }

        } else {
            statusMessage.textContent = 'Odlično! Čestitamo, tvoj odgovor je pravilen. Nadaljuj s svojim odličnim delom in uživaj v izzivih, ki te še čakaj.';
            
        }
    } else {
        statusMessage.textContent = 'Žal, odgovor ni pravilen. Prosim, poskusi znova.';
    }
    passwordInput.value = '';
});


