const getScoreBtn = document.querySelector(`#reveal`)
const displayScore = document.querySelector(`#DisplayScore`)
const questions = [
    {
      question: 'What is the national flower of the Philippines?',
      correctIndex: 1,
      correctAnswer: 'Sampaguita',
    },
    {
      question: 'Which Philippine volcano is known as the "Perfect Cone"?',
      correctIndex: 0,
      correctAnswer: 'Mayon',
    },
    {
      question: 'Who is the national hero of the Philippines?',
      correctIndex: 2,
      correctAnswer: 'Jose Rizal',
    },
    {
      question: 'In what year did the Philippines gain independence from Spanish rule?',
      correctIndex: 0,
      correctAnswer: '1898',
    },
    {
      question: 'What traditional Filipino dish is made from pork, marinated in a mixture of garlic, vinegar, and soy sauce, then pan-fried and served with garlic rice and eggs?',
      correctIndex: 0,
      correctAnswer: 'Adobo',
    },
  ];
  
getScoreBtn.addEventListener('click', (e) => 
{
    const radioButtons = document.querySelectorAll('input[name^="Q"]:checked');
    
    if (radioButtons.length !== questions.length) 
    {
      displayScore.textContent = "Please answer all questions.";
      console.log("Please answer all questions.");
    } 
    else 
    {
      let totalScore = 0;
      
      for (let i = 0; i < radioButtons.length; i++) 
      {
        const selectedAnswerIndex = parseInt(radioButtons[i].value);
        if (selectedAnswerIndex === questions[i].correctIndex) 
        {
          totalScore++;
        }
        console.log(`Question: ${questions[i].question}`);
        console.log(`Your Answer: ${getLabelForRadioButton(radioButtons[i]).textContent}`);
        console.log(`Correct Answer: ${questions[i].correctAnswer}`);
      }
      displayScore.textContent = `Your Score: ${totalScore} out of ${questions.length}`;
      console.log(`Your Score: ${totalScore} out of ${questions.length}`);
    }
})
 const getLabelForRadioButton = (radioButton) => {
    const id = radioButton.getAttribute('id');
    return document.querySelector(`label[for="${id}"]`);
  }
