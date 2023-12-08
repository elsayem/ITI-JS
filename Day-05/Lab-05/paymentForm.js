function initializePage() {
  showUsers();

  // buttons events
  document.getElementById('addUserButton').addEventListener('click', createUser);
  document.getElementById('search').addEventListener('click', search);
}

document.addEventListener('DOMContentLoaded', initializePage);


//sending and retreiving Data from LocalStorage
function getUsersFromLocal() {
  return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUsersToLocal(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

//Create New Users
function createUser() {
  const title = document.querySelector('input[name="title"]:checked').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const cardType = document.getElementById('cardType').value;
  const dataUsage = document.getElementById('dataUsage').checked;

  if (name && email) {
    const user = { title, name, email, cardType, dataUsage };
    const users = getUsersFromLocal();
    users.push(user);
    saveUsersToLocal(users);

    showUsers();
    clear();
  } else {
    alert('Please Enter your information inside the * fields');
  }
}


//Edit User Details
function editUser(i) {
  const users = getUsersFromLocal();
  const user = users[i];

  document.querySelector('input[name="title"][value="' + user.title + '"]').checked = true;
  document.getElementById('name').value = user.name;
  document.getElementById('email').value = user.email;
  document.getElementById('cardType').value = user.cardType;
  document.getElementById('dataUsage').checked = user.dataUsage;
  //remove the old one
  deleteUser(i);
}

//Display Users

function showUsers(filteredUsers = null) {
  const users = filteredUsers || getUsersFromLocal();
  const tableBody = document.getElementById('userTableBody');
  tableBody.innerHTML = '';

  users.forEach((user, i) => {
    const row = tableBody.insertRow();
    row.insertCell(0).textContent = user.title;
    row.insertCell(1).textContent = user.name;
    row.insertCell(2).textContent = user.email;
    row.insertCell(3).textContent = user.cardType;
    row.insertCell(4).textContent = user.dataUsage ? 'Yes' : 'No';

    const editButton = createButton('Edit', () => editUser(i), 'btn btn-info');
    const deleteButton = createButton('Delete', () => deleteUser(i), 'btn btn-danger');

    row.insertCell(5).append(editButton, deleteButton);
  });
}
//Delete user function
function deleteUser(i) {
  const users = getUsersFromLocal();
  users.splice(i, 1);
  saveUsersToLocal(users);

  showUsers();
}

document.getElementById('search').addEventListener('click', search);

//Searvh for User
function search() {

  const searchTerm = document.getElementById('searchInput').value.toLowerCase();


  const filteredUsers = getUsersFromLocal().filter(user =>
    user.name.toLowerCase().includes(searchTerm)
  );

  showUsers(filteredUsers);
}

// clear the form
function clear() {
  document.querySelector('input[name="title"][value="Mr"]').checked = true;
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('cardType').value = 'Visa';
  document.getElementById('dataUsage').checked = false;
}


//Creating the Edit and Delete Buttons
function createButton(text, onClick, buttonClass) {
  const button = document.createElement('button');
  button.className = `${buttonClass}`
  button.textContent = text;
  button.onclick = onClick;
  return button;
}
