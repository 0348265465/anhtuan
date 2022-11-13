const n=10;
let s='';
for( let i=1;i<=n;i++){
    s = i===1 ? ((i%10) + s) : ((i%10) + '');
    console.log(s);
}