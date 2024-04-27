const loadPhone = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;

    
    displayPhones(phones);
}



const displayPhones = (phones) =>{


    // 1. find the parent element
    const cardContainer = document.getElementById('card_container');

    // clear phone container cards before adding new cards 
    cardContainer.textContent = '';

    if(phones.length === 0){
        alert('i have not found')
    }


    // display only first 12 data
    phones = phones.slice(0,12);
    console.log(phones);






    phones.forEach((phone) => {
        // 2. create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card  bg-gray-200 shadow-xl';


        //3. set inner html
        phoneCard.innerHTML = `
        
        <figure class="px-10 pt-10">
        <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>There are many variations of passages of available, but the majority have suffered</p>
            <h4 class="text-2xl font-semibold">$999</h4>
            <div class="card-actions">
                <button class="btn btn-primary">Show Details</button>
             </div>
        </div>
        `;

        // 4. append chile elements
        cardContainer.appendChild(phoneCard)
    }); 
}





// handle search button

const handleSearch = () => {
    const searchFiled = document.getElementById('search_filed');
    const searchText = searchFiled.value;
    if(searchText === ''){
        alert('give me valid text')
    }else{
        loadPhone(searchText);
    }
}



// loadPhone();