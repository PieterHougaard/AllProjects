function equivalentCheck () {/*This allows the last value to remain in view until other buttons are pressed*/
if (parseInt(document.getElementById('equivalent').value)){

    document.getElementById('equivalent').value = 0;
    document.getElementById('result').value = 0;


}


}

function input(x){
    /*let y = parseFloat(document.getElementById('result').value);*/

    equivalentCheck();

    let y = parseFloat(document.getElementById('result').value);

    if (document.getElementById('decimalVar').value == 0)
    {
        x += y*10; /*multiply text input by 10 and add to value of x */

        document.getElementById('result').value = x; /*return x to text output*/
    }
    else{//if decimal is true 

        let decimalCount = parseInt(document.getElementById('decimalVar').value);
        
        if(decimalCount == 1){
            x *= 1/10;
            y += x;
            document.getElementById('result').value = y;
        }
        else {
            document.getElementById('result').value += x;
        }

        decimalCount++;

        document.getElementById('decimalVar').value = decimalCount;


    }

  
}

    function decimalPoint(){
        if (document.getElementById('decimalVar').value == 0)/*this prevents multiple decimalpoints*/
        {
            document.getElementById('decimalVar').value = 1;
        }
        if(parseInt(document.getElementById('operation').value)){/*if this is an empty string it will return false*/
            document.getElementById('result').value = 0;
        }
    }

    function operandCheck() {
        if(document.getElementById('operand').value == ""){

            document.getElementById('operand').value = document.getElementById('result').value;
            document.getElementById('equivalent').value = 1;
            
        }
        else{

            operatorCheck();

        }
    }

    function operatorCheck() {

        let a = parseFloat(document.getElementById('operand').value);
        let b = parseFloat(document.getElementById('result').value);

        switch (parseInt(document.getElementById('operation').value)) {
            case 1:
                a += b;
                break;

            case 2: 
                a -= b;
                break;

            case 3:
                a *= b;
                break;
            
            case 4:
                a /= b;
                break;
        }

        document.getElementById('operand').value = a;
        document.getElementById('result').value = a;
        document.getElementById('equivalent').value = 1;

    }


function operators(x){
    switch(x){
        case 1:
            document.getElementById('operation').value =1 /*add*/
            break;
        case 2:
            document.getElementById('operation').value =2 /*subtract*/
            break;
        case 3:
            document.getElementById('operation').value =3 /*multiply*/
            break;
        case 4:
            document.getElementById('operation').value =4 /*divide*/
            break;
        default:

    }

    operandCheck();
}

function equals(){

    operators(parseInt(document.getElementById('operation').value));
    document.getElementById('result').value = document.getElementById('operand').value;
    document.getElementById('operand').value = "";
    document.getElementById('equivalent').value = 1;



}

function allClear(){

    document.getElementById('result').value  = 0;
    document.getElementById('operand').value  = "";
    document.getElementById('operation').value  = 0;
    document.getElementById('equivalent').value = 0;

}

function plusminus(){
    let x = parseFloat(document.getElementById('result').value);

    x *= -1;

    document.getElementById('result').value=x
}

function percent() {

    let x = parseFloat(document.getElementById('result').value);

    x *= 0.01;

    document.getElementById('result').value=x

}

function square(){

    let x = parseFloat(document.getElementById('result').value);

    x *= x;

    document.getElementById('result').value=x

}