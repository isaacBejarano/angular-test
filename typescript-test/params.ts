// ORDER
// 1º. obligatorios > 1 || !param
// 2º. opcionales >= 1
// 3º. default >= 1

(() => {
  // prettier-ignore
  function params(
  obligatorio1:string ,
  obligatorio2:string ,
  opcional1?:string ,
  opcional2?:string ,
  defecto1:string = 'default1' ,
  defecto2:string = 'default2' 
){
    console.log(obligatorio1)
    console.log(obligatorio2)
    console.log(opcional1)
    console.log(opcional2)
    console.log(defecto1)
    console.log(defecto2)
}

  params("ob1", "ob2"); // ob1, ob2, <undef>, <undef>, <default1>, <default2>
  params("ob1", "ob2", "op1", "op2"); // ob1, ob2, op1, op2, <default1>, <default2>
  params("ob1", "ob2", "op1", "op2", "overwrite def1"); // ob1, ob2, op1, op2, overwrite def, <default2>
})();
