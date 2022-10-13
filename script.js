let celsuisunit = document.getElementById("celsuis");
let fahrenheitUnit = document.getElementById("fahrenheit");
let kelvinUnit = document.getElementById("kelvin");
function onCelsuis() {
  const celsuisValue = Number(celsuisunit.value);
  const celsuisTofahre = (celsuisValue * 9) / 5 + 32;
//   console.log(celsuisTofahre);
  fahrenheitUnit.value= celsuisTofahre;
  const celsuisTokelvin = celsuisValue + 273.15;
  kelvinUnit.value= celsuisTokelvin;
//   console.log(celsuisTokelvin);
}
function onFahre() {
  const fahreValue = Number(fahrenheitUnit.value);
  const fahreTocelsuis = (fahreValue - 32)  * 5/9;
//   console.log(fahreTocelsuis);
  celsuisunit.value = fahreTocelsuis;
  const fahreTokelvin = fahreTocelsuis + 273.15;
//   console.log(fahreTokelvin);
  kelvinUnit.value = fahreTokelvin
}
function onKelvin() {
  const kelvinValue = Number(kelvinUnit.value);
  const kelvinTocelsuis = kelvinValue - 273.15;
  celsuisunit.value = kelvinTocelsuis
//   console.log(kelvinTocelsuis);
  const kelvinTofahre = (kelvinValue - 273.15) * 1.8 +32;
  fahrenheitUnit.value = kelvinTofahre
//   console.log(kelvinTofahre);
}
function callerFunction() {
  celsuisunit.addEventListener("input", onCelsuis);
  fahrenheitUnit.addEventListener("input", onFahre);
  kelvinUnit.addEventListener('input',onKelvin);

}
callerFunction();
