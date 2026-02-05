
button = document.getElementById("button");
ft_list = document.getElementById("ft_list");
button.addEventListener("click",()=>{
    const text = prompt("Enter a new TO DO:");
    if(!text || text.trim()===""){
        return;
    }
    // createTodoDiv(text.trim(), true);
    let div = document.createElement("div");
    div.textContent = text;
    ft_list.prepend(div);
    saveTodos();

    div.addEventListener("click",()=>{
    if(confirm("Do you want to remove this TO DO?")){
        div.remove()
        saveTodos();
    }
})
})

// ---------------- cookie ----------------
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + encodeURIComponent(value) +
    ";expires=" + d.toUTCString() +
    ";path=/";
}

function getCookie(name) {
  const key = name + "=";
  const parts = document.cookie.split("; ");
  for (const p of parts) {
    if (p.startsWith(key)) return decodeURIComponent(p.substring(key.length));
  }
  return null;
}

// ---------------- save/load ----------------
function saveTodos() {
  const todos = Array.from(ft_list.children).map(div => div.textContent);
  setCookie("todo_list", JSON.stringify(todos), 30);
}

function createTodoDiv(text, shouldSave = true) {
  const div = document.createElement("div");
  div.textContent = text;

  div.addEventListener("click", () => {
    if (confirm("Do you want to remove this TO DO?")) {
      div.remove();
      saveTodos(); 
    }
  });


  ft_list.prepend(div);

  if (shouldSave) saveTodos(); 
}

function loadTodos() {
  const raw = getCookie("todo_list");
  if (!raw) return;

  let todos;
  try {
    todos = JSON.parse(raw);
  } catch {
    return;
  }

  ft_list.innerHTML = "";

  for (let i = todos.length - 1; i >= 0; i--) {
    createTodoDiv(todos[i], false);
  }
}

loadTodos();