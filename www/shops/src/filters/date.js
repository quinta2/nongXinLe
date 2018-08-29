export const date = time =>{
    let filezero = n => n<10 ? '0'+n : ''+n
        var d = new Date()
        d.setTime(data * 1000);
        var year = d.getFullYear();
        var mon = d.getMonth()+1;
        var date = d.getDate();
        var hour = d.getHours();
        var min = d.getMinutes()
        var sec = d.getSeconds()
        return `${year}年${filezero(mon)}月${filezero(date)}日  ${filezero(hour)}:${filezero(min)}:${filezero(sec)}`

}