this.onmessage=function()
{
   var sum=0;
    for (let i=0;i<10000000000;i++)
    {sum+=i;}
    this.postMessage(sum);
}
