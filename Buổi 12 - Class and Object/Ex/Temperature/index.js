class Temperature{
    constructor(){}
    input(){
        do{
            this.C = parseInt(prompt("Nhap vao do C: "));
        }while(this.C < -273);
    }
    convertF(){
        return this.C * 33.8;
    }
    convertK(){
        return this.C * 274.15;
    }
}

let temp = new Temperature()
temp.input()
document.write(temp.C +" độ C = "+ temp.convertF()+" độ F" +"<br>");
document.write(temp.C +" độ C = "+ temp.convertK()+" độ Kevin");