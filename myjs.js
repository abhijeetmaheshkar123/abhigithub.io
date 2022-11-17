function myfunc(){
    // for First Name
    let letters = /^[a-zA-Z ]*$/;

    let text=document.myform.fname.value;
    let pattern = /[A-Z][a-z]+.\s/;
    let result = text.match(pattern);
    localStorage.setItem("firstname",result);
    if(text.match(letters) ){
        document.getElementById("ll").innerHTML="valid";
        return true;
    }
    else{
        document.getElementById("ll").innerHTML="invalid";
        return false;
    }
    // for email
    var a=document.myform.email.value;
    localStorage.setItem("emailvalue",a);

    // for pan number pattern
    let pan=document.myform.pan.value;
    var reg=/[A-Z][A-Z][A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9][A-Z]/;
    let rege=pan.match(reg);
    if(pan==rege){
        return true;
    }
    else{
        return false
    }
    //enter only numbers in loan amount
    var loan=document.getElementById("a4").value;
    loan=Number.parseInt(loan)
    if(isNaN(loan)||loan<1)
    {
        
        return false
        
    }
   
    
}


// for converting number into word in loan ammount 
let c = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
let d = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function convert(){
    let value=document.getElementById("a4").value;
    
    if ((value = value.toString()).length > 9) return 'overflow';
    n = ('000000000' + value).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (c[Number(n[1])] || d[n[1][0]] + ' ' + c[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (c[Number(n[2])] || d[n[2][0]] + ' ' + c[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (c[Number(n[3])] || d[n[3][0]] + ' ' + c[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (c[Number(n[4])] || d[n[4][0]] + ' ' + c[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (c[Number(n[5])] || d[n[5][0]] + ' ' + c[n[5][1]])+ 'Rs'  :+ '';
    
    document.getElementById("bb").innerHTML=str;
}


