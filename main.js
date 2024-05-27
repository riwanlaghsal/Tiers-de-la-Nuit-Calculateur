function getDecimalPart(value) {
    // Convertir le nombre en chaîne de caractères
    const stringValue = value.toString();

    // Trouver l'index du point décimal
    const decimalIndex = stringValue.indexOf('.');

    // Si le point décimal n'est pas trouvé, retourner une chaîne vide
    if (decimalIndex === -1) {
        return '';
    }

    // Récupérer la partie décimale après le point
    const decimalPart = stringValue.substring(decimalIndex + 1);

    // Si la partie décimale est vide, retourner une chaîne vide
    if (decimalPart === '') {
        return '';
    }

    // Retourner la partie décimale incluant le zéro avant les chiffres
    return '0.' + decimalPart;
  }

  function getIntPart(value) {
    return Math.floor(value);
}

function thirdOfNight() {

  let maghreb = document.getElementById("maghreb").value;
  let fajr = document.getElementById("fajr").value;
  if (maghreb == "" || fajr == "") {
    window.alert(
      "ERREUR : AVEZ VOUS BIEN RENTRÉ LES HEURES DE MAGHREB ET FAJR ?"
    );
  }
  else {

    const timeInputMaghreb = document.getElementById('maghreb');

    const timeValueMaghreb = timeInputMaghreb.value;

    const selectedTimeMaghreb = new Date("2000-01-01T" + timeValueMaghreb);

    const timeInputFajr = document.getElementById('fajr');

    const timeValueFajr = timeInputFajr.value;

    const selectedTimeFajr = new Date("2000-01-01T" + timeValueFajr);

    const hM = selectedTimeMaghreb.getHours();
    const minM = selectedTimeMaghreb.getMinutes();
    
    const hF = selectedTimeFajr.getHours();
    const minF = selectedTimeFajr.getMinutes();

    console.log(hM);
    console.log(minM);
    console.log(hF);
    console.log(minF);
    
    let resultM = 0;
  
    resultM = (hM * 60);
    resultM += minM;
  
    let resultF = 0;
  
    resultF = (hF * 60);
    resultF += minF;

    let totalNight = 0;
  
    totalNight = 1440 - resultM + resultF;
    let third = totalNight/3;
    let mid = totalNight/2;


    mid = resultM + mid;
    mid = mid/60;
  
  if (mid > 24) {
    mid = mid -24;
  }
  
  let first = (resultM + third);
  let sec = (first + third);
  let last = (sec + third);
  
  first = first / 60;
  sec = sec / 60;
  last = last /60;
  
  if (first > 24) {
    first = first - 24;
  }
  
  if (sec > 24) {
    sec = sec - 24;
  }
  
  if (last > 24) {
    last = last - 24;
  }
  
  
  let int_first = getIntPart(first);
  let dec_first = getDecimalPart(first);
  
  let int_sec = getIntPart(sec);
  let dec_sec = getDecimalPart(sec);
  
  let int_last = getIntPart(last);
  let dec_last = getDecimalPart(last);
  
  let int_mid = getIntPart(mid);
  let dec_mid = getDecimalPart(mid);

  console.log(dec_sec);

  dec_first = dec_first * 60;
  dec_sec = dec_sec * 60;
  dec_last = dec_last * 60;
  dec_mid = dec_mid * 60;

  let int_dec_first = getIntPart(dec_first);
  let int_dec_sec = getIntPart(dec_sec);
  let int_dec_last = getIntPart(dec_last);
  let int_dec_mid = getIntPart(dec_mid);

  if (int_dec_first < 10) {
    int_dec_first = "0" + int_dec_first;
  }

  if (int_dec_sec < 10) {
    int_dec_sec = "0" + int_dec_sec;
  }

  if (int_dec_last < 10) {
    int_dec_last = "0" + int_dec_last;
  }

  if (int_dec_mid < 10) {
    int_dec_mid = "0" + int_dec_mid;
  }

  if (int_first < 10) {
    int_first = "0" + int_first;
  }

  if (int_sec < 10) {
    int_sec = "0" + int_sec;
  }

  if (int_last < 10) {
    int_last = "0" + int_last;
  }

  if (int_mid < 10) {
    int_mid = "0" + int_mid;
  }



  document.getElementById('firstH').textContent = "LE SECOND TIER DE LA NUIT DÉBUTE À";
  document.getElementById('secondH').textContent = "LE DERNIER TIER DE LA NUIT DÉBUTE À";
  document.getElementById('thirdH').textContent = "LA MOITIÉ DE LA NUIT DÉBUTE À";

  document.getElementById('result').textContent = int_first + "h" + int_dec_first;
  document.getElementById('result2').textContent = int_sec + "h" + int_dec_sec;
  document.getElementById('result3').textContent = int_mid + "h" + int_dec_mid;


  document.getElementById('resultColor').classList.add('grid-color');
}

}

document.getElementById('submit').addEventListener('click', thirdOfNight);

//Get context and screen size;
var ctx = cnv.getContext("2d");
var W = window.innerWidth;
var H = window.innerHeight;

//Set Canvas and Background Color;
cnv.width = W;
cnv.height = H;


//Glow effect;
ctx.shadowBlur = 10;
ctx.shadowColor = "white";

function animate() {
  //Random position and size of stars;
  let x = W * Math.random();
  let y = H * Math.random();
  let r = 2.5 * Math.random();

  //Draw the stars;
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();

  //Using setTimeout instead of window.requestAnimationFrame for slower speed... window.requestAnimationFrame is approximately equal to setTimeout(func, 17);
  setTimeout(animate, 100);
}
animate();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("disclaimer");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    document.getElementById('resultColor').classList.remove('grid-color');
    document.getElementById('firstH').textContent = "";
    document.getElementById('secondH').textContent = "";
    document.getElementById('thirdH').textContent = "";
  
    document.getElementById('result').textContent = "";
    document.getElementById('result2').textContent = "";
    document.getElementById('result3').textContent = "";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

