const userCardTemplate = document.getElementById("user-card-template");
const contactsDiv = document.getElementById("contacts");

// Use a named function instead of an anonymous function
function updateUserCard(user) {
  const clone = userCardTemplate.content.cloneNode(true);

  const tempName = clone.querySelector("h1");
  tempName.textContent = `${user.firstName} ${user.lastName}`;

  const tempEmail = clone.querySelector(".title.email");
  tempEmail.textContent = user.email;

  const tempPhone = clone.querySelector(".phone > span");
  tempPhone.textContent = user.phoneNumber;

  const tempAddress = clone.querySelectorAll(".address > p");
  tempAddress[0].textContent = user.address.streetAddress;
  tempAddress[1].textContent = `${user.address.zipCode} ${user.address.city}`;
  tempAddress[2].textContent = user.address.country;

  const tempHomePage = clone.querySelector(".homepage > a");
  tempHomePage.textContent = user.homepage;
  tempHomePage.href = user.homepage;

  const tempAvatar = clone.querySelector("img");
  tempAvatar.src = user.avatar;
  tempAvatar.alt = `${user.firstName} ${user.lastName}`;

  contactsDiv.appendChild(clone);
}

function dataReceived(event) {
  event.preventDefault();
  const arr = JSON.parse(event.detail.jsonText);

  for (const user of arr) {
    updateUserCard(user);
  }
}

document.addEventListener('userDataReady', dataReceived);
fetchUserData(); 
