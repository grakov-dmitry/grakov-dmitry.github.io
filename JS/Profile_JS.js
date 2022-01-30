function check(){
    var First_name = document.getElementById('First_name'),
    Last_name = document.getElementById('Last_name'),
    E_mail = document.getElementById('E_mail');

    document.getElementById('Send').disabled = First_name.value && Last_name.value && E_mail.value ? false : "disabled";
    localStorage.setItem('First_name', document.getElementById('First_name').value)
    localStorage.setItem('Last_name', document.getElementById('Last_name').value)
    localStorage.setItem('E_mail', document.getElementById('E_mail').value)
}

(function () {
    var clear = {

    clearuielements: function () {
        var inputs = document.getElementsByClassName("c1");
        for (i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
    },
}
var btnclear = document.getElementById('btnclear');
    btnclear.addEventListener('click', clear.clearuielements, false);
    
    window.onload = function () {
        clear.loaddata();
    }
})();