const userCardTemplate = document.getElementById("user-card-template");
const contactsDiv = document.getElementById("contacts");

document.addEventListener('userDataReady', data_received);

function data_received(event) {

    event.preventDefault();

    //json data parsed to array
    var arr = JSON.parse(event.detail.jsonText);

    var clone, tempName, tempEmail, tempPhone, tempAddress, tempHomePage, tempAvatar, objectArray;
    for (var i = 0; i < arr.length; i++) {

        objectArray = arr[i];

        clone = userCardTemplate.content.cloneNode(true);

        //replace contents
        tempName = clone.querySelector("h1");
        tempName.textContent = objectArray.firstName + " " + objectArray.lastName;

        tempEmail = clone.querySelector(".title.email");
        tempEmail.textContent = objectArray.email;

        tempPhone = clone.querySelector(".phone > span");
        tempPhone.textContent = objectArray.phoneNumber;

        tempAddress = clone.querySelectorAll(".address > p");
        tempAddress[0].textContent = objectArray.address.streetAddress;
        tempAddress[1].textContent = 
        objectArray.address.zipCode + " " + objectArray.address.city;
        tempAddress[2].textContent = objectArray.address.country;

        tempHomePage = clone.querySelector(".homepage > a");
        tempHomePage.textContent = objectArray.homepage;
        tempHomePage.href = objectArray.homepage; 

        tempAvatar = clone.querySelector("img");
        tempAvatar.src = objectArray.avatar;
        tempAvatar.alt = objectArray.firstName + " " + objectArray.lastName;

        contactsDiv.appendChild(clone);
    }
}
fetchUserData();