const btn_ = document.getElementById('menu-btn');
const menuItem = document.getElementById('menu-item');
let counter = false;
btn_.addEventListener('click',function()
{
    if(counter == false)
    {
        menuItem.style.right = "0px";
        counter = true;
    }
    else if(counter == true)
        {
            menuItem.style.right = "-330px";
            counter = false;
        }
  
})