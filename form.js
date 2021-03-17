var firebaseConfig = {
    apiKey: "AIzaSyDjSEbagstjqJpv2sg8Ha9WSBWl5-QIOuM",
    authDomain: "corona-website-866df.firebaseapp.com",
    databaseURL: "https://corona-website-866df-default-rtdb.firebaseio.com",
    projectId: "corona-website-866df",
    storageBucket: "corona-website-866df.appspot.com",
    messagingSenderId: "1087760030562",
    appId: "1:1087760030562:web:a995885048bcc7b1536a3b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function readResults(year){
  ref.on('value', (data) => {
   ranks=data.val();
   document.getElementById("result1").innerHTML="<br> 1."+ranks[1];
   document.getElementById("result2").innerHTML="<br> 1."+ranks[2];
   document.getElementById("result3").innerHTML="<br> 1."+ranks[3];
  } )
}
  function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}
