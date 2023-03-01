function formatDate(value) {
     var date = new Date(value)
    let dat = ("00" + date.getDay()).slice(-2);
    let month = date.getMonth();
    let year = date.getFullYear();
    switch(month){
        case 0 : month = "Jan"; break;
        case 1 : month = "Fev"; break;
        case 2 : month = "Mar"; break;
        case 3 : month = "Abr"; break;
        case 4 : month = "Mai"; break;
        case 5 : month = "Jun"; break;
        case 6 : month = "Jul"; break;
        case 7 : month = "Ago"; break;
        case 8 : month = "Set"; break;
        case 9 : month = "Out"; break;
        case 10 : month = "Nov"; break;
        case 11 : month = "Dez"; break;
    }
    return dat +" "+ month +", "+year
 };
 
 console.log(date)
 console.log(formatDate(date))

//  Função que formata a data pro seguinte formato:
//  01 Mar, 2023
//  10 Out, 2023