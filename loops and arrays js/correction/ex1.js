function factoriel(a)
{
    f=1;
    for(let i=2;i<=a;i++)
    {
        f*=i; 
        // f=f*i;

    }
console.log(`la factoriel de ${a} est ${f}`);
}
factoriel(3);
factoriel(5);