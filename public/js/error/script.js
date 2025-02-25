// search function
const body = document.querySelector('body');
const icon = document.querySelector('#search-icon');
const searchBox = document.querySelector('#search-box');
const searchBoxTextBox = document.querySelector('#search-text-box');
const searchResultsBox = document.querySelector('#search-results');
const closeSearchBox = document.querySelector('svg.lucide-x');

searchResultsBox.replaceChildren();

const userSearchList = ["asun - african sun limited","axia - axia corporation limited","cmcl - caledonia mining corporation plc, zimbabwe depository receipts","edgr - edgars stores limited","fca - first capital bank limited","inn - innscor africa limited","inv - invictus energy limited, zimbabwe depository receipts","ned - nedbank zimbabwe limited, zimbabwe depository receipts","phl - padenga holdings limited","scil - seed co international limited","sim - simbisa brands limited","wphl - westprop holdings limited","zimw - zimplow holdings limited"];

const searchListReturnedResultArray = ["ASUN - African Sun Limited","AXIA - Axia Corporation Limited","CMCL - Caledonia Mining Corporation Plc, Zimbabwe Depository Receipts","EDGR - Edgars Stores Limited","FCA - First Capital Bank Limited","INN - Innscor Africa Limited","INV - Invictus Energy Limited, Zimbabwe Depository Receipts","NED - Nedbank Zimbabwe Limited, Zimbabwe Depository Receipts","PHL - Padenga Holdings Limited","SCIL - Seed Co International Limited","SIM - Simbisa Brands Limited","WPHL - Westprop Holdings Limited","ZIMW - Zimplow Holdings Limited"];

const linksList = ["/asun","/axia","/cmcl","/edgr","/fca","/inn","/inv","/ned","/phl","/scil","/sim","/wphl","/zimw"];

icon.addEventListener('click', () => {
  searchBox.style.display = 'block';
  closeSearchBox.style.display = 'block';
  icon.style.display = 'none';
  searchBoxTextBox.value = '';
  searchBoxTextBox.focus();
})

searchBoxTextBox.addEventListener('input', (e) => {
  if ( e.target.value.length > 1 ) {
    const userTextInput = e.target.value.toLowerCase();
    const searchResults = userSearchList.filter( x => x.includes(userTextInput) );
  
    ( searchResults.length === 0 ) ? noMatchFound() : displaySearchResults(searchResults);    
  } else {
    searchResultsBox.replaceChildren();
  }
});

closeSearchBox.addEventListener('click', () => {
  searchBox.style.display = 'none';
  closeSearchBox.style.display = 'none';
  icon.style.display = 'block';
});

body.addEventListener( 'click', (e) => {
    searchResultsBox.replaceChildren();
});

// functions
function displaySearchResults(data) { 
  const searchResultsArray = [];

  data.forEach( d => {
    const listElement = document.createElement('li');
    const a = document.createElement('a');
    const arrayPosition = userSearchList.indexOf(d);

    a.textContent = searchListReturnedResultArray[arrayPosition];
    a.href = `/data/vfex/equities${ linksList[arrayPosition] }`;
    listElement.classList.add('search-result-item');

    listElement.appendChild(a);
    searchResultsArray.push(listElement);
  })

  searchResultsBox.replaceChildren(...searchResultsArray);
};

function noMatchFound() { 
  const listElement = document.createElement('li');

  listElement.textContent = 'No match found';
  listElement.style.cursor = 'default';
  listElement.classList.add('no-match-text');
  listElement.addEventListener( 'click' , e => e.stopPropagation() )

  searchResultsBox.replaceChildren(listElement);
};
