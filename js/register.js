// // Validate Contact Begin

function checkName_Contact() {
  var name = document.getElementById("name").value;
  var check_error_name = document.getElementById("error_name");
  var regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;

  if (name == "") {
    check_error_name.innerHTML = "Tên người không được để chống";
  } else if (!regexName.test(name)) {
    check_error_name.innerHTML = "Tên người không hợp lệ";
  } else {
    check_error_name.innerHTML = "";
    return name;
  }
}

function checkEmail_Contact() {
  var email = document.getElementById("email").value;
  var check_error_email = document.getElementById("error_email");
  var regexEmail =
    /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

  if (email == "") {
    check_error_email.innerHTML = "Email không được để chống";
  } else if (!regexEmail.test(email)) {
    check_error_email.innerHTML = "Email không hợp lệ";
  } else {
    check_error_email.innerHTML = "";
    return email;
  }
}

function checkMessage_Contact() {
  var message = document.getElementById("message").value;
  var check_error_message = document.getElementById("error_message");

  if (message == "") {
    check_error_message.innerHTML = "Tin nhắn không được để chống";
  } else {
    check_error_message.innerHTML = "";
    return message;
  }
}

function checkContact() {
  var name = checkName_Contact();
  var email = checkEmail_Contact();
  var message = checkMessage_Contact();

  if (name && email && message) {
    let persons = localStorage.getItem("persons")
      ? JSON.parse(localStorage.getItem("persons"))
      : [];
    persons.push({
      name: name,
      email: email,
      message: message,
    });

    localStorage.setItem("persons", JSON.stringify(persons));
    alert("Gửi thành công");
    this.renderList();
  }
}

function renderList() {
  let persons = localStorage.getItem("persons")
    ? JSON.parse(localStorage.getItem("persons"))
    : [];
  var check = localStorage.getItem("check");

  if (persons.length === 0) {
    document.getElementById("list-person").style.display = "none";
    return false;
  } else {
    document.getElementById("list-person").style.display = "block";
  }

  if (check == 1) {
    document.getElementById("sign-in-dashboard").style.display = "none";
  } else {
    document.getElementById("sign-in-dashboard").style.display = "block";
    window.location.href = "login.html";
  }

  var tableContent = `<tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Message</th></tr>`;

  persons.forEach((person, index) => {
    index++;
    tableContent += `<tr>
        <td>${index}</td>
        <td>${person.name}</td>
        <td>${person.email}</td>
        <td>${person.message}</td>
        </tr>`;
  });
  document.getElementById("grid-persons").innerHTML = tableContent;
}

// // Validate Contact End

// Validate Login Begin

function validateLogin() {
  var login_username = document.getElementById("login-username").value;
  var login_password = document.getElementById("login-password").value;

  if (
    login_username == localStorage.getItem("username") &&
    login_password == localStorage.getItem("password")
  ) {
    localStorage.setItem("check", 1);
    alert("Đăng nhập thành công");
    window.location.href = "dashboard.html";
  } else if (login_username == "" && login_password == "") {
    alert("Vui lòng nhập tên tài khoản và mật khẩu để đăng nhập!");
  } else {
    alert("Sai tài khoản hoặc mật khẩu");
  }
}

function checkLogin() {
  if (localStorage.getItem("check") == 1) {
    window.location.href = "dashboard.html";
  } else {
    validateLogin();
  }
}

function logOut() {
  localStorage.setItem("check", 0);
  window.location.href = "login.html";
}

// Validate Login End

// Validate Register Begin

function checkUsername_Register() {
  var username_register = document.getElementById("register-username").value;
  var check_error_username = document.getElementById("error_register_username");
  var regexUsername = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

  if (username_register == "") {
    check_error_username.innerHTML = "Tên người không được để chống";
  } else if (!regexUsername.test(username_register)) {
    check_error_username.innerHTML = "Tên người không hợp lệ";
  } else {
    check_error_username.innerHTML = "";
    return username_register;
  }
}

function checkEmail_Register() {
  var email_register = document.getElementById("register-email").value;
  var check_error_email = document.getElementById("error_register_email");
  var regexEmail =
    /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

  if (email_register == "") {
    check_error_email.innerHTML = "Email không được để chống";
  } else if (!regexEmail.test(email_register)) {
    check_error_email.innerHTML = "Email không hợp lệ";
  } else {
    check_error_email.innerHTML = "";
    return email_register;
  }
}

function checkPass_Register() {
  var pass_register = document.getElementById("register-pass").value;
  var check_error_pass = document.getElementById("error_register_password");
  var regexPass = /\ /;

  if (pass_register == "") {
    check_error_pass.innerHTML = "Mật khẩu không được để chống";
  } else if (regexPass.test(pass_register)) {
    check_error_pass.innerHTML = "Mật khẩu không hợp lệ";
  } else {
    check_error_pass.innerHTML = "";
    return pass_register;
  }
}

function checkCon_Pass_Register() {
  var con_pass = document.getElementById("register-pass-con").value;
  var check_error_con_pass = document.getElementById(
    "error_register_password_con"
  );
  var regexPass = /\ /;
  var pass = checkPass_Register();

  if (con_pass == "") {
    check_error_con_pass.innerHTML = "Mật khẩu không được để chống";
  } else if (regexPass.test(con_pass)) {
    check_error_con_pass.innerHTML = "Mật khẩu không hợp lệ";
  } else if (con_pass != pass) {
    check_error_con_pass.innerHTML = "Mật khẩu không trùng khớp";
  } else {
    check_error_con_pass.innerHTML = "";
    return con_pass;
  }
}

function validateRegister() {
  var username = checkUsername_Register();
  var email = checkEmail_Register();
  var password = checkCon_Pass_Register();
  var con_pass = checkCon_Pass_Register();

  if (username && email && password && con_pass) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Đăng ký thành công");
    window.location.href = "login.html";
  } else {
    alert("Hãy điền đẩy đủ thông tin");
  }
}

// Validate Register End
