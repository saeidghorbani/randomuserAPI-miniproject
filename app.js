// Select elements
const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

// Call Random User API
getData();

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();

  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");

    listItems.push(li);

    li.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `;
    result.appendChild(li);
  });
}

// Filter(Search) Users
filter.addEventListener("input", (e) => filterData(e.target.value));

// Filter function (based on name of users)
function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (
      item.lastElementChild.firstElementChild.innerText
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
