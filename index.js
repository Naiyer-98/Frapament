function handleSubmit() {
  let form = document.getElementById("myform");
  let data = new FormData(form);
  let username = data.get("name");
  let email = data.get("email");
  let password = data.get("password");
  let age = data.get("age");

  //name validation

  if (username != "") {
    if (username.length < 5) {
      alert("minimum 5 characters proceed");
    } else if (username.length > 15) {
      alert("maximum 15 characters proceed");
    } else if (username) {
    } else {
      alert("valid name");
    }
  } else {
    alert("please provide a name");
  }

  //email validation
  if (email != "") {
    if (email.length < 5) {
      alert("minimum 5 characters proceed");
    } else if (email.length > 25) {
      alert("maximum 25 characters proceed");
    } else if (!/[_@!]/.test(email)) {
      alert("no special character found");
    } else {
      alert("valid email");
    }
  } else {
    alert("Please provide email");
  }

  //validating password: 8 <= username <=15, min 1 -> {(a-z), (A-Z), (0-9), (_ or @)}
  //   if (password != "") {
  //     if (password.length < 8) {
  //       alert("Too short- password should have minimum 8 characters");
  //     } else if (password.length > 15) {
  //       alert("Too long- password should have maximum 15 characters");
  //     } else if (!/[a-z]/.test(password)) {
  //       alert("no lower case found");
  //     } else if (!/[A-Z]/.test(password)) {
  //       alert("no upper case found");
  //     } else if (!/[0-9]/.test(password)) {
  //       alert("no digit found");
  //     } else if (!/[_@]/.test(password)) {
  //       alert("no special character");
  //     } else {
  //       alert("Valid password");
  //     }
  //   } else {
  //     alert("please provide a password!");
  //   }

  if (password != "") {
    if (password.length < 8 || password.length > 15) {
      alert("password should have minimum 8 & max 15 character");
    } else if (!/[a-zA-Z0-9_@]/.test(password)) {
      alert("no lower case found");
    } else if (!/[A-Z]/.test(password)) {
      alert("no upper case found");
    } else {
      alert("Valid password");
    }
  } else {
    alert("please provide a password!");
  }

  //age validation
  if (age != "") {  
    if (age.length < 18) {
      alert("You are not adult now!");
    } else {
      alert("Valid Age");
    }
  } else {
    alert("please provide your age");
  }
}

