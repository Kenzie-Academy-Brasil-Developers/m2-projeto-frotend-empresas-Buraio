import { getAllCompanies, getAllSectors, getCompaniesBySector } from "./homePageApi.js";

function companyCard(obj) {

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

const companyArr = await getAllCompanies();
async function renderCompanyCards(arr) {

  const list = document.querySelector('#companyList')
  list.innerHTML = '';

  arr.forEach(company => {
    const card = companyCard(company);
    list.appendChild(card);
  })

}

renderCompanyCards(companyArr)

const selectInput = document.querySelector('#sectorSelect');

async function sectorSelect(input) {

  const sectorArr = await getAllSectors();
  sectorArr.forEach(sector => {

    const sectorOption = document.createElement('option');
    sectorOption.innerText = sector.description;

    selectInput.appendChild(sectorOption);

  });
}

sectorSelect()

function filterCompaniesBySector(input) {

  selectInput.addEventListener('change', async (e) => {

    const selectValue = e.target.value;
    if (selectValue === '') {
      renderCompanyCards(companyArr);
    }
    else {
      const filteredCompanyArr = await getCompaniesBySector(selectValue);
      renderCompanyCards(filteredCompanyArr);
    }
  })
}

filterCompaniesBySector()