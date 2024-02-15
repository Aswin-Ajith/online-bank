function loginAccount(event) {
    event.preventDefault()
    const accountNo = document.getElementById('accountNo').value
    const acntpw = document.getElementById('password').value

    if (accountNo == '' || acntpw == '') {
        alert('Please fill all the feilds')
    }
    else {
        if (accountNo in localStorage) {
            const data = JSON.parse(localStorage.getItem(accountNo));
            if (acntpw == data.account_pw) {
                console.log("Jbdahsbd");
                window.location = './home.html';    
                localStorage.setItem(`Logged in`, JSON.stringify(data))        
            }
            else {
                alert('Incorrect password')
                acntpw.value = "";
            }
        }
        else {
            alert('Account does not exist')
        }
    }
}

function register(){
    window.location="./register.html"
}