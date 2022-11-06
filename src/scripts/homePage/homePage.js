import { getAllSectors, getCompaniesBySector } from "./homePageApi.js";
import { companyArr } from "../../pages/homePage/index.js";

function renderCards(arr) {

  const companyList = document.querySelector('.companyList');

  if (companyList) {
    companyList.innerHTML = '';
    arr.forEach(company => {
      const card = companyCard(company);
      companyList.appendChild(card);
    })
  }
}

async function sectorSelect() {

  const selectInput = document.querySelector('#sectorSelect');
  if (selectInput) {
    const sectorArr = await getAllSectors();
    sectorArr.forEach(sector => {
  
      const sectorOption = document.createElement('option');
      sectorOption.innerText = sector.description;
  
      selectInput.appendChild(sectorOption);
  
    });
    filterCompaniesBySector(selectInput, companyArr);
  }
}

function filterCompaniesBySector(input, mainArr) {

  input.addEventListener('change', async (e) => {

    const selectValue = e.target.value;
    if (selectValue === '') {
      renderCards(mainArr);
    }
    else {
      const filteredCompanyArr = await getCompaniesBySector(selectValue);
      renderCards(filteredCompanyArr);
    }
  })
}

const companyCard = (obj) => {

  const card            = document.createElement('li');
  const companyName     = document.createElement('h2')
  const companyOpening = document.createElement('span');
  const companySector   = document.createElement('span');

  card.classList.add('company');
  companyName.classList.add('companyName');
  companyOpening.classList.add('companyOpening');
  companySector.classList.add('companySector');

  companyName.innerText = obj.name;
  companyOpening.innerText = obj.opening_hours;
  companySector.innerText = obj.sectors.description;

  card.append(companyName, companyOpening, companySector);
  return card;

}

export { renderCards, sectorSelect, filterCompaniesBySector };