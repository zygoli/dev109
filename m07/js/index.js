function createBlackColumn() {
    let blackColumn = document.createElement('div');
    blackColumn.style.position = 'fixed';
    blackColumn.style.top = '0px';
    blackColumn.style.right = '150px';
    blackColumn.style.width = '200px';
    blackColumn.style.height = '100vh';
    blackColumn.style.backgroundColor = 'black';
    blackColumn.style.color = 'white';
    blackColumn.style.display = 'flex';
    blackColumn.style.flexDirection = 'column';
    blackColumn.style.alignItems = 'center';
    blackColumn.style.paddingTop = '20vh';

    
    let hotelAvailabilityText = document.createElement('span');
    hotelAvailabilityText.style.fontSize = '24px';
    hotelAvailabilityText.style.color = 'green';
    hotelAvailabilityText.innerText = 'Hotel Availability';
    blackColumn.appendChild(hotelAvailabilityText);

    
    let line1 = document.createElement('hr');
    line1.style.width = '80%';
    line1.style.border = '1px solid white';
    line1.style.marginTop = '10px';
    line1.style.marginBottom = '10px';
    blackColumn.appendChild(line1);

   
    let quayRoomsText = document.createElement('span');
    quayRoomsText.style.fontSize = '14px';
    quayRoomsText.style.color = 'white';
    quayRoomsText.innerText = 'Quay Rooms: 15';
    blackColumn.appendChild(quayRoomsText);

    
    let parkRoomsText = document.createElement('span');
    parkRoomsText.style.fontSize = '14px';
    parkRoomsText.style.color = 'white';
    parkRoomsText.innerText = 'Park Rooms: 43';
    blackColumn.appendChild(parkRoomsText);

   
    let line2 = document.createElement('hr');
    line2.style.width = '80%';
    line2.style.border = '1px solid white';
    line2.style.marginTop = '10px';
    line2.style.marginBottom = '10px';
    blackColumn.appendChild(line2);

  
    let sunsetRoomsText = document.createElement('span');
    sunsetRoomsText.style.fontSize = '14px';
    sunsetRoomsText.style.color = 'white';
    sunsetRoomsText.innerText = 'Sunset Rooms: 76';
    blackColumn.appendChild(sunsetRoomsText);

    document.body.appendChild(blackColumn);
}
function createTopLeftBox() {
  let topLeftBox = document.createElement('div');

  topLeftBox.style.position = 'fixed';
  topLeftBox.style.top = '0px';
  topLeftBox.style.left = '0px';
  topLeftBox.style.width = '100px';
  topLeftBox.style.height = '100px';
  topLeftBox.style.backgroundColor = '#000000';
  topLeftBox.style.display = 'flex';
  topLeftBox.style.flexDirection = 'column';
  topLeftBox.style.justifyContent = 'center';
  topLeftBox.style.alignItems = 'center';
  topLeftBox.style.paddingBottom = '10px';

  let image = document.createElement('img');
  image.src = 'https://i.ibb.co/8DfLqrX1/Screenshot-2025-02-22-111842.png'; 
  image.style.width = '50px';
  image.style.height = '50px';
  image.style.marginBottom = '10px';
  topLeftBox.appendChild(image);

  let travelWorthyText = document.createElement('span');
  travelWorthyText.style.fontSize = '12px';
  travelWorthyText.style.color = 'white';
  travelWorthyText.style.fontFamily = 'cursive';
  travelWorthyText.style.textAlign = 'center';
  travelWorthyText.innerText = 'TravelWorthy';
  topLeftBox.appendChild(travelWorthyText);

  document.body.appendChild(topLeftBox);
}

createBlackColumn();



function createTopLeftBox() {
  let topLeftBox = document.createElement('div');

  topLeftBox.style.position = 'fixed';
  topLeftBox.style.top = '0px';
  topLeftBox.style.left = '0px';
  topLeftBox.style.width = '100px';
  topLeftBox.style.height = '100px';
  topLeftBox.style.backgroundColor = '#000000';
  topLeftBox.style.display = 'flex';
  topLeftBox.style.flexDirection = 'column';
  topLeftBox.style.justifyContent = 'center';
  topLeftBox.style.alignItems = 'center';
  topLeftBox.style.paddingBottom = '10px';

  let image = document.createElement('img');
  image.src = 'https://i.ibb.co/8DfLqrX1/Screenshot-2025-02-22-111842.png'; 
  image.style.width = '50px';
  image.style.height = '50px';
  image.style.marginBottom = '10px';
  topLeftBox.appendChild(image);

  let travelWorthyText = document.createElement('span');
  travelWorthyText.style.fontSize = '12px';
  travelWorthyText.style.color = 'white';
  travelWorthyText.style.fontFamily = 'cursive';
  travelWorthyText.style.textAlign = 'center';
  travelWorthyText.innerText = 'TravelWorthy';
  topLeftBox.appendChild(travelWorthyText);

  document.body.appendChild(topLeftBox);
}
createTopLeftBox();


createBlackColumn();
createTopLeftBox();
function createTopLeftBox() {
  let topLeftBox = document.createElement('div');

  topLeftBox.style.position = 'fixed';
  topLeftBox.style.top = '0px';
  topLeftBox.style.left = '0px';
  topLeftBox.style.width = '100px';
  topLeftBox.style.height = '100px';
  topLeftBox.style.backgroundColor = '#000000';
  topLeftBox.style.display = 'flex';
  topLeftBox.style.flexDirection = 'column';
  topLeftBox.style.justifyContent = 'center';
  topLeftBox.style.alignItems = 'center';
  topLeftBox.style.paddingBottom = '10px';

  let image = document.createElement('img');
  image.src = 'https://i.ibb.co/8DfLqrX1/Screenshot-2025-02-22-111842.png'; 
  image.style.width = '50px';
  image.style.height = '50px';
  image.style.marginBottom = '10px';
  topLeftBox.appendChild(image);

  let travelWorthyText = document.createElement('span');
  travelWorthyText.style.fontSize = '12px';
  travelWorthyText.style.color = 'white';
  travelWorthyText.style.fontFamily = 'cursive';
  travelWorthyText.style.textAlign = 'center';
  travelWorthyText.innerText = 'TravelWorthy';
  topLeftBox.appendChild(travelWorthyText);

  document.body.appendChild(topLeftBox);
}
