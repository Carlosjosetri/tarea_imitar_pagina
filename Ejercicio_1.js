

let palindroma =function(n){
    var x="";
   
    for(i=n.length-1; i>=0; i--){
    x=x+n[i];
    }
  
  if(n==x){
      console.log("Palindroma");
   }
   else{
    console.log("Palindroma'nt");
   }

};