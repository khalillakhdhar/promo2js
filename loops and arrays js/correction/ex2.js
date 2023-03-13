function interval(a,b)
{
    for(var i = a; i < b; i++)
    {
        if(i%10==0 || i%10==4)
        console.log(i);
    }
}
interval(4,32);