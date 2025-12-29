function login() {
    let id = document.getElementById("loginId").value;
    let pass = document.getElementById("password").value;

    // Dummy credentials
    if (id === "admin" && pass === "1234") {
      alert("Login Successful!");
      window.open("https://www.amazon.in", "_blank");
    } else {
      document.getElementById("msg").innerText = "Invalid Login!";
    }
  }