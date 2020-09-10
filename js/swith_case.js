function songay(){
    let n=parseInt(document.getElementById("input").value);
    switch (n){
        case 1:
        case 3:
        case 5:
        case 8:
        case 10:
        case 12:
            document.getElementById("output").innerHTML="thang "+n+" co so ngay la 31. ";
            break;
        case 2:
            document.getElementById("output").innerHTML="thang "+n+" co so ngay la 28 hoac 29.";
            break;
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            document.getElementById("output").innerHTML="thang "+n+" co so ngay la 30.";
            break;
        default:
            alert("ko co thang nay trong nam");

    }
}