let star = "";

const printSegitiga = 5;

if ( typeof printSegitiga == "number"){
for(var i=printSegitiga; i >= 1; i--){
    
    for(var j=1, y=1; j<=i; j++, y++){
     star += y
    }
    star += "\n";
  
  }
  console.log(star)
} else {
  console.log("Data tidak valid")
}

