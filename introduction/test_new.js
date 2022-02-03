//TODO: identifier

/**
 * identifier adalah penamaan variable, fungsi ataupun parameter
 * karakter pertamanya hanya bisa huruf a-z, atau A-Z dan simbol underscore atau dollar
 * tidak boleh menggunakan angka didepan.
 */

// var sepuluh$rpl = '10 RPL'
// console.log(sepuluh$rpl)

//TODO: statement

/**
 * statement = suatu peryataan js yang paling dasar dan memiliki tugas tertentu
 */

// let name = "Hello wold" //? STATEMENT DASAR
// console.log(name); 

//TODO: expression
/**
 * expression = merupakan ekspresi js yang berfungsi untuk menghasilkan nilai tertentu.
 */

// let first = 9
// let second = 2
// let result = first + second
// if(result>1){
//     console.log(`Hasil dari ${first} & ${second} = `+result)
// }

//TODO: scope
/**
 * cakupan kode agar bisa mengakses atau membatasi
 */

//TODO: global scope
/**
 * global scope merupakan cakupan diseluruh file
 */

// var a = 'halo rekan rekan' //global scobe

// function satu() {
//     console.log(a)
// }

// function dua() {
//     a = 'nilai sudah diubah' //local scope
//     console.log(a)
// }

// satu()
// dua()

 //const var let

// const c = 'mobil'
// function orang1() {
//     console.log(c)
//     if(true){
//         const d = 'motor'
//         console.log(d)
//     }
// }
// orang1()

//TODO: keyword | global scope | block scope | local scope
/**     var     | bisa         | gak bisa    | bisa     
 *      const   | bisa         | bisa        | bisa
 *      let     | bisa         | bisa        | bisa
 */

// let globalScope = 'global'

// function scope() {
//     globalScope = 'scope'
//     console.log(globalScope)
//     if(true){
//         var localScope = 'Local' //! saya menggunakan var supaya variabel localScope bisa digunakan difuncion scope
//     }
//     console.log(localScope)
// }

// function scope$2() {
//     globalScope = 'global scope'
//     if(true){
//         let localScope$2 = 'local kedua'
//         console.log(localScope$2)
//     }
// }

// scope()
// scope$2()

//todo: closure
/**
 * closure adalah cara mengakses variable dari parent scope di dalam child scope parent
 */

// function naruto(sapa) {
//     var kalimat = 'HORASS '+ sapa
//     return function (){
//         console.log(kalimat)
//     }
// }
// var kurama = naruto("NGAB")
// kurama()

//! CHALLENGE

// var nick = 'nama : '
// var klass = 'kelas : '

// function fullName(paramGeis) {
//     var siswa = `${nick}Harits` + paramGeis
//     var kelas = `${klass}X RPL A` + paramGeis
//     return function(){
//         console.log(siswa)
//         console.log(kelas)
//     }
// }
// var daftar = fullName("")
// daftar()

// function fullName(nama, keelas) {
//     var namaku = "nama : " + nama
//     var kelaskuh = "kelas : " + keelas
//     return function(){
//         console.log(namaku)
//         console.log(kelaskuh)
//     }
// }

// var siswa = fullName("Harits", "X RPL A")
// siswa()

//TODO: Tipe data
/**
 * tipe data adalah karakteristik dari nilai sebuah data, di js terdapat
 * 7,
 * null, undifined, number, bigInt, string dan symbols (es6).
 * dan tipe data kompleks object.
 * 
 * looselt type yaitu variable tidak menentukan sebuah tipe data, melainkan 
 * nilai yang menentukan tipe data tersebut
 */

// let y = "typeog tipe datanya adalah untuk mengechek tipe data lain"

// let lol

// let pop = null

// console.log(typeof y)

//todo: tipe data undifined
/**
 * tipe data yang nilainya kosong atau tidak di definisikan.
 */

//todo: tipe data null
/**
 * tipe data primitif yang nilainya kosong atau null.
 */

//NaN not a Number
/**
 * NaN merupakan nilai numeric yang memberitahu bahwa nilainya itu valid number
 * atau bukan number.
 */

