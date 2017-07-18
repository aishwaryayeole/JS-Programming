export function ExtParam()
{
    function add(p=5,q=8)
    {
        console.log(p+q);
    }

    function userFriends(x,...fx)
    {
        console.log("Username: ",x);
        console.log("List of Friends: ",fx);

    }

    function printCapitalNames(a,b,c,d,e,f) 
    {
      
        console.log(a.toUpperCase(),b.toUpperCase(),c.toUpperCase(),d.toUpperCase(),e.toUpperCase());

    }

    add();
    add(15);

    userFriends("Ash","Siddhi","Prachi");

        let names =["Ash","Sid","Prachi","Aadesh","Avinash"];

        printCapitalNames(...names);




}