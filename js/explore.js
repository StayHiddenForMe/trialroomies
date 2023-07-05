document.addEventListener("DOMContentLoaded", function () {
    var roommateData = [
        {
            imageSrc: "images/support.PNG",
            name: "John Doe",
            age: 28,
            location: "New York City",
            budget: "$800/month"
        },
        {
            imageSrc: "images/support.PNG",
            name: "Jane Smith",
            age: 25,
            location: "San Francisco",
            budget: "$900/month"
        },
        {
            imageSrc: "images/support.PNG",
            name: "Jane Smith",
            age: 25,
            location: "San Francisco",
            budget: "$900/month"
        },
        {
            imageSrc: "images/support.PNG",
            name: "Jane Smith",
            age: 25,
            location: "San Francisco",
            budget: "$900/month"
        }
    ];

    var roommateList = document.getElementById("roommateList");
    var swiper;

    roommateData.forEach(function (item) {
        var roommate = document.createElement("div");
        roommate.className = "roommate swiper-slide";

        var img = document.createElement("img");
        img.src = item.imageSrc;
        img.alt = item.name;
        roommate.appendChild(img);

        var info = document.createElement("div");
        info.className = "info";

        var h3 = document.createElement("h3");
        h3.textContent = item.name;
        info.appendChild(h3);

        var age = document.createElement("p");
        age.textContent = "Age: " + item.age;
        info.appendChild(age);

        var location = document.createElement("p");
        location.textContent = "Location: " + item.location;
        info.appendChild(location);

        var budget = document.createElement("p");
        budget.textContent = "Budget: " + item.budget;
        info.appendChild(budget);

        var contactBtn = document.createElement("a");
        contactBtn.href = "#";
        contactBtn.className = "contact-button";
        contactBtn.textContent = "Contact";
        info.appendChild(contactBtn);

        roommate.appendChild(info);

        roommate.addEventListener("click", function () {
            openPopup(item);
        });

        roommateList.appendChild(roommate);
    });

    swiper = new Swiper(".swiper-container", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    function openPopup(item) {
        var popupOverlay = document.getElementById("popupOverlay");
        var popupProfile = document.getElementById("popupProfile");
        var closeButton = document.getElementById("closeButton");
        var popupContent = document.querySelector("#popupProfile .popupContent");

        popupContent.innerHTML = `
      <img src="${item.imageSrc}" alt="${item.name}">
      <div class="info">
        <h3>${item.name}</h3>
        <p>Age: ${item.age}</p>
        <p>Location: ${item.location}</p>
        <p>Budget: ${item.budget}</p>
        <a href="#" class="contact-button">Contact</a>
      </div>
    `;

        popupOverlay.style.display = "flex";

        closeButton.addEventListener("click", function () {
            popupOverlay.style.display = "none";
        });
    }
});
