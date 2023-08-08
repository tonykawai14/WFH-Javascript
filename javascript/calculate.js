const calculate = document.querySelector(`#computes`)
const val1 = document.querySelector(`#value1`)
const val2 = document.querySelector(`#value2`)
const total = document.querySelector(`#Total`)

calculate.addEventListener('click', (e) =>
{
    const rad = document.querySelector(`input[name="operator"]:checked`);
    console.log(rad);
    let totals = 0;

    if (!rad || !val1.value || !val2.value) 
    {
        total.textContent = "Please input anything"
        console.log("Please input anything");
    }
    else if (rad.value === "add") 
    {
        totals = Number(val1.value) + Number(val2.value)
        total.textContent = totals; 
        console.log(`Computation for addition is ${totals}`);
    } 
    else if(rad.value === "sub") 
    {
        totals = Number(val1.value) - Number(val2.value)
        total.textContent  = totals; 
        console.log(`Computation for subtraction is ${totals}`);
    }
    else if(rad.value === "mul") 
    {
        totals = Number(val1.value) * Number(val2.value)
        total.textContent  = totals; 
        console.log(`Computation for multiplication is ${totals}`);
    } 
    else if(rad.value === "div") 
    {
        totals = Number(val1.value) / Number(val2.value)
        total.textContent  = totals; 
        console.log(`Computation for Division is ${totals}`);
    } 
}) 

document.addEventListener(`DOMContentLoaded`, (e) => {
    const result = document.getElementById(`result`);
    const clearButton = document.getElementById(`clear`);
    const equalsButton = document.getElementById(`equals`);
    const numbers = document.querySelectorAll(`.number`);
    const operators = document.querySelectorAll(`.operator`);

    let currentValue = '';
    let currentOperator = '';
    let previousValue = '';

    numbers.forEach( (number) => 
    {
        number.addEventListener('click', (e) =>
         {
            currentValue += number.textContent;
            result.value = currentValue;
            console.log(`Number foreach click is ${String(result.value)}`);
        });
    });

    operators.forEach( (operator) => 
    {
        operator.addEventListener('click', (e) =>
        {
            if (currentValue !== '') 
            {
                if (previousValue === '') 
                {
                    previousValue = currentValue;
                    currentValue = '';
                } 
                else 
                {
                    console.log("Operator has been clicked twice");
                }
                currentOperator = operator.textContent;
            }
        });
    });

    equalsButton.addEventListener('click', (e)=> 
    {
        if (previousValue !== '' && currentValue !== '') 
        {
            let Opss = '';
            switch (currentOperator) 
            {
                case '+':
                    Opss = '+';
                    currentValue = String(Number(previousValue) + Number(currentValue));
                    break;
                case '-':
                    Opss = '-';
                    currentValue = String(Number(previousValue) - Number(currentValue));
                    break;
                case '*':
                    Opss = '*';
                    currentValue = String(Number(previousValue) * Number(currentValue));
                    break;
                case '/':
                    Opss = '/';
                    currentValue = String(Number(previousValue) / Number(currentValue));
                    break;
            }
            result.value = currentValue;
            previousValue = '';
            console.log(`Number foreach click is ${String(result.value)}`);
            console.log("Operator used: ", Opss);
        }
    });

    clearButton.addEventListener('click', (e)=>
    {
        currentValue = '';
        currentOperator = '';
        previousValue = '';
        result.value = '';
    });
});