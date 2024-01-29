
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getDatabase, ref ,set ,get ,child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBb0kkpETwxfoffEFAhL2vYLK0nzPJbe6I",
    authDomain: "subscriptionwebpage.firebaseapp.com",
    databaseURL: "https://subscriptionwebpage-default-rtdb.firebaseio.com",
    projectId: "subscriptionwebpage",
    storageBucket: "subscriptionwebpage.appspot.com",
    messagingSenderId: "440680549375",
    appId: "1:440680549375:web:5a0e74f231d59c748275ca",
    measurementId: "G-MXBKKXVZGN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

    const db = getDatabase(app);

    document.getElementById("submit").addEventListener("click",function(e){
        e.preventDefault();
        set(ref(db, 'users/'+document.getElementById("email").value), {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
          });
          alert("Thank you for subscribing");
    });


    $(document).ready(function() {
        $("#submit").click(function() {
        alert("Form Submitted Successfully !");
        });
    });


  