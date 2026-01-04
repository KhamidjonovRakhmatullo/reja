console.log("Fronted JS ishga tushdi!");

function itemTemplate(item) {
  return `
    <li
    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
    >
        <span class="item-text">${item.reja1}</span>
        <div>
            <button data-id="${item._id}"
                 class="edit-me btn btn-secondary btn-sm mr-1">
                Ozgartirish
            </button>
            <button data-id="${item._id}"
            class="delete-me btn btn-danger btn-sm">Ochirish</button>
        </div>
    </li>
    `;
}

let createField = document.getElementById("create-field");


//OnSubmit proccess
document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-plan", { reja_input: createField.value })
    .then((response) => {
      document.getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Please, retry");
    });
});


//OnClick proccess
document.addEventListener("click", function(e){

  //delete
  console.log(e.target);
  if(e.target.classList.contains("delete-me")){
    // alert("You have clicked delete button");
    if(confirm("Really you want to delete?")){
      axios.post("/delete-plan", {id: e.target.getAttribute("data-id")})
      .then((response) => {
        console.log(response.data);
        e.target.parentElement.parentElement.remove();
      })
      .catch((err) => {
        console.log("Please, retry");
      });
    }
  };

  //edit
  if(e.target.classList.contains("edit-me")){
    alert(`You have clicked edit button`);
  };
})