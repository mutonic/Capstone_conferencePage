const speakersData = [
  {
    imageSrc: './assets/images/speaker_01.png',
    name: 'Yochai Benkler',
    position: 'Senior Data Scientist at JPM Corporation',
    description: 'Leads advanced analytics development, identifies patterns, and provides insights for data-driven decision making.',
  },
  {
    imageSrc: './assets/images/speaker_02.png',
    name: 'Yochai Benkler',
    position: 'Data Science Manager at ABC Company',
    description: 'Oversees data scientists, guides ML model development, and ensures accurate analytical outputs.',
  },
  {
    imageSrc: './assets/images/speaker_03.png',
    name: 'Yochai Benkler',
    position: 'Research Scientist in Data Mining at XYZ Research Institute',
    description: 'Conducts cutting-edge data mining research and develops innovative algorithms for valuable insights.',
  },
  {
    imageSrc: './assets/images/speaker_04.png',
    name: 'Yochai Benkler',
    position: 'Data Engineer at DEF Tech Solutions',
    description: 'Designs and maintains data infrastructure, builds scalable pipelines, and ensures data quality.',
  },
  {
    imageSrc: './assets/images/speaker_05.png',
    name: 'Yochai Benkler',
    position: 'Machine Learning Engineer at PQR Analytics',
    description: 'Designs and implements ML models, preprocesses data, and evaluates model performance.',
  },
  {
    imageSrc: './assets/images/speaker_06.png',
    name: 'Yochai Benkler',
    position: 'Data Scientist in Renewable Energy Research',
    description: 'Analyzes energy consumption data, performs predictive modeling, and optimizes energy generation and storage.',
  },
];

function generateSpeakerHTML(speaker) {
  return `
    <div class="speaker">
      <div class="speaker-image">
        <img src="${speaker.imageSrc}" alt="" />
      </div>
      <div class="speaker-info">
        <h3>${speaker.name}</h3>
        <p class="speaker-position">${speaker.position}</p>
        <br />
        <p class="speaker-description">${speaker.description}</p>
      </div>
    </div>
  `;
}

function displaySpeakers() {
  const speakersContainer = document.querySelector('.speakers');
  const partnerSection = document.querySelector('.partner');
  const footer = document.querySelector('footer');
  const showMoreButton = document.getElementById('showMoreButton');
  const isMobile = window.innerWidth < 768;

  let speakersHTML = '';

  if (isMobile) {
    for (let i = 0; i < Math.min(2, speakersData.length); i += 1) {
      speakersHTML += generateSpeakerHTML(speakersData[i]);
    }

    if (speakersData.length > 2) {
      showMoreButton.style.display = 'inline-block';
    } else {
      showMoreButton.style.display = 'none';
    }

    partnerSection.style.display = 'none';
    footer.style.display = 'none';
  } else {
    for (let i = 0; i < speakersData.length; i += 1) {
      speakersHTML += generateSpeakerHTML(speakersData[i]);
    }

    showMoreButton.style.display = 'none';
    partnerSection.style.display = 'flex';
    footer.style.display = 'flex';
  }

  speakersContainer.innerHTML = speakersHTML;
}

function showAllSpeakers() {
  const speakersContainer = document.querySelector('.speakers');
  const partnerSection = document.querySelector('.partner');
  const footer = document.querySelector('footer');
  const showMoreButton = document.getElementById('showMoreButton');

  let speakersHTML = '';

  for (let i = 0; i < speakersData.length; i += 1) {
    speakersHTML += generateSpeakerHTML(speakersData[i]);
  }

  speakersContainer.innerHTML = speakersHTML;
  showMoreButton.style.display = 'none';
  partnerSection.style.display = 'flex';
  footer.style.display = 'flex';
}

window.addEventListener('resize', displaySpeakers);
displaySpeakers();

const showMoreButton = document.getElementById('showMoreButton');
showMoreButton.addEventListener('click', showAllSpeakers);
// dynamic year in the footer
const currentYearElement = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;
