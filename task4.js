let arr = [1, 3, 6, 2, 2, 0, 4, 5], target = 10, pairCount = 0;
for (let i = 0; i<arr.length; i++)
{
    for (let j = i+1; j<arr.length; j++)
    {
        if(i!=j && arr[i]+arr[j] == target)
            pairCount++
    }   
} 
document.write("Task 4: arr = [1, 3, 6, 2, 2, 0, 4, 5], target = 10, result: ", pairCount)