module.exports = function longestConsecutiveLength(array)
{
var maximum=2;
var arr =[];
var countt=0;
//var array = [1, 2, 15,8,6,9,11,4,5];
var count = array.length-1;
function sorts(array){
for (var i = 0; i < count; i++)
{
for (var j = 0; j < count-i; j++)
{
if (array[j]> array[j+1])
{
var max = array[j];
array[j] = array[j+1];
array[j+1] = max;
}
}
}
return array;
}
array = sorts(array);
console.log(array);
for(var k=0;k<array.length;k++)
{
if(array[k]-array[k+1]==-1)
{
arr[countt]=maximum;
maximum++;
countt++;
}
else
{
arr[countt]=0;
countt++;
maximum=2;
}
}
arr=sorts(arr);
return arr[arr.length - 1];
}
