var courses = [
    {
        course: "Curso1",
        range: [18, 19, 20, 21]
    },
    {
        course: "Curso2",
        range: [22, 23, 24, 25]
    },
    {
        course: "Curso2",
        range: [26, 27, 28, 29, 30]
    },
];

var subjects = ["Q","M","C","F","H","B","I","Id"];

var students = [
    {
        dni: "123456",
        name: "Javier",
        phone: "654321",
        email: "javier@email.com",
        bDate: "1998/29/05",
        course: "Curso3",
        legajo: "ACurso31234562021",
        grades: [90,70,80,50,75,85,100,40]
    }
];

var posStudent = 0;

//Inicializar tabla
updateTable();


function submitStudent(){
    let name = document.getElementById("iName").value;
    let email = document.getElementById("iEmail").value;
    let dni = document.getElementById("iDni").value;
    let bDate = document.getElementById("iBDate").value;
    let phone = document.getElementById("iPhone").value;
    let nLegajo = document.getElementById("iNL").value;
    let course = document.getElementById("sCourse").value;

    let vLegajo = `A${course}${dni}2021`
    let flag = true;


    //Validate edad 
    if (!(2021-bDate.substring(0,4) >= 18)){
        alert("Debes tener mas de 18 años!")
        flag = false;
    }

    //Validate nombre
    if(phone.length!==10){
        alert("Campo Telefono no puede exceder los 10 caracteres!");
        flag = false;
    }

    //Validate email
    if(email.length>50){
        alert("Campo email no puede exceder los 50 caracteres!");
        flag = false;
    }

    //Validar legajo
    if(nLegajo!==vLegajo){
        alert("Numero de legajo incorrecto")
        flag = false;
    }

    //Validar course
    if (courses[course].range.indexOf(parseInt(2021 - bDate.substring(0, 4))) == -1){
        alert("No pertenece al rango de edad del curso");
        flag = false;
    }

    //Ocultar form
    document.getElementById("dataForm").classList.add("d-none");

    if(flag){
        //Hide things
        document.getElementById("dataForm").classList.add("d-none");
        document.getElementById("title").textContent = `Ingresar Notas del alumno ${name}`;
        document.getElementById("gradesForm").classList.remove("d-none");
        document.getElementById("btnMenu").classList.add("d-none");

        posStudent += 1;
        let student = new Object();
        student.dni = dni;
        student.name = name;
        student.phone = phone;
        student.email = email;
        student.bDate = bDate;
        student.course = courses[course].course;
        
        student.legajo = nLegajo;
        student.grades = [];
        students.push(student);
        console.log(students[posStudent]);
    }
}

function submitGrades(){
    for (let i = 0; i < subjects.length; i++) {
        let grade1 = document.getElementById(`grade1${subjects[i]}`).value;
        let grade2 = document.getElementById(`grade2${subjects[i]}`).value;
        let grade3 = document.getElementById(`grade3${subjects[i]}`).value;
        let p1 = document.getElementById(`p1${subjects[i]}`).value/100;
        let p2 = document.getElementById(`p2${subjects[i]}`).value/100;
        let p3 = document.getElementById(`p3${subjects[i]}`).value/100;

        let avgGrade = (grade1*p1)+(grade2*p2)+(grade3*p3);
        students[posStudent].grades.push(Math.round(avgGrade));

        
    }

    document.getElementById("gradesForm").classList.add("d-none");
    document.getElementById("tableContainer").classList.remove("d-none");
    document.getElementById("btnMenu").classList.remove("d-none");
    updateTable();
}

function searchStudent(){
    let parameter = document.getElementById("searchP").value;
    let input = document.getElementById("inputSearch").value;
    let flag = false;
    let selectStudent;

    students.forEach(student => {
        if (student[parameter] == input) {
            flag = true;
            selectStudent = student;
        }
    });

    if(flag){
        document.getElementById("showStudent").classList.remove("d-none");
        document.getElementById("nameCard").textContent =  selectStudent.name;
        document.getElementById("dniCard").textContent = `DNI: ${selectStudent.dni}`;
        document.getElementById("bDateCard").textContent = `Fecha de nacimiento: ${selectStudent.bDate}`;
        document.getElementById("phoneCard").textContent = `Telefono: ${selectStudent.phone}`;
        document.getElementById("emailCard").textContent = `Email: ${selectStudent.email}`;
        document.getElementById("legajoCard").textContent = `Legajo: ${selectStudent.legajo}`;
        document.getElementById("courseCard").textContent = `Curso: ${selectStudent.course}`;
    }else{
        alert("Alumno no encontrado por el parametro");
    }
    
}

function buscarUsuario() {
    let input = document.getElementById("input");
    if (input.value != "") {
        let select = document.getElementById("select");
        var tag = false;
        let elusuario;
        usuarios.forEach(usuario => {
            if (Object.values(usuario)[select.value] === input.value) {
                tag = true;
                elusuario = usuario;
            }
        })
        var titulo = document.getElementById("titulo");
        var id = document.getElementById("id");
        var telefono = document.getElementById("telefono");
        var email = document.getElementById("email");
        if (tag) {
            document.getElementById("card").classList.add("card");
            titulo.textContent = elusuario.nombre;
            id.textContent = "ID: " + elusuario.id;
            telefono.textContent = "Telefono: " + elusuario.telefono;
            email.textContent = "Email: " + elusuario.email;
        } else {
            document.getElementById("card").classList.add("card");
            titulo.textContent = "El usuario no existe";
            id.textContent = "";
            telefono.textContent = "";
            email.textContent = "";
        }
    }

}


//Funciones de botones Menu

function signStudentBtn(){
    document.getElementById("dataForm").classList.remove("d-none");
    document.getElementById("gradesForm").classList.add("d-none");
    document.getElementById("tableContainer").classList.add("d-none");
    document.getElementById("searchForm").classList.add("d-none");
    document.getElementById("showStudent").classList.add("d-none");
}

function showStudentsBtn(){
    document.getElementById("dataForm").classList.add("d-none");
    document.getElementById("gradesForm").classList.add("d-none");
    document.getElementById("tableContainer").classList.remove("d-none");
    document.getElementById("searchForm").classList.add("d-none");
    document.getElementById("showStudent").classList.add("d-none");
    updateTable();
}

function searchStudentBtn(){
    document.getElementById("dataForm").classList.add("d-none");
    document.getElementById("gradesForm").classList.add("d-none");
    document.getElementById("searchForm").classList.remove("d-none");
    document.getElementById("tableContainer").classList.add("d-none");
    document.getElementById("showStudent").classList.add("d-none");
}

//Otras funciones
function updateTable(){
    document.getElementById("tableBody").innerHTML = "";

    students.forEach(student => {
        document.getElementById("tableBody").insertRow(-1).innerHTML = '<td>' +student.dni + '</td>' + '<td>' +student.name + '</td>' + '<td>' +student.phone + '</td>' +
        '<td>' +student.email + '</td>' + '<td>' +student.bDate + '</td>' + '<td>' +student.course + '</td>' + '<td>' +student.legajo + '</td>';
    });
}

