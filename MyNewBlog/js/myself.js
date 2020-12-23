document.getElementById("klik").addEventListener("click",function()
{
	var box=document.getElementById("info");
		box.style.display="block";
		document.getElementById("klik").style.borderBottom="2px solid darkred";
		document.getElementById("blog").style.borderBottom="none";

})
document.getElementById("blog").addEventListener("click",function()
{
	var box=document.getElementById("info");
		box.style.display="none";
		document.getElementById("klik").style.borderBottom="none";
		document.getElementById("blog").style.borderBottom="2px solid darkred";

})
