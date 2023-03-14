function arrayPaire(arr)
{
    arr2=[]
    arr.forEach(nbr=>{
        if(nbr%2==0)
        arr2.push(nbr)
    })
    // tri croissant décroissant (juste sort())
    arr2.sort((a,b)=>a-b);
    console.log(arr2);
}
arr=[3,16,5,7,8,6]

arrayPaire(arr);
