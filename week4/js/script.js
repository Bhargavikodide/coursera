var a=['yaakov','john','Jen','jason','paul','Frank','Larry','Paula','Laura','Jim'];
for(name=0 ; name<a.length ; name++) {
if(a[name].charAt(0)=='j' || a[name].charAt(0)=='J') {
console.log("Goodbye" + a[name]);
}
else {
 console.log("Hello" + a[name]);
}
}
