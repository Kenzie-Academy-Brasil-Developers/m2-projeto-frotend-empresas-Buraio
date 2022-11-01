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

function sectorSelect()