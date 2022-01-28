window.onload = function() {
    $("submit").onclick = validateForm;
    $("reset").onclick = clearErrors;
    setDateMin();
}


function $(id) {
    return document.getElementById(id);
}

function validatePhone(phone) {
    var re = /(([0-9]{3}-){2}[0-9]{4})$/;
    return re.test(String(phone));
}   

function validateForm() {
    clearErrors();
    var fname = $("fname").value.trim();
    var lname = $("lname").value.trim();
    var phone = $("phone");
    var valid = true;
    if(!fname) {
        $("fname").classList.add("is-invalid");
        $("fnameError").innerText = " Enter first name.";
        valid = false;
    }
    if(!lname) {
        $("lname").classList.add("is-invalid");
        $("lnameError").innerText = " Enter last name.";
        valid = false;
    }
    if(!phone.value.trim()) {
        $("phone").classList.add("is-invalid");
        $("phoneError").innerText = " Enter phone name.";
        valid = false;
    } else if(!validatePhone(phone.value)) {
        $("phone").classList.add("is-invalid");
        $("phoneError").innerText = " Phone must match xxx-xxx-xxxx";
        valid = false;
    }
    if($("other").checked && !$("otherText").value.trim()) {
        $("otherError").innerHTML = " You've selected other, please enter even type in textbox."
        valid = false;
    } else if (!$("other").checked && $("otherText").value.trim()) {
        $("otherError").innerHTML = " You have entered something in the other box."
        valid = false;
    }

    if(!$("eventdate").value) {
        $("eventdate").classList.add("is-invalid");
        $("eventDateError").innerText = " Enter a date."
    }
    return valid;
}

function setDateMin() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;    
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    today = yyyy+'-'+mm+'-'+dd;
    $("eventdate").setAttribute("min", today);
}

function clearErrors() {
    var spans = document.getElementsByTagName("span");
    for (var i = 0; i < spans.length; i++) {
        spans[i].innerText = "";
    }
    $("fname").classList.remove("is-invalid");
    $("lname").classList.remove("is-invalid");
    $("phone").classList.remove("is-invalid");
    $("eventdate").classList.remove("is-invalid");

}
