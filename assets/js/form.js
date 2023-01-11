const formRegister = document.querySelector("#formRegister");

formRegister.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameUser = e.target.nameUser.value.trim();
    const ageUser = e.target.ageUser.value.trim();
    const mailUser = e.target.mailUser.value.trim();
    const pass1 = e.target.pass1.value.trim();
    const pass2 = e.target.pass2.value.trim();
    const dateBorn = e.target.dateBorn.value.trim();
    const termsUser = e.target.termsUser.checked;
    const countryName = e.target.countryName.value.trim();
    const gender = e.target.gender.value.trim();
    const comments = e.target.comments.value.trim();

    if (
        nameUser === "" ||
        ageUser === "" ||
        mailUser === "" ||
        pass1 === "" ||
        pass2 === "" ||
        dateBorn === "" ||
        countryName === "" ||
        gender === "" ||
        comments === "" ||
        !termsUser
    ) {
        Swal.fire({
            title: "Error",
            text: "Todos los campos son necesarios",
            icon: "error",
            confirmButtonText: "Vale",
        });

        return;
    }

    if (pass1 !== pass2) {
        Swal.fire({
            title: "Error",
            text: "Las password son diferentes",
            icon: "error",
            confirmButtonText: "Vale",
        });

        return;
    }

    if (ageUser < 18) {
        Swal.fire({
            title: "Error",
            text: "Tienes que ser mayor de edad",
            icon: "error",
            confirmButtonText: "Vale",
        });

        return;
    }

    console.log({
        nameUser,
        ageUser,
        mailUser,
        pass1,
        pass2,
        dateBorn,
        termsUser,
        countryName,
        gender,
        comments,
    });

    Swal.fire({
        title: "Enviado",
        text: "El usuario a sido creado",
        icon: "success",
        confirmButtonText: "Ok!!!",
    });
});
