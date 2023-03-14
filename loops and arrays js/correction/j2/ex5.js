function mergeSortedArrays(arr1,arr2)
{
    let mergedArray=[];
    let i=0;
    let j=0;
    while (i<arr1.length &&j<arr2.length)
    {
        if(arr1[i]<arr2[j])
        {
            mergedArray.push(arr1[i]);
            i++;
        }
        else
        {
            mergedArray.push(arr2[j]);
            j++;
        }
        while(i<arr1.length)
        {
            mergedArray.push(arr1[i]);
            i++;
        }
        while(j<arr2.length)
        {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    return mergedArray;
}
array1=[1,4,12,15,19]
array2=[2,5,8,10,13]
finalArray=mergeSortedArrays(array1,array2);
console.log(finalArray);