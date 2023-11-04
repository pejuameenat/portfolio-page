const darkBtn = document.getElementById("dark");
const lightBtn = document.querySelector("#light");
const bodyToggle = document.querySelector(".change-clr");
 

darkBtn.addEventListener('click', function(){
bodyToggle.classList.add('dark-body');
});

lightBtn.addEventListener("click", function () {
  window.location.reload();
});

