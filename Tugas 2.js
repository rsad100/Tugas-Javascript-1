const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

let ratarata = (mtk + bahasaIndonesia + bahasaInggris + ipa)/4;
let grade;

if ( isNaN(mtk, bahasaIndonesia, bahasaInggris, ipa) == false){

    if ( 90 <= ratarata && ratarata <= 100 ){
        grade = "A";
        console.log(grade);
        console.log(ratarata);
    } else if ( 80 <= ratarata && ratarata <= 89 ){
        grade ="B";
        console.log(grade);
        console.log(ratarata);
    } else if ( 70 <= ratarata && ratarata <= 79){
        grade = "C";
        console.log(grade);
        console.log(ratarata);
    } else if ( 60 <= ratarata && ratarata <= 69){
        grade = "D";
        console.log(grade);
        console.log(ratarata);
    } else if ( 0 <= ratarata && ratarata <= 59){
        grade = "E";
        console.log(grade);
        console.log(ratarata);
    }

} else {
    console.log("Data tidak valid")
}


