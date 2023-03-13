function pgcd(a,b)
{
    x=a; y=b;
    while (a != b)
    {
        if(a<b)
        b=b-a;
        else
        a=a-b;
    }
 console.log(`pgcd de ${x} et ${y}= ${a}`);
}
pgcd(20,15);
pgcd(13,7);