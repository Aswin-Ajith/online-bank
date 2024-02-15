function registerAccount(){
 let accountName= document.getElementById('accountName').value
 let accountNo= document.getElementById('accountNo').value
 let password= document.getElementById('password').value

 if(accountName==''||accountNo==''||password==''){
    alert('Please fill all the feilds')
 }
 else{
    if(accountNo in localStorage){
        alert('Account number already exists')
    }
    else{
        let account= {
            account_Name: accountName,
            account_No: accountNo,
            account_pw: password,
            account_bal: 0
        }

        localStorage.setItem(account.account_No,JSON.stringify(account))
        alert('Account created successfully!')
        window.location='./login.html'
    }
 }
}

function login(){
    window.location="./login.html"
}