var firebaseConfig = {
    apiKey: "AIzaSyApJyVkBmioQPGrpNikqP1yAlR9DMODGd4",
    authDomain: "taxi-booking-form-data.firebaseapp.com",
    databaseURL: "https://taxi-booking-form-data-default-rtdb.firebaseio.com",
    projectId: "taxi-booking-form-data",
    storageBucket: "taxi-booking-form-data.appspot.com",
    messagingSenderId: "928582427056",
    appId: "1:928582427056:web:051efd5fa88dfb39687675",
    measurementId: "G-SL9QS2WZLW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  // Reference messages collection
  var messagesRef = firebase.database().ref('Chennai-Drop-Taxi/taxi-book');
  
  // Listen for form submit
  document.getElementById('bookingForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var phone = getInputVal('phone');
    var pickup = getInputVal('pickup');
    var drop = getInputVal('drop');
    var date = getInputVal('date');
    var ser = getInputVal('ser');
    var cars = getInputVal('cars');
  
  
    // Save message
    saveMessage(name, phone, pickup, drop, date, ser, cars);
   //alert("You're Booking has been submitted.Soon we'll contact you Or You can contact us on whatsapp anytime.");
    // Show alert
    document.querySelector('.alert').style.display = 'block';
    
    
  
    // Hide alert after 3 seconds
    setTimeout(function(){
     document.querySelector('.alert').style.display = 'none';
    },7000);
    
    //window.open('bookingSuccess.html', '_blank');
  
    // Clear form
    document.getElementById('bookingForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, phone, pickup, drop, date, ser, cars){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name:name,
      phone:phone,
      pickup:pickup,
      drop:drop,
      date:date,
      ser:ser,
      cars:cars
    });
  }
