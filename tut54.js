//alert does not return anything
// let a=alert("Declaring variable a ")
// console.log(a);

// let name=prompt("What is your name?","Guest");
// console.log(name);

//confirm
let deletePost=confirm("Are you sure you want to delete this post?");
if(deletePost==true)
{
    console.log("Post deleted successfully");
}
else
{
    console.log("Your post has not been deleted");
}
