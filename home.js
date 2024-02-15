let logged= JSON.parse(localStorage.getItem('Logged in'))
console.log(logged);
document.getElementById('welcome').innerHTML=`<h1 id="welcome" class="">Welcome ${logged.account_Name}</h1>`
document.getElementById('newBal').innerHTML=`<p class="text-white text-center fs-3 mt-5" id="newBal">Your Balance: ${logged.account_bal}</p>`

function deposit(){
    let depositAmount = document.getElementById('depAmount').value
    let depositpw = document.getElementById('deppw').value
    let account= JSON.parse(localStorage.getItem(logged.account_No))
    if(depositAmount=="" || depositpw ==""){
        alert('Please fill all the fields')
    }
    else if(depositpw==logged.account_pw){
        if(depositAmount<100){
            alert('Deposit amount must be atleast 100rs')
        }
        else{
            logged.account_bal= parseInt(logged.account_bal) + parseInt(depositAmount)
            alert('Amount deposited successfully')
            localStorage.setItem('Logged in',JSON.stringify(logged))
            localStorage.setItem(account.account_No,JSON.stringify(logged))
            let allInputs= document.getElementsByTagName('input')
            for(i=1;i<allInputs.length;i++){
                allInputs[i].value=""
            }
            location.reload()
        }
    }
    else{
        alert('Invalid Password')
    }
}

function withdraw(){
    let withdrawAmount = document.getElementById('withAmount').value
    let withdrawpw = document.getElementById('withpw').value
    let account= JSON.parse(localStorage.getItem(logged.account_No))
    if(withdrawAmount=="" || withdrawpw ==""){
        alert('Please fill all the fields')
    }
    else if(withdrawpw==logged.account_pw){
        if(withdrawAmount<200){
            alert('Withdrawal amount must be atleast 200rs')
        }
        else{
            logged.account_bal= parseInt(logged.account_bal) - parseInt(withdrawAmount)
            alert('Amount withdrawn successfully')
            localStorage.setItem('Logged in',JSON.stringify(logged))
            localStorage.setItem(account.account_No,JSON.stringify(logged))
            let allInputs= document.getElementsByTagName('input')
            for(i=1;i<allInputs.length;i++){
                allInputs[i].value=""
            }
            location.reload()
        }
    }
    else{
        alert('Invalid Password')
    }
}



function logout(){
    localStorage.removeItem('Logged in')
    window.location="./login.html"
}