function volume_sphere() {
    //Write your code here
   event.preventDefault();
  
    // Get the value of the radius from the input
    var radius = parseFloat(document.getElementById('radius').value);
  
    // Validate the radius: it must be a non-negative number
    if (isNaN(radius) || radius < 0) {
        // If the input is invalid, set the volume field to "NaN"
        document.getElementById('volume').value = 'NaN';
        return; // Exit the function if input is invalid
    }
  
    // Calculate the volume of the sphere
    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  
    // Round the volume to 4 decimal places
    volume = volume.toFixed(4);
  
    // Display the calculated volume in the volume field
    document.getElementById('volume').value = volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
