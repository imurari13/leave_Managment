const user = JSON.parse(

    localStorage.getItem("user")

);

document.getElementById(

    "username"

).innerText = user.name;

document.getElementById(

    "department"

).innerText = user.department;

async function applyLeave(){

    const leaveData = {

        employeeId:user.employeeId,

        leaveType:document.getElementById("leaveType").value,

        startDate:document.getElementById("startDate").value,

        endDate:document.getElementById("endDate").value,

        reason:document.getElementById("reason").value

    };

    await fetch(

        "http://localhost:5000/api/leave/apply",

        {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(leaveData)

        }

    );

    loadLeaves();

}

async function loadLeaves(){

    const res = await fetch(

        `http://localhost:5000/api/leave/${user.employeeId}`

    );

    const leaves = await res.json();

    let output = "";

    leaves.reverse().forEach((leave)=>{

        output += `

        <div class="leave-card">

            <h3>${leave.leaveType}</h3>

            <p>

                ${leave.startDate}
                -
                ${leave.endDate}

            </p>

            <p>${leave.reason}</p>

            <span class="status">

                ${leave.status}

            </span>

        </div>

        `;

    });

    document.getElementById(

        "leaveContainer"

    ).innerHTML = output;

}

loadLeaves();