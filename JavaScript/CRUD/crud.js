// Load users from localStorage
let users = JSON.parse(localStorage.getItem("users")) || [];

const tableBody = document.getElementById("tableBody");

const addModal = new bootstrap.Modal(document.getElementById("addModal"));
const editModal = new bootstrap.Modal(document.getElementById("editModal"));
const deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));

// let editUserId = null;
// let deleteUserId = null;

// Save users to localStorage
function saveUsers() {
 localStorage.setItem("users", JSON.stringify(users));
}
console.log(users)
// Render table
function loadData() {
 tableBody.innerHTML = ""; 

 users.forEach(user => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
  
    <td>
      <button class="btn btn-warning btn-sm" onclick="openEdit(${user.id})">Edit</button>
      <button class="btn btn-danger btn-sm" onclick="openDelete(${user.id})">Delete</button>
    </td>
  `;
  tableBody.appendChild(row);
 });
}

//  Add User
function adduser() {
 const name = addName.value.trim();
 const email = addEmail.value.trim();
//  const mobile= addMobile.valve.trim();
 if (!name || !email) return alert("All fields required");

 const id = users.length ? users[users.length - 1].id + 1 : 1;

 users.push({ id, name, email,});
 saveUsers();
 loadData();

 addName.value = "";
 addEmail.value = "";
//  addMobile.value ="";
 addModal.hide();
 
}

//  Open Edit Modal
function openEdit(id) {
 const user = users.find(u => u.id === id);
 editUserId = id;

 editName.value = user.name;
 editEmail.value = user.email;

 editModal.show();
}

//  Update User
document.getElementById("editForm").onsubmit = function (e) {
 e.preventDefault();

 const user = users.find(u => u.id === editUserId);
 user.name = editName.value;
 user.email = editEmail.value;

 saveUsers();
 loadData();
 editModal.hide();
};

//  Open Delete Modal
function openDelete(id) {
 deleteUserId = id;
 deleteModal.show();
}

//  Confirm Delete
document.getElementById("confirmDeleteBtn").onclick = function () {
 users = users.filter(u => u.id !== deleteUserId);
 saveUsers();
 loadData();
 deleteModal.hide();
};

// Initial Load
loadData();
