let tab=[1,2,3,4,5,6]
/*for(let i=0; i<tab.length; i++)
{
    console.log(tab[i]);
}
*/
//tab.forEach((element)=>{
//console.log(element)
//})
// exemple 1 avec une fonction
fruits=["pomme","banane","raisin"];
indice=0;
Nfruits=[];
fruits.forEach(function(fruit){
    //console.log("le fruit est"+fruit);
    if(indice!=1)
    {
        Nfruits.push(fruit);

    }
    else
    Nfruits.push("fraise");
indice++;

})
Nfruits.push(fruits[1])
console.log(Nfruits);
Nfruits.splice(3,1);
console.log("nouveau "+Nfruits);
Nfruits.splice(0,0,"banane");
console.log("finale "+Nfruits);
