// 1. Fetch 20 random user on page lode

// 2. filter user by gender
let usrArray = [];

// 3. filter user by name

const apiUrl = "https://randomuser.me/api/?";

const listElm = document.querySelector("#user-list");

const displayUsers = (users) => {
  let total = users.length;

  let str = "";
  //   if (users.length > 0) {
  //     str = "No user found";
  //     listElm.innerHTML
  //     return;
  //   }
  users.map((user) => {
    str += ` 
    <div class="col-md-6 col-lg-3 py-2">
    
    <div class="card user-card">
        <img src="${user.picture.large}" class="card-img-top" alt="..." />
        <h4 class="text-center mt-2">${user.name.title} ${user.name.first} ${user.name.last}</h4>
        <div class="card-body">
        <div> <span><i class="fa-thin fa-phone"></i></span> ${user.cell}
        </div>
        <div> <span><i class="fa-solid fa-envelope"></i></span> ${user.email}
        </div>
        <div> <span><i class="fa-thin fa-map-pin"></i></span> ${user.location.city}, ${user.location.country}
        </div>
        
        </div>
          <p class="card-text">
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
        
      </div>
    </div>`;
  });

  listElm.innerHTML = str;
  document.getElementById("user-count").innerHTML = users.length;
};

const fetchUser = (params = "results=500") => {
  fetch(apiUrl + params)
    .then((response) => response.json())
    .then((data) => {
      usrArray = data.results;

      displayUsers(usrArray);
    })
    .catch((error) => console.log(error));
};

fetchUser();

// For dropdown change

const handleOnChange = (e) => {
  const params = `results=500&gender=${e.value}`;
  fetchUser(params);
};

const handleOnSearch = (e) => {
  const str = e.value.toLowerCase();
  const filteredArg = usrArray.filter((item) => {
    const userFullName = (item.name.first + " " + item.name.last).toLowerCase();
    if (userFullName.includes(str)) {
      return item;
    }
  });

  displayUsers(filteredArg);
};
