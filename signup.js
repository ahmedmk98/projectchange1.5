// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBZDobon7F9McVCUiOQdnolSjuylU-A5zo",
    authDomain: "project-c03ca.firebaseapp.com",
    projectId: "project-c03ca",
    storageBucket: "project-c03ca.appspot.com",
    messagingSenderId: "71660938145",
    appId: "1:71660938145:web:b4e7bf22f4d3ec4b8221e0",
    measurementId: "G-60DHFFX14C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }
  //signOut

  /*function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }*/

  ///jjjji

  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  }) 