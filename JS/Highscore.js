
(function () {
    var Person = {
        First_name: "",
        Last_name: "",
        E_mail:"",
        Score:""
    };


    var applogic = {

        clearuielements: function () {
            var inputs = document.getElementsByClassName("c1");
            for (i = 0; i < inputs.length; i++) {
                inputs[i].value = "";
            }
        },

        saveitem: function () {
            var lscount = localStorage.length;
            var inputs = document.getElementsByClassName("c1");
            Person.First_name = localStorage.getItem('First_name');
            Person.Last_name = localStorage.getItem('Last_name');
            Person.E_mail = localStorage.getItem('E_mail');
            Person.Score = localStorage.getItem('Score');
            localStorage.setItem("Person_" + lscount, JSON.stringify(Person));
            location.reload();
        },

        loaddata: function () {
            var datacount = localStorage.length-1;
            if (datacount > 0)
            {
                var render = "<table border='0' width='445px' background-color='rgba(0,0,0,.5)'     padding-top= '30px' align='center'>";
                render += "<tr><th>First name</th><th>Last name</th><th>E-mail</th><th>Score</th></tr>";
                for (i = 4; i < datacount; i++) {
                    var key = localStorage.key(i);
                    var person = localStorage.getItem(key);
                    var data = JSON.parse(person);

                    render += "<tr><td>" + data.First_name + " </td>";
                    render += "<td>" + data.Last_name + "</td>";
                    render += "<td>" + data.E_mail + "</td>";
                    render += "<td>" + data.Score + "</td>";
                }
                render+="</table>";
                dvcontainer.innerHTML = render;
            }
        },

        clearstorage: function () {
            var storagecount = localStorage.length;
            if (storagecount > 0)
            {
                for (i = 0; i < storagecount; i++) {
                    localStorage.clear();
                }
            }
            window.location.reload();
        }
    };

    window.onload = function () {
        applogic.loaddata();
        
    };
})();