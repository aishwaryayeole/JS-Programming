
let AS
{
    [Symbol.iterator]()
{         
    let ArmStrongNo=1;
    next()
            {      
            let temp = ArmStrongNo;
            let n = 0;
            while(1) 
            {    
                while(temp != 0)
                {
                     parseInt(temp%10);
                    n += parseInt(temp%10)*parseInt(temp%10)*parseInt(temp%10);
                    temp = parseInt(temp/10);
                }
                if(n === ArmStrongNo)
                {
                        temp= ArmStrongNo;
                        ArmStrongNo++;
                    return {done:false, value:temp};
                }
                        ArmStrongNo++;                
            }

        } }

} 
      
       
export function myIterator()
{
let itr =AS[Symbol.iterator]();

console.log("Next no:- ",itr.next());
console.log("Next no:- ",itr.next());
console.log("Next no:- ",itr.next());
}

/*let Armstrong={
    [Symbol.iterator](){
        let num=1;
        return{
        nextArmstrong(){
            while(true){
                let temp=num;
                let result=0;
                while(temp>0)
                    {
                        result+=parseInt(Math.pow(temp%10,3));     
                        temp=parseInt(temp/10);     
                    }
                if(num===result){ 
                    temp=num;
                    num++;
                    return{done:false,number:temp};  
                     
                }
                num++;                   
            }
 
        }
    }
    }
}
export function testIterator(){
    let itr=Armstrong[Symbol.iterator]();
    console.log('NEXT Armstrong',itr.nextArmstrong());
    console.log('NEXT Armstrong',itr.nextArmstrong());
    console.log('NEXT Armstrong',itr.nextArmstrong());
}*/