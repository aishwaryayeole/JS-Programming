export function DeStruct()
{
    let [a,b,c,]=[6,4,8,3];
    console.log("Third Element: ",c);

    let Org= {
        name: "Xoriant Solns",
        address: {
        street: "Baner-Balewadi Rd",
        city: "Pune",
        state: "Maharashtra",
        zip: "411010"
} };
let {address: {zip}} = Org; //Deep matching
console.log("Pincode: "+zip);
}