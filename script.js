const display_btn = document.querySelector("#display");
const val_btn = document.querySelectorAll("#val");

let str = "";
let arr = Array.from(val_btn);
arr.forEach((item) => {
  item.addEventListener("click", function (e) {
    console.log('hi');
    if (e.target.value == '=') {
      str = eval(str);
      display_btn.value = str;
    } else if (e.target.value == 'DEL') {
      str = str.substring(0, str.length - 1);
      display_btn.value = str;
    } else if (e.target.value == 'AC') {
      str = " ";
      display_btn.value = str;
    } else {
      str += e.target.value;
      display_btn.value = str;
    }
  });
});
