async function signup(){

    const data = {

        name:document.getElementById("name").value,

        employeeId:document.getElementById("employeeId").value,

        department:document.getElementById("department").value,

        password:document.getElementById("password").value

    };

    const res = await fetch(

        "http://localhost:5000/api/auth/signup",

        {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(data)

        }

    );

    const result = await res.json();

    alert(result.message);

}