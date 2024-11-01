export  default  function Validation(values) {
const errors = {}


   // const username_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    const postindex_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    const separation_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    const adrress_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    const firstname_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    const lastname_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;




    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;


    if (values.username === "") {
        errors.username = "Name is Required";

    }

    if (values.email === ""){
        errors.email = 'Email is  Required';
    }else if (!email_pattern.test(values.email)) {
        errors.email = "Email did'nt match"
    }

    if (values.postindex === ""){
        errors.postindex = 'Post Index is  Required';
    }else if (!postindex_pattern.test(values.postindex)) {
        errors.postindex = "Post Index did'nt match"
    }

    if (values.address === ""){
        errors.address = 'Address is  Required';
    }else if (!adrress_pattern.test(values.address)) {
        errors.address = "Address did'nt match"
    }

    if (values.separation === ""){
        errors.separation = 'Separation is  Required';
    }else if (!separation_pattern.test(values.separation)) {
        errors.separation = "Separation did'nt match"
    }

    if (values.firstname === ""){
        errors.firstname = 'First Name  is  Required';
    }else if (!firstname_pattern.test(values.firstname)) {
        errors.firstname = "First Name did'nt match"
    }


    if (values.lastname === ""){
        errors.lastname = 'Last Name  is  Required';
    }else if (!lastname_pattern.test(values.lastname)) {
        errors.lastname = "Last Name did'nt match"
    }


    if (values.password === ""){
        errors.password = 'Password  is Required';
    }else if (!password_pattern.test(values.password)) {
        errors.password = "Password did'nt match"
    }

    return errors;
}