const button_html = document.getElementById("button");
const input_html = document.getElementById("inputText");
const ultodo_html = document.getElementById("todo");
const uldone_html = document.getElementById("done");

const addNewTask = () => {
  const task = input_html.value;
  if (task) {
    input_html.value = "";
    const li = document.createElement("li");

    li.innerHTML = `${task} <div class="icons" id="icons">
        <div class="icon"><i class="far fa-trash-alt"></i></div>
        <div class="icon"><i class="far fa-check-square"></i></div>
      </div>`;

    ultodo_html.insertBefore(li, ultodo_html.childNodes[0]);
  } else {
    alert(`
      wprowadź zadanie na dziś `);
  }

  check();
};

button_html.addEventListener("click", addNewTask);

function check() {
  const removeButton_html = document.querySelectorAll(".fa-trash-alt");
  const okButton_html = document.querySelectorAll(".fa-check-square");

  removeButton_html.forEach(item => {
    item.addEventListener("click", function() {
      this.parentNode.parentNode.parentNode.remove();
    });
  });

  okButton_html.forEach(item => {
    item.addEventListener("click", function() {
      this.parentNode.parentNode.parentNode.classList.add("done");
    });
  });
}
