
// Getting submit buttton element
let submitbtn=document.getElementById('sumbmitbtn')

// Getting input box elements 
let firstname = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let mailid = document.getElementById('mail')
let mobileno = document.getElementById('mobileno')
let description = document.getElementById('description')

// Getting Radio button elements in array using queryselectorAll radio buttons
let genderarr = document.querySelectorAll('input[type=radio]')
console.log(genderarr)

//Getting access div element to display the response
let display=document.getElementById('display')

let country=document.getElementById("selectcountry")


submitbtn.addEventListener('click',submitfn)

function submitfn(){
    let fullname=`<p>Full Name : ${firstname.value+' '+lastname.value}</p>`
    let mailidvalue = `<p>Mail Id : ${mailid.value}</p>`
    let mobilenovalue = `<p>Mobile No : ${mobileno.value}</p>`
    let descriptionvalue = `<p>About Yourself : ${description.value}</p>`
    
    let gentervalue=``
    genderarr.forEach((radio,index)=>{
         if(radio.checked){
            gentervalue=`<p>Gender : ${radio.value}</p>`
         }
    })
    let checkboxarray = document.querySelectorAll('input[type=checkbox]')
    let checkboxvalarray=[]
    

    let checkboxvalues=``;
    let li=``;
    console.log(checkboxarray)
    checkboxarray.forEach((language,index)=>{
        if(language.checked){
            checkboxvalarray.push(language.value)
            console.log(checkboxvalarray)
        }
        // else{
        //     let unselectedind=checkboxvalarray.findIndex(ele=> ele===language.value)
        //     checkboxvalarray.splice(unselectedind,1)
        // }

    })
   

    checkboxvalarray.forEach(languageval=>{
        li=li+`<li>${languageval}</li>`
    })
    checkboxvalues=`<div>Favorite Languages : <ul style="list-style-type: square;" id="favlanglist">${li}</ul></div>`
    let conuntryval=`<p>Country : ${country.value}</p>`
    
    let responseheading=`<h3>Response Submited Successfully !</h3>`
    display.innerHTML=responseheading+fullname+mailidvalue+mobilenovalue+gentervalue+checkboxvalues+conuntryval+descriptionvalue

}

function sam(){
    alert(345678)
}