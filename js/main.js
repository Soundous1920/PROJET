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

const changepass=document.getElementById('Changepass');
        const changeemail=document.getElementById('Changeemail');
        const changename=document.getElementById('Changename');
        
        changename.style.display='none';
        changeemail.style.display='none';
        changepass.style.display='none';
                function showChangeEmail(){
 document.getElementById('Changepass').style.display='none';
 document.getElementById('Changeemail').style.display='flex';
 document.getElementById('modifications').style.display='none';
 document.getElementById('Changename').style.display='none';
}
function showChangePass(){
    document.getElementById('Changepass').style.display='flex';
 document.getElementById('Changeemail').style.display='none';
 document.getElementById('modifications').style.display='none';
 document.getElementById('Changename').style.display='none';

}
function showProfileModifications(){
    document.getElementById('Changepass').style.display='none';
 document.getElementById('Changeemail').style.display='none';
 document.getElementById('modifications').style.display='block';
 document.getElementById('Changename').style.display='none';


}
function showChangename(){
    document.getElementById('Changepass').style.display='none';
 document.getElementById('Changeemail').style.display='none';
 document.getElementById('modifications').style.display='none';
 document.getElementById('Changename').style.display='flex';

}
//end profile functions



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


const vehicle=document.getElementById('vehicles');
vehicle.style.display='none';

const currentpos=document.getElementById('Currentposition');
currentpos.style.display='none';
const myprofile=document.getElementById('myprofile');
myprofile.style.display='none';
//home
function showHome(){
    document.getElementById('home').style.display='block';
    document.getElementById('Currentposition').style.display='none';
    document.getElementById('myprofile').style.display='none';
    document.getElementById('vehicles').style.display='none';

}
//vehicles
function showVehicles(){
    document.getElementById('home').style.display='none';
    document.getElementById('Currentposition').style.display='none';
    document.getElementById('myprofile').style.display='none';
    document.getElementById('vehicles').style.display='block';
}
//js of add new vehicule
document.getElementById('add-vehicle-btn').addEventListener('click', function() {
    document.getElementById('error').display= 'none';
    document.getElementById('model').value = '';
    document.getElementById('id').value = '';
    document.getElementById('registration-date').value = '';

    document.getElementById('add-vehicle-modal').style.display = 'block';
   
    document.getElementById('add-vehicle-modal').style.display = 'block';
});

document.getElementById('add-btn').addEventListener('click', function() {
    var model = document.getElementById('model').value;
    var id = document.getElementById('id').value;
    var registrationDate = document.getElementById('registration-date').value;

    if (model && id && registrationDate) {
        var container = document.querySelector('.vcontainer');

        var newVehicle = document.createElement('div');
        newVehicle.classList.add('vehicule');
        newVehicle.innerHTML = `
            <img src="../images/mazda-6-83283.jpg" alt="">
            <p class="model">Vehicle model <span>${model}</span></p>
            <p class="model">Vehicle ID <span>${id}</span></p>
            <p class="model">Registration date <span>${registrationDate}</span></p>
            <button class="modify">Modify</button>
            <button class="delete">Delete</button>
        `;

        container.appendChild(newVehicle);
        document.getElementById('add-vehicle-modal').style.display = 'none';
    } else {
        document.getElementById('error').style.display = 'block';
    
    }
});
document.getElementById('quit-btn').addEventListener('click', function() {
    document.getElementById('add-vehicle-modal').style.display = 'none';
});

// js of delete and modify vehicule 
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



//current position  
function showCurrent(){
    document.getElementById('home').style.display='none';
    document.getElementById('Currentposition').style.display='block';
    document.getElementById('myprofile').style.display='none';
    document.getElementById('vehicles').style.display='none';

}
//profile functions
function showProfile(){
    document.getElementById('home').style.display='none';
    document.getElementById('Currentposition').style.display='none';
    document.getElementById('myprofile').style.display='block';
    document.getElementById('vehicles').style.display='none';

}
//change profile picture
// JavaScript code
document.getElementById('changePfpBtn').addEventListener('click', function() {
    // Trigger file input click event
    document.getElementById('fileInput').click();
});

// Event listener for file input change
document.getElementById('fileInput').addEventListener('change', function() {
    const file = this.files[0]; // Get the selected file
    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file); // Read the file as data URL
        reader.onload = function() {
            // Set the profile picture source to the selected image
            document.querySelector('.pfp').src = reader.result;
        }
    }
});
