module.exports = function longestConsecutiveLength(array) {
function compareNumeric(a, b) {
if (a > b) return 1;
if (a < b) return -1;
}
array.sort(compareNumeric);
l=1;max=0;
for(i=0;i< array.length; i++)
{
if (array[i]+1==array[i+1])
{
l=1;
while (array[i]+1==array[i+1] || array[i]==array[i+1]){
if (array[i]+1==array[i+1] )l++;

i++;

}
i--;
}
if (max<l)max=l;
}
return(max);
}
