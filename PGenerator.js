function* ArmStrongGen()
{
   // for(;;)
    //{

          let num=1;
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
                    //return{done:false,number:temp}; 
                    yield temp; 
                     
                }
                    num++;                   

            }

   // }
}



export function myGernerator()
{
    let ASGen = ArmStrongGen();
    console.log("Next ArmStrong Number: ",ASGen.next().value);
    console.log("Next ArmStrong Number: ",ASGen.next().value);
    console.log("Next ArmStrong Number: ",ASGen.next().value);
    console.log("Next ArmStrong Number: ",ASGen.next().value);

}

