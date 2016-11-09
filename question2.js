 
 /* Skillmid Challenge Solution 2*/

 module.exports = function (a) 
 {
    // ...

if (typeof a === 'string')
	{
	return "Not a number";
	}
else if (typeof a === 'boolean')
	{
	return "Not a number";
	}
else if (a%2==1)
	{
	return "Odd";
}
else 
	{
	return "Even";
	}



}
