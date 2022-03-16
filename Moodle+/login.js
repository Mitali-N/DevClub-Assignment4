console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector("form#login"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;

let question = login_text.split('\n')[3]; // Use split and array operations on the login_text string to extract the question

// Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked

//let answer = null;
let ques_array = question.split(' ');

if (ques_array[1] == 'add')
{
    num1 = ques_array[2];
    num2 = ques_array[4];
    answer = parseInt(num1) + parseInt(num2);
}
else if (ques_array[1] == 'subtract')
{
    num1 = ques_array[2];
    num2 = ques_array[4];
    answer = parseInt(num1) - parseInt(num2);
}
else if (ques_array[1] == 'enter')
{
    if ( ques_array[2] == 'first')
    {
        answer = parseInt(ques_array[4]);
    }
    else if ( ques_array[2] == 'second')
    {
        answer = parseInt(ques_array[6]);
    }
}

const captcha_input_element = document.querySelector("input#valuepkg3"); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;
