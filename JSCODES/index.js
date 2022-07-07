/*function showValue()
{
 var val = Number.MAX_VALUE;
 document.write ("Value of Number.MAX_VALUE : " + val );
}*/

/*function book(title, author, year_publish){
    this.title = title; 
    this.author = author;
    this.year_pub lish = year_publish ;
   }
   
    var myBook = new book("Perl", "Mohtashim", "1983");
    document.write("Book title is : " + myBook.title + "<br><br>");
    document.write(`Book author is : ${myBook.author}<br><br>`);
    document.write(`Book year_publish is : ${myBook.year_publish}<br><br>`);*/


  /*  function Cat(eyes, legs, tail){
        this.eyes = eyes;
        this.legs = legs;
        this.tail = tail;
    }

    var myCat = new Cat("two","four","one");
    document.write(`cat eyes is:${myCat.eyes}<br>`);
    document.write(`cat legs is:${myCat.legs}<br>`);
    document.write(`cat tail is:${myCat.tail}<br>`);*/


    var Employee ={
        basesalary: 30000,
        overtime: 10,
        rate: 20};
        function getWage(){
            return this.basesalary+(this.overtime*this.rate);

        }
        getWage();
   
