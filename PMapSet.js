export function chatRoom()
{
    let map= new Map();
    map.set("CR1",setChatRoom1);
    map.set("CR2",setChatRoom2);

    let msgArr=["hi","hello"];

    let user= new Map();
    user.set("user1",msgArr);
    user.set("user2",msgArr);
    user.set("user3",msgArr);
    user.set("user4",msgArr);

    let setChatRoom1 = new Set();
    setChatRoom1.add("user1");
    setChatRoom1.add("user2");
    let setChatRoom2 = new Set(["user3","user4"]);
 
    let arr= [...setChatRoom1];

    console.log("No of chat groups:- ",map.values);

    console.log("Users in chat room 1",setChatRoom1);
    console.log("Users in chat room 2",setChatRoom2.values);

    console.log("Total user",user);





    


  





}