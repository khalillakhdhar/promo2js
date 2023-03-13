function estPremier(n)
{
    if(n<= 1)
    return false;
   
    let i=2;
    while(i<=Math.sqrt(n))
    {
        if(n%i===0)
        return false;
        i++;
    }
return true;
}
console.log(estPremier(2))
console.log(estPremier(7))
console.log(estPremier(9))