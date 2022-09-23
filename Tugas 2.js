const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

let ratarata = (mtk + bahasaIndonesia + bahasaInggris + ipa)/4;
let grade;

if ( typeof mtk == "number" && typeof bahasaIndonesia == "number" && typeof bahasaInggris == "number" && typeof ipa == "number"){

    if ( 90 <= ratarata && ratarata <= 100 ){
        grade = "A";
        console.log(grade);
        console.log(ratarata);
    } else if ( 80 <= ratarata && ratarata <= 90 ){
        grade ="B";
        console.log(grade);
        console.log(ratarata);
    } else if ( 70 <= ratarata && ratarata < 80){
        grade = "C";
        console.log(grade);
        console.log(ratarata);
    } else if ( 60 <= ratarata && ratarata <= 70){
        grade = "D";
        console.log(grade);
        console.log(ratarata);
    } else if ( 0 <= ratarata && ratarata <= 60){
        grade = "E";
        console.log(grade);
        console.log(ratarata);
    }

} else {
    console.log("Data tidak valid")
}


