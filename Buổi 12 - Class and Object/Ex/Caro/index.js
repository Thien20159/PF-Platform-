const row  = 10
const col = 10
const unit = 40
const board = document.getElementById('container')
function cell(row, col){
    var resume = "<table cellpadding = '0' cellspacing = '0'>"
    for(let i = 0; i< row; i++){
        resume += "<tr>"
        for(let j = 0; j<col; j++){
            resume += "<td>"
            resume += "<button id='but"+i+"_"+j+"'></button>"
            resume += "</td>"
        }
        resume += "</tr>"
    }
    resume += "</table>"
    return resume
}
board.innerHTML = cell(row, col)