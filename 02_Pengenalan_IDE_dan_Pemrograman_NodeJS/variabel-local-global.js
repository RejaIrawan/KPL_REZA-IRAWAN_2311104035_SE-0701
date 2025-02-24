let globalvariable = "Reza";

function getmyidentity() {
  let localvariable = "2311104035";
  console.log(
    `Nama saya ${globalvariable} dan nim saya adalah ${localvariable}`
  );
}

console.log(globalvariable);

// local variable tidak bisa diakses
console.log(localvariable);

getmyidentity();
