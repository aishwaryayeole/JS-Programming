export function DemoPromise()
{
    var p1= new Promise(function(resolve,reject){
        let x=45;    
         resolve(x);
});

    var p2= new Promise(function(resolve,reject)
    {let y=100; 
        resolve(y);});

    Promise.all([p1, p2]).then(function (promises) {
        var sum=0;
        promises.forEach(function(no){
            sum=sum+no;
        })

      console.log(sum);
});


}