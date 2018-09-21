let ordenar= function(n){
var key;
var j;

 for(i=1;i<n.length; i++){
  key=n[i];
  j=i-1;
  while(j>0 && n[j]>key){
      
      n[j+1]=n[j];
      j=j-1;
      console.log(n);
  } 
  n[i+j]=key;
}
console.log("hola");
console.log(n);

}