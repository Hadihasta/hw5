// DOM (document model object) / akses HTML dari Javascript

let data_nama = [];
let data_umur = [];
let data_uang = [];

// 1. INPUT asychronus
// setTimeout(function () {}, 2000);
// nama

const input_nama = document.getElementById("nama"); // mendapatkan apa yang di masukan di kolom nama
console.log(input_nama.value); //  value yang ada di masukan akan di terima
data_nama.push(input_nama.value); //  value yang diterima akan di dorong untuk di tampilkan ke array
console.log(data_nama);

if (data_nama.length <= 10) {
  alert("Nama harus terdiri dari minimal 10 karakter.");
} else {
  const node = document.createElement("tr"); // membuat tr baru dengan isi text yang di input
  const value_li = document.createTextNode(input_nama.value);
  node.appendChild(value_li);
  document.getElementById("data_nama").appendChild(node);
}

//   umur
let umur = 0;
const input_umur = document.getElementById("umur");
console.log(input_umur.value);
data_umur.push(input_umur.value);
console.log(data_umur);
umur = +umurInput;
if (umurInput <= 25) {
  alert("umur Minimal 25 ");
} else {
  data_umur.push(umur);
}

//   uang
const input_uang = document.getElementById("uang");
console.log(input_uang.value);
data_uang.push(input_uang.value);
console.log(data_uang);
let uang = data_uang.value;
const uangTotal = new Promise((resolve, reject) => {
  if (uangTotal >= 1000000 || uangTotal <= 100000) {
    resolve("UANG maximal 1 juta dan minimal 100 ribu ");
  } else {
    data_uang.push(uangTotal);
  }
});

belanja
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// 2.  TAMPIL

//   nama
const node = document.createElement("tr"); // membuat tr baru dengan isi text yang di input
const value_li = document.createTextNode(input_nama.value);
node.appendChild(value_li);
document.getElementById("data_nama").appendChild(node);

// umur
const node2 = document.createElement("tr");
const value_lu = document.createTextNode(input_umur.value);
node.appendChild(value_lu);
document.getElementById("data_umur").appendChild(node2);

// uang
const node3 = document.createElement("tr");
const value_la = document.createTextNode(input_uang.value);
node.appendChild(value_la);
document.getElementById("data_uang").appendChild(node3);
