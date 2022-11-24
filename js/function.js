/*function toStudy(){
    alert('be confident');
    alert('set up a good environment');
    alert('be calm')
}
toStudy();*/
function lifeInWeeks(age,name) {
     
        
        //Write your code here.
        var age_left = 90-age;
        var days_left = age_left*365;
        var weeks_left = age_left*52;
        var months_left = age_left*12;
        console.log("Hi "+name+" You have "+days_left+" days, "+weeks_left+" weeks, and "+months_left+" months left.");
        return "your age is"+age;
        
        
        
        
    
    }
    
lifeInWeeks(90,"Kishore"); 