function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.value;
    return elementValue;
}

document.getElementById('calculate').addEventListener('click', function(){
    // const income = getElementValueById('income');
    // const food = getElementValueById('food');
    // const rent = getElementValueById('rent');
    // const clothes = getElementValueById('clothes');

    
});

document.getElementById('income').addEventListener('keyup', function () {
    if(this.value == ''){
        document.getElementById('income-error').innerText = "";
    } else {
        if(isNaN(this.value)){
            document.getElementById('income-error').innerText = "Income should be a number";
        } else {
            if(this.value.length < 4){
                document.getElementById('income-error').innerText = "number must be 4 digits";
            }
            else{
                document.getElementById('income-error').innerText = "Now its perfect";
            }
        }
    }
});