function getMonth() {
    let month = prompt("Какой месяц по счету? (1-12)");
    switch (month) {
        case '1':
            alert('Январь');
            break;
        case '2':
            alert('Февраль');
            break;
        case '3':
            alert('Март');
            break;
        case '4':
            alert('Май');
            break;
        case '5':
            alert('Апрель');
            break;
        case '6':
            alert('Июнь');
            break;
        case '7':
            alert('Июль');
            break;
        case '8':
            alert('Август');
            break;
        case '9':
            alert('Сентябрь');
            break;
        case '10':
            alert('Октябрь');
            break;
        case '11':
            alert('Ноябрь');
            break;
        case '12':
            alert("Декабрь");
            break;
        default:
            alert("Invalid month");           
    }
}
getMonth();

