
export const getElementById=function(id){
    return document.getElementById(id)
  }
  
export const getEventListener = function(id,name){
  return id.addEventListener('click',()=>{
      return name();
  })
  }

export const changeColor = function (color) {
    if(color.style.background=="gray")
    {
        color.style.background="";
    }else{
        color.style.background="gray";
    }
    return false;
}
