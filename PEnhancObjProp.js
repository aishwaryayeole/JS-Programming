export function OrderObj()
{
    var order={

         id: 851,
         title:"myTitle",
         price:500,

     printOrder: function()
   {
       console.log("id: ",order.id, "title: ", order.title, "price: ", order.price);
   },
  

    getprice: function()
   {
       console.log(order.price);
   }
    };

   var CopyObj =Object.assign({},order);

   //console.log(CopyObj);
   CopyObj.printOrder();
   
}
 