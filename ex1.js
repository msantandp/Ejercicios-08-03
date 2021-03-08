var courses = [
    {
        pos: 0,
        course: "Curso1",
        range: [18, 21]
    },
    {
        pos: 1,
        course: "Curso2",
        range: [22, 25]
    },
    {
        pos: 2,
        course: "Curso2",
        range: [26, 30]
    },
];

var students = [
    {
        dni: "123456",
        name: "Javier",
        phnoe: "654321",
        email: "javier@email.com",
        bDate: "1998/29/05",
        course: "Curso3",
        legajo: "ACurso31234562021",
        grades: [90,70,80,50,75,85,100,40]
    }
];


function submitStudent(){
    let name = document.getElementById("iName").value;
    let email = document.getElementById("iEmail").value;
    let dni = document.getElementById("iDni").value;
    let bDate = document.getElementById("iBDate").value;
    let phone = document.getElementById("iPhone").value;
    let nLegajo = document.getElementById("iNL").value;
    let course = document.getElementById("sCourse").value;

    let vLegajo = `A${course}${dni}2021`

    //Validate edad 
    // if (!(2021-bDate.substring(0,4) >= 18)){
    //     alert("Debes tener mas de 18 años!")
    // }

    //Validate nombre
    // if(phone.length!==10){
    //     alert("Campo Telefono no puede exceder los 10 caracteres!");
    // }

    //Validate email
    // if(email.length>50){
    //     alert("Campo email no puede exceder los 50 caracteres!");
    // }

    //Validar legajo
    // if(nLegajo!==vLegajo)
    //     alert("Numero de legajo incorrecto")

    //Validar course
    if (!courses[course].range.indexOf(parseInt(2021 - fecha.value.substring(0, 4))) == -1)
        alert("No pertenece al rango de edad del curso");

    //Ocultar form
    // document.getElementById("dataForm").classList.add("d-none");
}

