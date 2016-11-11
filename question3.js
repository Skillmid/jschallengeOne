/* Skillmid Challenge Updated Solution 3*/
module.exports = function (num) 
{
	var total = 1;
	for(var i = num;i>=1;i--)
	{
    total = (total*i);
    // ...
	};
    return total;
 }