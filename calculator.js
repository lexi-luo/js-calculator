function insert(num){
    document.form.numberbox.value = document.form.numberbox.value + num
}

function equal(){
  var exp = document.form.numberbox.value;
  if (exp){
    document.form.numberbox.value = eval(exp)
  }
}

function c(){
  document.form.numberbox.value = "";
}