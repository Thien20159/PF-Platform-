class Date{
    constructor(){}
    setDay(day){
        this.day = day
    }

    setMonth(month){
        this.month = month
    }

    setYear(year){
        this.year = year
    }

    getDay(){
        return this.day;
    }
    getMonth(){
        return this.month;
    }
    getYear(){
        return this.year;
    }
}
let date = new Date();

date.setDay(29)

date.setMonth(2)

date.setYear(2000)

if(date.getDay()<1||date.getDay()>31) console.log("Nhap Ngay Sai!");
else if(date.getMonth()<1||date.getMonth()>12) console.log("Nhap Thang Sai!");
else if(date.getYear()<1990||date.getYear()>9999) console.log("Nhap Nam Sai!");
else if(date.getMonth() == 2 && date.getDay()>29)console.log("Nhap Ngay Sai!");
else console.log(date.getDay()+"/"+date.getMonth()+"/"+date.getYear())