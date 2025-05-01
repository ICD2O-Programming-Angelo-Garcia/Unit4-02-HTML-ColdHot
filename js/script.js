// This function is triggered when the user clicks "Click to Check"
function checkTemperature() {
  // Get the temperature entered by the user
  const temperature = parseInt(document.getElementById("temperature-input").value);

  // Validate if the input is a valid number
  if (isNaN(temperature)) {
    document.getElementById("result").innerHTML = "Please enter a valid number for temperature.";
    return; // Stop the function if the input is invalid
  }

  // Check if the temperature is high (hot) or low (cold)
  if (temperature >= 25) {
    document.getElementById("result").innerHTML = "It's hot outside, go outside!";
  } else {
    document.getElementById("result").innerHTML = "It's cold outside, stay inside!";
  }
}