// let xr = 17
// if(xr >= 17){
//     xr = 'anda belum cukup umur'
//     console.log(xr/2)
// }else{
//     xr = 'sudah cukup umur'
//     console.log(xr)
// }

//todo: string
/**
 * string merupakan tipe data yang menampung karakter symbolnya '', "", ``
 */

// let lom = 'tiwiii'
// console.log(lom.length)

// for(let tiwi = 0; tiwi < 5; tiwi++){
//     console.log(lom[tiwi])
// }

 //Object

// let identitas = {
//     firstName : 'Parhan',
//     lastName : 'pratama',
//     email: 'parhanswag@gmail.com',
//     instagram : 'parhan',
//     linkedin : 'parhan pratama',
//     phone : '0829292929',
//     addres: {
//         city: 'Bogor',
//         number : '15',
//         street : 'jalan kutu buku'
//     }
// }

/**cara memanggil object menggunakan titik
console.log('nama ku :'+ identitas.firstName,''+identitas.lastName)*/

//cara memanggil dengan array
// console.log(identitas['firstName']+identitas.lastName)

// console.table(identitas)


// let tabel = {
//     kendaraan : {
//         mobil:'peugeot',
//         motor:'V-xion',
//         sepeda:'united'
//     },
//     jalan : 'Jalan Berkah',
//     kota: 'bekasi',
//     platNomor:'jabodetabek',
//     kereta: {
//         namaKa: 'Argo bromo anggrek',
//         tujuan: 'senen-pasar turi'
//     }
// }

// console.table(tabel)

// const mobil = 'peugeot'
// const motor = 'ninja'

// console.log(`mobil saya adalah ${mobil} dan motor saya adalah ${motor}`)


/**
 * Function
 * merupakan sebuah blok kode untuk membungkus sebuah proses penulisan kode agar tidak diulang kembali
 */


// todo funcion biasa

// function name(params) {
//     console.log('saya belajar javaScript')
// }

// name()

// todo anonymous funcion

// const anon = function(param){
//     console.log(param)
// }
// anon('Saya belajar javaScript')

//todo arrow function

// let third = () =>{
//     console.log('ini adalah arrow funcion')
// }
// third()

/**
 * !High Order Funciont
 * fungsi yang menerima argumen berupa fungsi lain serta return bisa berupa fungsi juga.
 */

//todo: normal funcion
// function genap(number) {
//     return number % 2 == 0
// }
// function buatNgePrint(number) {
//     let isTrue = genap(number)
//     if(isTrue){
//         console.log(`${number} adalah bilangan genap`)
//     }else{
//         console.log(`${number} adalah bilangan ganjil`)

//     }
// }
// buatNgePrint(10)

//todo: High Order Function
// function genap(number) {
//     return number % 2 == 0
// }
// function print(number, callBack) {
//     let isTrue = callBack(number)
//     if(isTrue){
//         console.log(`${number} adalah bilangan genap`)
//     }else{
//         console.log(`${number} adalah bilangan ganjil`)

//     }
// }
// print(10, genap)

// function sport(mobil) {
//     return mobil >= 100
// }

// function warna(mobil) {
//     return mobil == 'merah'
// }

// function kendaraan(mobil, callback) {
//     let a = callback(mobil)
//     if(a){
//         console.log(`mobil dengan ${mobil} adalah mobil saya`)
//     }else{
//         console.log(`mobil dengan ${mobil} bukan mobil saya`)
//     }
// }

// kendaraan()

//!SOAL High Order Function

/**
 * Terdapat 2 funcion 
 * - tahun <= 2001 itu gaperlu bayar pajak
 * 
 * cc >=150 harus bayar pajak
 */

function tahun(mobil) {
    return mobil >= 2001
}

function cc(mobil) {
    return mobil >= 150
}

function kendaraan(mobil, callback) {
         let a = callback(mobil)
         if(a){
             console.log(`mobil dengan ${mobil} harus bayar pajak`)
         }else{
             console.log(`mobil dengan ${mobil} gaperlu bayar pajak`)
         }
     }

     kendaraan(110, tahun)