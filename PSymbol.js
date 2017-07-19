//let fNo,sNo;
const symbolfNo=Symbol('fNo');
const symbolsNo=Symbol('sNo');


class fibonacci
{
    
   constructor(fNo,sNo)
    {
        this[symbolfNo]=fNo;
        this[symbolsNo]=sNo; 
    }


    [Symbol.iterator]()
    {   
        let prevNo= this[symbolfNo];
        let NextNo= this[symbolsNo];
       
            return {
                 next()
            {

                            [prevNo,NextNo]=[NextNo,prevNo+NextNo];

                            return{done:false,value:NextNo};
            }
        }
    }


}


export function mySymbol()
{

let FibObj = new fibonacci(0,1);
let itr = FibObj[Symbol.iterator]();


console.log("Next no:- ",itr.next());
console.log("Next no:- ",itr.next());
console.log("Next no:- ",itr.next());

}