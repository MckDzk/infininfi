function obliczObjętość(event) {
  event.preventDefault();

  const promien = parseFloat(document.getElementById("promien").value);
  const wysokosc = parseFloat(document.getElementById("wysokosc").value);

  const objetosc = (1 / 3) * Math.PI * wysokosc * (3 * promien ** 2 + wysokosc ** 2);

  document.getElementById("wynik").innerHTML = `Objętość ściętej kuli wynosi: ${objetosc.toFixed(2)}`;
}
