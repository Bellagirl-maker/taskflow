const apiUrl = 'https://taskflow-w3v6.onrender.com/api/lists';

const form = document.getElementById('addListForm');
const titleInput = document.getElementById('listTitle');
const listsContainer = document.getElementById('listsContainer');

document.addEventListener('DOMContentLoaded', fetchLists);

// Fetch and display all lists
function fetchLists() {
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      listsContainer.innerHTML = '';
      data.forEach(renderList);
    })
    .catch(err => console.error('Error fetching lists:', err));
}

// Render a single list
function renderList(list) {
  const li = document.createElement('li');
  li.className = 'bg-white p-4 rounded shadow flex justify-between items-center';

  const span = document.createElement('span');
  span.innerHTML = `<i class="fas fa-list-alt text-blue-500 mr-2"></i>${list.title}`;
  span.className = 'text-lg font-semibold';

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.className = 'text-red-500 hover:text-red-700 text-xl';
  deleteBtn.addEventListener('click', () => deleteList(list.id));

  li.appendChild(span);
  li.appendChild(deleteBtn);
  listsContainer.appendChild(li);
}

// Handle add list form submit
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const title = titleInput.value.trim();
  if (!title) return;

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ list: { title } }),
  })
    .then(res => res.json())
    .then(newList => {
      renderList(newList);
      titleInput.value = '';
    })
    .catch(err => console.error('Error adding list:', err));
});

// Delete a list
function deleteList(id) {
  fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  })
    .then(() => {
      fetchLists();
    })
    .catch(err => console.error('Error deleting list:', err));
}
