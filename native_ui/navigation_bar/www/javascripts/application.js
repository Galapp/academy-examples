steroids.view.navigationBar.show("Phoenix Foundation");

// Set up our login text element
var loginText = null;

document.addEventListener("DOMContentLoaded", function() {
  loginText = document.querySelector("#login-text");
});

// Login and logout buttons

var loginButton = new steroids.buttons.NavigationBarButton();
loginButton.title = "Log in";

var logoutButton = new steroids.buttons.NavigationBarButton();
logoutButton.title = "Log out";

loginButton.onTap = function() {
  loginText.textContent = "Welcome, Agnus M.!";
  steroids.view.navigationBar.setButtons({
    right: [logoutButton]
  });
};

logoutButton.onTap = function() {
  loginText.textContent = "Please log in.";
  steroids.view.navigationBar.setButtons({
    right: [loginButton]
  });
}

// Initially display the login button

steroids.view.navigationBar.setButtons({
  right: [loginButton]
});
