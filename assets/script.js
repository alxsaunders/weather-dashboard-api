const cityNameInput = document.querySelector("#city-name");
const searchForm = document.querySelector("#search-form");
const currentConditionsUl = document.querySelector("#current-forecast #conditions");
const currentConditionsH3 = document.querySelector("#current-forecast h3");
const previousSearches = document.querySelector("#previous-searches");
const previousSearchContainer = document.querySelector("#previous-searches .card-body");
const dailyCardContainer = document.querySelector("#daily-forecast");
const fiveDayHeader = document.querySelector("#five-day");

const localCityArray = [];

// Pulls in previous searches from localStorage
let previousSearch = JSON.parse(localStorage.getItem("searches"));

// Removes any null results stored in localStorage
if (previousSearch !== null) {
    for (let i = 0; i < previousSearch.length; i++) {
        if (previousSearch[i] === null) {
            previousSearch.splice(i, i+1);
        } else {
            // Populates localCityArray to publish previous search buttons
            localCityArray.push(previousSearch[i]);
        }
    }
}
const updateSearchHistory = () => {
    // Pulls localStorage results of previous searches
    previousSearch = JSON.parse(localStorage.getItem("searches"));

    // Declared under function to ensure list is updated each time
    const existingButtons = document.querySelectorAll("#previous-searches button");

    if (previousSearch !== null) {
        existingButtons.forEach(button => {
            // Ensures buttons aren't repeated for existing searches
            for (let i = 0; i < previousSearch.length; i++)
            if (button.dataset.city.includes(previousSearch[i])) {
                previousSearch.splice(i, i + 1);
            }
        })
        for (let i = 0; i < previousSearch.length; i++) {
            const searchButton = document.createElement("button");
            searchButton.classList.add("m-2", "btn", "btn-light");
            // Sets data-city attribute on button for event listener to reference
            searchButton.dataset.city = previousSearch[i];
            searchButton.textContent = previousSearch[i];
            searchButton.addEventListener("click", (event) => {
                // References data-city property to call API
                callOpenWeather(event.target.dataset.city);
            })
            previousSearchContainer.appendChild(searchButton); 
        }
    }
}

const updateLocalStorage = (city) => {
    // Ensures searched city isn't pushed into array (and then localStorage) if city has already been searched
    if (localCityArray.includes(city)) {
        return;
    } else {
        localCityArray.push(city);

        // Stores for next user visit
        localStorage.setItem("searches", JSON.stringify(localCityArray));
        
        // Calls updateSearchHistory to add new search to previous search buttons
        updateSearchHistory();
    }
}

