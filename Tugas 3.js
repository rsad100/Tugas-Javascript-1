let star = "";

function printSegitiga(n) {
for(var i=n; i >= 1; i--){
    for(var j=1, y=1; j<=i; j++, y++){
     star += y
    }
    star += "\n";
  }
  console.log(star)
}

printSegitiga(7);