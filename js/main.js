function closePopup(){
    document.getElementById("popup").style.display="none";
}

function copyText(text){
    navigator.clipboard.writeText(text);
    alert("复制成功");
}
