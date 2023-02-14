

function tiene_numeros(pass) {
    let numeros = "0123456789";
    for (let i = 0; i < pass.length; i++) {
      if (numeros.indexOf(pass.charAt(i), 0) !== -1) {
        return 1;
      }
    }
    return 0;
  }

  function validarEmail(user) {
    let re = /\S+@\S+\.\S+/;
    return re.test(user);
  }


export default function validate(obj) {
let error = {}; 
  if (!validarEmail(obj.user)) error.user = "Please type a valid email";
  if (!obj.user.length) error.user = "Please type your username";
  if (obj.user.length >= 35) error.user = "The username should be shorter than 35 characters 8-20 characters long";
  if (obj.password < 6 || obj.password > 10) error.password = "The password should be larger than 6 and shorter than 10";
  if (tiene_numeros(obj.password) === 0) error.password ="The password should include at least one number Includes one number";
  return error;
}
