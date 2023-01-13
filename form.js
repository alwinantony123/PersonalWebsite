var firebaseConfig = {
    apiKey: "AIzaSyDdyrSfu08GbnFCN8ODS_kRQtKU1GOhIBU",
    authDomain: "personalwebsite-5e8f8.firebaseapp.com",
    databaseURL: "https://personalwebsite-5e8f8-default-rtdb.firebaseio.com",
    projectId: "personalwebsite-5e8f8",
    storageBucket: "personalwebsite-5e8f8.appspot.com",
    messagingSenderId: "521366644080",
    appId: "1:521366644080:web:3b3364cc833a483be5dbb5"
  };

  firebase.initializeApp(firebaseConfig);
  document.getElementById('contactForm').addEventListener("submit", submitForm)
  function submitForm() {
    var name = document.getElementById("formName").value; 
    var place = document.getElementById("formplace").value;
    var email = document.getElementById("formEmail").value;
    var phonenumber = document.getElementById("formPhonenumber").value;
    var message = document.getElementById("formMessage").value;
    
    // Add a new message to Firebase
    firebase.database().ref("messages").push({
      name: name,
      place: place,
      email: email,
      phonenumber: phonenumber,
      message: message
    });
  
    // Clear form fields
    // document.getElementById("name").value = "";
    // document.getElementById("email").value = "";
    document.getElementById("formName").value = ""; 
    document.getElementById("formplace").value = "";
    document.getElementById("formEmail").value = "";
    document.getElementById("formPhonenumber").value = "";
    document.getElementById("formMessage").value = "";
  }






  // var contactFormDB = firebase.database().ref('contactform')

  // document.getElementById('contactForm').addEventListener("submit", submitForm)
  // function submitForm(e) {
  //   e.preventDefault();

  //   var name =getElementVal("formName");
  //   var place = getElementVal("formPlace");
  //   var emailid = getElementVal("formEmail");
  //   var phoneNumber = getElementVal("formPhonenumber")
  //   var msgContent = getElementVal("formMessage");

  //   saveMessages(name,place, emailid, phoneNumber, msgContent);
  // }

  // const saveMessages =(name, place, emailid, phoneNumber, msgContent)=>{
  //   var newContactForm =contactFormDB.push();

  //   newContactForm.set({
  //       name : name,
  //       place : place,
  //       emailid : emailid,
  //       phoneNumber : phoneNumber,
  //       msgContent : msgContent,
  //   });
  // }

  // const getElementVal = (id) =>{
  //   return document.getElementById(id).value
  // }