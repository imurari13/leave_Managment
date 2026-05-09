async function login(){

    const data = {

        employeeId:document.getElementById("employeeId").value,

        password:document.getElementById("password").value

    };

    const res = await fetch(

        "http://localhost:5000/api/auth/login",

        {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(data)

        }

    );

    const result = await res.json();

    if(result.user){

        localStorage.setItem(

            "user",

            JSON.stringify(result.user)

        );

        window.location.href = "dashboard.html";

    }
    else{

        alert(result.message);

    }

}