const  dates =["2019-12-25","2020-11-22","2021-10-21","2022-9-20"];
const formatteddate = dates.map(formate);
console.log(formatteddate);
function formate(element){
    const parts = element.split("-");
    return `${parts[2]}-${parts[1]}-${parts[0]}`
}