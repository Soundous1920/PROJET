let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");


closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});


// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}
var map = L.map('map').setView([35.209928159847166, -0.6332289486794277], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([35.209928159847166, -0.6332289486794277]).addTo(map);





function showProfile(){
  document.getElementById('container').style.display='block';
  document.getElementById('map').style.display='none';
}
function showProfile(){
  document.getElementById('bx-x').style.display='none';
  document.getElementById('map').style.display='block';
}
document.addEventListener("DOMContentLoaded", function() {
  const vehiclesLink = document.querySelector('.nav-list li:nth-child(8) .name a');

  vehiclesLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default behavior of the link
      
      // Create a div for the popup
      const popup = document.createElement('div');
      popup.classList.add('popup');
      
      // Add content to the popup
      popup.innerHTML = `
          <div class="popup-content">
          <div class="pfpcontainer">
        <div class="container_profile">
            <div class="image">
                <img src="../images/user.jpeg" alt="profile picture" class="pfp">
            </div>
            <div class="changepfpbox">
                
                <button class="pfpbtn">Change</button>
              
            </div>
        </div>
        <div class="pfpcontainer_modification">
           
            <ul class="options">
                <li>
                   <a href="#">
                    <i class='bx bxs-envelope' ></i>
                    <span class="links_name">Change email</span>
                   </a>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bxs-lock'></i>
                    <span class="links_name">Change password</span>
                    </a>
                </li>
                
                <li>
                    <a href="../html/index.html">
                        <i class='bx bx-log-out'></i>
                    <span class="links_name">Log out</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i class='bx bxs-help-circle'></i>
                    <span class="links_name">FAQ</span>
                    </a>
                </li>
                
               
            </ul>
        </div>
        
    </div>
    
   
    
              <button class="close-popup">Close</button>
          </div>
          
          </div>
              <script src="../js/vehicules.js"></script>
          </div>
      `;
      
      // Append the popup to the body
      document.body.appendChild(popup);

      // Add event listener to close the popup
      const closeButton = popup.querySelector('.close-popup');
      closeButton.addEventListener('click', function() {
          popup.remove();
      });
      
  });
});

// js of vehicules
document.addEventListener("DOMContentLoaded", function() {
  var deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          var vehicleDiv = button.parentElement;
          vehicleDiv.remove();
      });
  });

  var modifyButtons = document.querySelectorAll(".modify");
  modifyButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          var vehicleDiv = button.parentElement;
          var modelSpan = vehicleDiv.querySelector(".model span");
          var currentModel = modelSpan.textContent;
          var modelInput = prompt("Enter new vehicle model:", currentModel);
          if (modelInput !== null) {
              modelSpan.textContent = modelInput;
          }
      });
  });
});


//profile 
document.addEventListener("DOMContentLoaded", function() {
  const vehiclesLink = document.querySelector('.nav-list li:nth-child(2) a');

  vehiclesLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default behavior of the link
      
      // Create a div for the popup
      const popup = document.createElement('div');
      popup.classList.add('popup');
      
      // Add content to the popup
      popup.innerHTML = `
          <div class="popup-content">
          <div class="container">
          
                  <div class="vehicule">
                      <img src="../images/mazda-6-83283.jpg" alt="">
                    <p class="model">Vehicule model <span>Mazda</span></p>
                        <p class="model">Vehicule Id <span>123 498 687</span></p>
                      <p class="model">Registration date <span>19/03/2024</span></p>
                     <button class="modify">Modify</button>
                      <button class="delete">Delete</button>
                      
                  </div>
                  <div class="vehicule">
                      <img src="../images/mazda-6-83283.jpg" alt="">
                    <p class="model">Vehicule model <span>Mazda</span></p>
                        <p class="model">Vehicule Id <span>123 498 687</span></p>
                      <p class="model">Registration date <span>19/03/2024</span></p>
                     <button class="modify">Modify</button>
                      <button class="delete" onclick="delete()">Delete</button>
  
                      
                  </div>
                 
                  <div class="vehicule">
                      <img src="../images/mazda-6-83283.jpg" alt="">
                    <p class="model">Vehicule model <span>Mazda</span></p>
                        <p class="model">Vehicule Id <span>123 498 687</span></p>
                      <p class="model">Registration date <span>19/03/2024</span></p>
                     <button class="modify">Modify</button>
                      <button class="delete">Delete</button>
                      
                  </div>
                  
              </div>
              <button class="close-popup">Close</button>
          </div>
          
          </div>
              <script src="../js/vehicules.js"></script>
          </div>
      `;
      
      // Append the popup to the body
      document.body.appendChild(popup);

      // Add event listener to close the popup
      const closeButton = popup.querySelector('.close-popup');
      closeButton.addEventListener('click', function() {
          popup.remove();
      });
      
  });
});
const currentpos=document.getElementById('Currentposition');
currentpos.style.display='none';
function showHome(){
    document.getElementById('home').style.display='block';
    document.getElementById('Currentposition').style.display='none';
}
function showCurrent(){
    document.getElementById('home').style.display='none';
    document.getElementById('Currentposition').style.display='block';
}
