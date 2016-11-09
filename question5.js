 module.exports = function (someAdjective) 
 	{
      var myStr = "Learning to code is ";
      
      var a= (myStr += someAdjective);
     return a;
    }