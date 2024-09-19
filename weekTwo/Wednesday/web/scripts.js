const fetchData = async (showFavorites = false, sortOption = null) => {
    try {
        const response = await fetch('./data.json');
        let data = await response.json();

        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (showFavorites) {
            data = data.filter(item => favorites.includes(item.id));
        }

        if (sortOption === 'price-asc') {
            data = data.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-desc') {
            data = data.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'date-asc') {
            data = data.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (sortOption === 'date-desc') {
            data = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        }

        let output = '';
        const container = document.querySelector('.container');

        data.forEach((item) => {
            const { id, title, date, company, price, imageUrl } = item;
            const isFavorite = favorites.includes(id);

            output += `
                <div class="container__card">
                    <img src=${imageUrl} alt=${company}>

                    <div class="container__card__content">
                        <h2 class="container__card__content__title">${title}</h2>
                        <p class="container__card__content__date">${date}</p>  
                        <p class="container__card__content__description">${company}</p>
                        <p class="container__card__content__price"> ${price} KES</p>
                        <button class="container__card__content__button" data-id="${id}">
                            ${isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                        </button>
                    </div>
                </div>
            `;
        });

        container.innerHTML = output;

        const buttons = document.querySelectorAll('.container__card__content__button');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const id = Number(e.target.getAttribute('data-id'));

                if (favorites.includes(id)) {
                    favorites = favorites.filter(favId => favId !== id);
                } else {
                    favorites.push(id);
                }

                localStorage.setItem('favorites', JSON.stringify(favorites));

                fetchData(showFavorites, sortOption);
            });
        });
    } catch (error) {
        console.log(error);
    }
};

// Sorting event listeners
const sortByAscButton = document.getElementById('sort-price-asc');
const sortByDescButton = document.getElementById('sort-price-desc');
const sortByDateAscButton = document.getElementById('sort-date-asc');
const sortByDateDescButton = document.getElementById('sort-date-desc');

sortByAscButton.addEventListener('click', () => fetchData(false, 'price-asc'));
sortByDescButton.addEventListener('click', () => fetchData(false, 'price-desc'));
sortByDateAscButton.addEventListener('click', () => fetchData(false, 'date-asc'));
sortByDateDescButton.addEventListener('click', () => fetchData(false, 'date-desc'));


// Event listener for "View Favorites"
const viewFavoritesButton = document.getElementById('view-favorites')
viewFavoritesButton.addEventListener('click', () => fetchData(true));
fetchData();
