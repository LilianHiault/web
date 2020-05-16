function request (username, userpwd) {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        console.log(this.response);
        if (this.readyState == 4 && this.status == 200) {
            login.innerHTML =  this.response;
        }
    };
    httpRequest.open('POST', 'htbin/login.py', true);
    httpRequest.setRequestHeader('Content-Type', 'text/plain');
    httpRequest.send('username=' + encodeURIComponent(username) + '&' + 'userpwd=' + encodeURIComponent(userpwd));
}


var form = document.getElementById("login");
var test = document.querySelector("login");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var userpwd = document.getElementById("userpwd").value;
    request(username, userpwd);
});
