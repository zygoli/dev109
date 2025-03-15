
const images = [
    { src: "https://images.pexels.com/photos/235333/pexels-photo-235333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "autocross is a fun motersport, and its also the cheepest one to get into!", description: "autocross is a fun motersport, and its also the cheepest one to get into!" },
    { src: "https://images.pexels.com/photos/9944670/pexels-photo-9944670.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "boxing is the best sport anyone has ever invented!", description: "boxing is the best sport anyone has ever invented!" },
    { src: "https://images.pexels.com/photos/2397612/pexels-photo-2397612.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "the ocean and surfing makes you feel free and each rides a new adventure", description: "the ocean and surfing makes you feel free and each rides a new adventure" },
    { src: "https://images.unsplash.com/photo-1709432406576-12e154445772?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "goofing off with freinds is important it helps with your health too", description: "goofing off with freinds is important it helps with your health too" },
    { src: "https://images.unsplash.com/photo-1526908019343-42943137b36e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9uZ2JvYXJkfGVufDB8fDB8fHww", alt: "longborading is a fun activity you can do with your freinds", description: "longborading is a fun activity you can do with your freinds" }
];


const imageElement = document.getElementById("image");
const descriptionElement = document.getElementById("description");


const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

let currentIndex = 0;


imageElement.src = images[currentIndex].src;
imageElement.alt = images[currentIndex].alt;
descriptionElement.textContent = images[currentIndex].description;

let timerInterval = null;

function updateImage(index) {
    imageElement.src = images[index].src;
    imageElement.alt = images[index].alt;
    descriptionElement.textContent = images[index].description;
}

function startTimer() {
    timerInterval = setInterval(() => {
        nextButton.click();
    }, 4000);
}


function stopTimer() {
    clearInterval(timerInterval);
}


previousButton.addEventListener("click", () => {
    stopTimer();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
    startTimer();
});

nextButton.addEventListener("click", () => {
    stopTimer();
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
    startTimer();
});

startTimer();
