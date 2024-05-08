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

