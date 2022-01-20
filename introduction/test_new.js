//TODO: identifier

/**
 * identifier adalah penamaan variable, fungsi ataupun parameter
 * karakter pertamanya hanya bisa huruf a-z, atau A-Z dan simbol underscore atau dollar
 * tidak boleh menggunakan angka didepan.
 */

var sepuluh$rpl = '10 RPL'
console.log(sepuluh$rpl)

//TODO: statement

/**
 * statement = suatu peryataan js yang paling dasar dan memiliki tugas tertentu
 */

let name = "Hello wold" //? STATEMENT DASAR
console.log(name); 

//TODO: expression
/**
 * expression = merupakan ekspresi js yang berfungsi untuk menghasilkan nilai tertentu.
 */

let first = 9
let second = 2
let result = first + second
if(result>1){
    console.log(`Hasil dari ${first} & ${second} = `+result)
}

//TODO: scope
/**
 * cakupan kode agar bisa mengakses atau membatasi
 */

//TODO: global scope
/**
 * global scope merupakan cakupan diseluruh file
 */

var a = 'halo rekan rekan' //global scobe

function satu() {
    console.log(a)
}

function dua() {
    a = 'nilai sudah diubah' //local scope
    console.log(a)
}

satu()
dua()

//const var let

const c = 'mobil'
function orang1() {
    console.log(c)
    if(true){
        const d = 'motor'
        console.log(d)
    }
}
orang1()

//TODO: keyword | global scope | block scope | local scope
/**     var     | bisa         | gak bisa    | bisa     
 *      const   | bisa         | bisa        | bisa
 *      let     | bisa         | bisa        | bisa
 */

let globalScope = 'global'

function scope() {
    globalScope = 'scope'
    console.log(globalScope)
    if(true){
        var localScope = 'Local' //! saya menggunakan var supaya variabel localScope bisa digunakan difuncion scope
    }
    console.log(localScope)
}

function scope$2() {
    globalScope = 'global scope'
    if(true){
        let localScope$2 = 'local kedua'
        console.log(localScope)
    }
}

scope()