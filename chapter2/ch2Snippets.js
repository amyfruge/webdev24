let user = "Alex";

function showUser() 
{
    let user = "Michaels";
    console.log("In showUser - local scope");
    console.log(user);
}
console.log("Global scope");
console.log(user);
showUser();