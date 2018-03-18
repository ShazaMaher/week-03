
// define local variable to be used inside the js file.
var firstname =document.forms["firstform"]["first-name"].value;
var lastname = document.forms["firstform"]["last-name"].value; 
var country = document.forms["firstform"]["country"].value;
var streetaddress = document.forms["firstform"]["street-address"].value;
var postcode =document.forms["firstform"]["post-code"].value;
var profiledescription=document.forms["firstform"]["fname"].value;
var shippingaddress=document.forms["firstform"]["shipping-address"].value;
var email=document.forms["secondform"]["email"].value;
var phone=document.forms["secondform"]["phone"].value;
var password = document.forms["secondform"]["password"].value;
var repassword=document.forms["secondform"]["re-password"].value;
var newsletter=document.forms["secondform"]["fname"].value;
var creditcardname=document.forms["fourthform"]["name_on_card"].value;
var cardtype=document.forms["fourthform"]["card_type"].value;
var creditcardnumber=document.forms["fourthform"]["credit-card-number"].value;
var expirymonth=document.forms["fourthform"]["expiry_month"].value;
var expiryyear=document.forms["fourthform"]["expiry-year"].value;
var ccv=document.forms["fourthform"]["ccv"].value;

//validate profile description , 500 letters max

//Allow only valid email addresses.
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(secondform.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

//Allow only valid phone numbers

//	Minimum 10 characters, uppercase and lowercase letters

// Minimum 10 characters, uppercase and lowercase letters

//One radio option must be selected

//Must be possible to select 0, 1 or many options.

//Must be possible to select 0, 1 or many options.

//Only numbers allowed. Exactly 16 digits.

//Only numbers. Exactly 3 digits.








