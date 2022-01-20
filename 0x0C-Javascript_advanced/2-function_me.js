function welcomeMessage(fullName) {

    function closure() {
        alert(`Welcome ${fullName}`);
    }

    return closure;
}

var guillaume = welcomeMessage('Guillaume');
var alex = welcomeMessage('Alex');
var frd = welcomeMessage('Fred');
