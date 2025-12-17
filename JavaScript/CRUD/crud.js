const tableBody = document.getElementById("tableBody");
const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

let editRow = null;

// 10 Initial Records
const users = [
    { id: 1, name: "John", email: "john@gmail.com" },
    { id: 2, name: "Alice", email: "alice@gmail.com" },
    { id: 3, name: "Bob", email: "bob@gmail.com" },
    { id: 4, name: "Emma", email: "emma@gmail.com" },
    { id: 5, name: "David", email: "david@gmail.com" },
    { id: 6, name: "Sophia", email: "sophia@gmail.com" },
    { id: 7, name: "Michael", email: "michael@gmail.com" },
    { id: 8, name: "Olivia", email: "olivia@gmail.com" },
    { id: 9, name: "Daniel", email: "daniel@gmail.com" },
    { id: 10, name: "Lily", email: "lily@gmail.com" }
];

// Display data (READ)
function loadData() {
    tableBody.innerHTML = "";
    users.forEach((user) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button class="edit" onclick="editUser(this)">Edit</button>
                <button class="delete" onclick="deleteUser(this)">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// EDIT
function editUser(btn) {
    editRow = btn.parentElement.parentElement;
    nameInput.value = editRow.children[1].innerText;
    emailInput.value = editRow.children[2].innerText;
}

// UPDATE
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (editRow) {
        editRow.children[1].innerText = nameInput.value;
        editRow.children[2].innerText = emailInput.value;
        editRow = null;
        form.reset();
    }
});

// DELETE
function deleteUser(btn) {
    const row = btn.parentElement.parentElement;
    tableBody.removeChild(row);
}

// Initial Load
loadData();
