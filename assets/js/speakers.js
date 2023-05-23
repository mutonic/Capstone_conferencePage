const speakersData = [
  {
    name: "Yochai Benkler",
    position: "Berkman Professor of Entrepreneurial Legal studies at Harvard Law School",
    description: "Benkler studies commons-based peer production and published his seminal book 'The Wealth of Networks' in 2009. He is the co-director of the Berkman Klein Center for Internet and Society at Harvard University.",
    image: "./assets/images/speaker_01.png"
  },
  {
    name: "Yochai Benkler",
    position: "Berkman Professor of Entrepreneurial Legal studies at Harvard Law School",
    description: "Benkler studies commons-based peer production and published his seminal book 'The Wealth of Networks' in 2009. He is the co-director of the Berkman Klein Center for Internet and Society at Harvard University.",
    image: "./assets/images/speaker_02.png"
  },
  {
    name: "Yochai Benkler",
    position: "Berkman Professor of Entrepreneurial Legal studies at Harvard Law School",
    description: "Benkler studies commons-based peer production and published his seminal book 'The Wealth of Networks' in 2009. He is the co-director of the Berkman Klein Center for Internet and Society at Harvard University.",
    image: "./assets/images/speaker_03.png"
  }
];

const speakersContainer = document.getElementById("speakers");
const showMoreButton = document.getElementById("showMoreButton");
const initialVisibleSpeakers = window.innerWidth >= 768 ? speakersData.length : 2;
let visibleSpeakers = initialVisibleSpeakers;

function renderSpeakers() {
  speakersContainer.innerHTML = ""; // Clear previous content

  for (let i = 0; i < visibleSpeakers; i++) {
    const speaker = speakersData[i];

    const speakerElement = document.createElement("div");
    speakerElement.className = "speaker";

    const speakerImage = document.createElement("div");
    speakerImage.className = "speaker-image";
    const image = document.createElement("img");
    image.src = speaker.image;
    image.alt = "";
    speakerImage.appendChild(image);

    const speakerInfo = document.createElement("div");
    speakerInfo.className = "speaker-info";

    const speakerName = document.createElement("h3");
    speakerName.textContent = speaker.name;

    const speakerPosition = document.createElement("p");
    speakerPosition.className = "speaker-position";
    speakerPosition.textContent = speaker.position;

    const speakerDescription = document.createElement("p");
    speakerDescription.className = "speaker-description";
    speakerDescription.textContent = speaker.description;

    speakerInfo.appendChild(speakerName);
    speakerInfo.appendChild(speakerPosition);
    speakerInfo.appendChild(document.createElement("br"));
    speakerInfo.appendChild(speakerDescription);

    speakerElement.appendChild(speakerImage);
    speakerElement.appendChild(speakerInfo);

    speakersContainer.appendChild(speakerElement);
  }
}

function showMoreSpeakers() {
  visibleSpeakers = speakersData.length; // Show all speakers
  renderSpeakers();
  showMoreButton.style.display = "none"; // Hide the "Show More" button
}

renderSpeakers();

if (window.innerWidth < 768) {
  showMoreButton.addEventListener("click", showMoreSpeakers);
}