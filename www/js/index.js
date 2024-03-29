(function(){

    var data = {
        quizContent: [
            {
                question: "Who is the founder of Quora?",
                answer1: "Dick Costolo",
                answer2: "Mark Zuckerberg",
                answer3: "Adam D'Angelo",
                fact:"The correct answer is Adam D'Angelo",
                correctAnswer: 3
            },
            {
                question: "Where is the Microsoft Corporation headquarters located?",
                answer1: "Mountain View",
                answer2: "Redmond",
                answer3: "Cupertino",
                fact:"The correct answer is Redmond",
                
                correctAnswer: 2
            },
            {
                question:  "Which billion-dollar company purchased Instagram ?",
                answer1: "Amazon",
                answer2: "Facebook",
                answer3: "Twitter",
                fact:"The correct answer is Facebook",
                correctAnswer: 2
            },
            {
                question: "Which information-technology company was founded on April Fool's Day?",
                answer1: "Microsoft",
                answer2: "Amazon",
                answer3: "Apple",
                fact:"The correct answer is Apple",
                correctAnswer: 3
            },
            {
                question  : "Who is the present CEO of Yahoo!?",
                answer1  : "Marissa Mayer",
                answer2  : "Tim Cook",
                answer3  : "Sheryl Sandberg",
                fact:"The correct answer is Marissa Mayer",
                correctAnswer: 1       
            },
            {
                question  : "How many bits make a byte?",
                answer1  : "16",
                answer2  : "8",
                answer3  : "24",
                fact:"The correct answer is 8",
                correctAnswer: 2       
            },
            {
                question  : "What is the meaning of CPU?",
                answer1  : "Central Processing Unit",
                answer2  : "Critical Processing Unit",
                answer3  : "Crucial Processing Unit",
                fact:"The correct answer is Central Processing Unit",
                correctAnswer: 1       
            },
            {
                question  : "The Process of starting or restarting a computer is?",
                answer1  : "Start up point",
                answer2  : "Booting",
                answer3  : "Resetting",
                fact:"The correct answer is Booting",
                correctAnswer: 2       
            },
            {
                question  : "The other name of Hard Disk is?",
                answer1  : "Compact Disc",
                answer2  : "Fixed Disk",
                answer3  : "Hard Disk Drive",
                fact:"The correct answer is Hard Disk Drive",
                correctAnswer: 3       
            },
            {
                question  : "which one is input devise?",
                answer1  : "Moniter",
                answer2  : "Keyboard",
                answer3  : "Display Board",
                fact:"The correct answer is Keyboard",
                correctAnswer: 2       
            },
            {
                question  : "Largest key on KeyBoard?",
                answer1  : "Shift",
                answer2  : "Space",
                answer3  : "Enter",
                fact:"The correct answer Space ",
                correctAnswer: 2       
            },
            {
                question  : "Which of the following refers to creating an object using the keyword \"new\"?",
                answer1  : "assignment",
                answer2  : "instantiation",
                answer3  : "declaration",
                fact:"The correct answer is declaration",
                correctAnswer: 2       
            },
            {
                question  : "Which of the following is not a primitive type?",
                answer1  : "int",
                answer2  : "char",
                answer3  : "Float",
                fact:"The correct answer is Float",
                correctAnswer: 3       
            },
            {
                question  : "Logical Operators that return a true or false value after evaluating an expression are also called?",
                answer1  : "Dual",
                answer2  : "False",
                answer3  : "Boolean",
                fact:"The correct answer is Boolean",
                correctAnswer: 3       
            },
            {
                question  : "Show a Message in ruby by writing?",
                answer1  : "Print",
                answer2  : "Read",
                answer3  : "Show",
                fact:"The correct answer is Print",
                correctAnswer: 1       
            },
            {
                question  : "What is the name of the Ruby element that defines where in a program a variable may be accessed?",
                answer1  : "Function",
                answer2  : "Scope or Veriable Scope",
                answer3  : "expression",
                fact:"The correct answer is Scope or Veriable Scope",
                correctAnswer: 2       
            },
            {
                question  : "What is the name of the element used to dictate when an operation needs to be performed?",
                answer1  : "assignment",
                answer2  : "operator",
                answer3  : "variable",
                fact:"The correct answer is Operator",
                correctAnswer: 2       
            },
            {
                question  : "For commant in ruby?",
                answer1  : "!",
                answer2  : "#",
                answer3  : "@",
                fact:"The correct answer is #",
                correctAnswer: 2       
            },
            {
                question  : "What is the name of the element that is used to define what an object looks like after it is created?",
                answer1  : "Class",
                answer2  : "Object",
                answer3  : "Keyword",
                fact:"The correct answer is Class",
                correctAnswer: 1       
            },
            {
                question  : "Variables that are accessible only in the code construct in which they are declared are called what?",
                answer1  : "Temp Variables",
                answer2  : "Global Variables",
                answer3  : "Local Veriable",
                fact:"The correct answer is Temp Veriables",
                correctAnswer: 1       
            },
        ],
        points: 0
    };
    
    var display = {
        getApp: document.getElementById('app'),

        // Updates DOM on start/restart of the quiz
        mainPage: function() {
            var newEl = '<div class="quest-number"><p id="questNumber"></p></div><h1 id="questionDisplay" class="h3"></h1>';
                newEl += '<ul><li><label><input type="radio" name="answers" id="input1" value="1"><span class="outer"><span class="inner"></span></span><div id="answerDisplay1"></div></label></li>';
                newEl += '<li><label><input type="radio" name="answers" id="input2" value="2"><span class="outer"><span class="inner"></span></span><div id="answerDisplay2"></div></label></li>';
                newEl += '<li><label><input type="radio" name="answers" id="input3" value="3"><span class="outer"><span class="inner"></span></span><div id="answerDisplay3"></div></label></li></ul>';
                
                newEl += '<div class="points-wrap"><p id="currentPoints"></p></div>';

            this.getApp.innerHTML = newEl;
        },

        // Updates DOM with each question
        updateMainPage: function() {
            var getQuestNumber = document.getElementById('questNumber'),
                getQuestion = document.getElementById('questionDisplay'),
                getAnswer1 = document.getElementById('answerDisplay1'),
                getAnswer2 = document.getElementById('answerDisplay2'),
                getAnswer3 = document.getElementById('answerDisplay3'),
               
                getCurrentPoints = document.getElementById('currentPoints'),
                sumOfQuestions = data.quizContent.length;
                
            getQuestNumber.innerHTML = control.count + 1 + '/' + sumOfQuestions;
            getQuestion.innerHTML = data.quizContent[control.count].question;
            getAnswer1.innerHTML = data.quizContent[control.count].answer1;
            getAnswer2.innerHTML = data.quizContent[control.count].answer2;
            getAnswer3.innerHTML = data.quizContent[control.count].answer3;
         
            getCurrentPoints.innerHTML = 'Points:' + ' ' + data.points;
            this.newElement('button', 'submit', 'Submit Answer');
        },
        addAnswer: function(showMessage) {
            var sumOfQuestions = data.quizContent.length;

            if(showMessage === 'correct') {
                this.newElement('p', 'showAnswer', 'Correct Answer!');
            } else {
                
                var x=data.quizContent[control.count].fact
              
                
                
                this.newElement('p', 'showAnswer', 'Incorrect !'+x );
            }

            if (control.count < sumOfQuestions - 1) {
                this.newElement('button', 'nextQuest', 'Next question');
            } else {
                this.newElement('button', 'result', 'See your result');
            }
        },
        removeAnswer: function(event) {
            var getShowAnswer = document.getElementById('showAnswer');
            var getShowAnswerParent = getShowAnswer.parentNode;
            getShowAnswerParent.removeChild(getShowAnswer);
            var clickedEl = event.target;
            var clickedElParent = clickedEl.parentNode;
            clickedElParent.removeChild(clickedEl);
            var radioButtons = document.getElementsByName('answers');
            var allRadioButtons = radioButtons.length;
            var i;

            for(i = 0; i < allRadioButtons; i++) {
                radioButtons[i].checked = false;
            }
        },

        // Displays final page of the quiz
        resultPage: function() {
            this.getApp.innerHTML = '<h1 class="h3">You have ' + data.points + ' question(s) answered correctly</h1>';
            this.newElement('button', 'restart', 'Restart Quiz');
        },
        newElement: function(elem, elemId, elemText) {
            var newElem = document.createElement(elem);
            var newElemText = document.createTextNode(elemText);
            newElem.appendChild(newElemText);
            newElem.id = elemId;
            this.getApp.appendChild(newElem);
        }
    };

    var control = {
        init: function() {
            var start = document.getElementById('start') || document.getElementById('restart');
            start.addEventListener('click', function() {
                display.mainPage();
                control.update();
            }, false);
        },
        update: function() {
            display.updateMainPage();
            var submit = document.getElementById('submit');
            submit.addEventListener('click', this.checkAnswer, false);
        },

        /**
        * Alerts if none of the radios is checked on submit 
        * Verifies correct/incorrect answer
        * Directs quiz to the next question or to the final page
        */
        checkAnswer: function(event) {
            var radioButtons = document.getElementsByName('answers'),
                allRadioButtons = radioButtons.length,
                isChecked = false,
                checkedRadio,
                clickedEl = event.target,
                clickedElParent = clickedEl.parentNode,
                i;

            for (i = 0; i < allRadioButtons; i++) {
                if (radioButtons[i].checked) {
                    isChecked = true;
                    checkedRadio = +radioButtons[i].value;
                }
            }

            if (isChecked === false) {
                alert('Please choose the answer!');
            } else {
                clickedElParent.removeChild(clickedEl);
                if (checkedRadio === data.quizContent[control.count].correctAnswer) {
                    display.addAnswer('correct');
                    data.points++;
                } else {
                    display.addAnswer();
                }

                var nextQuestion = document.getElementById('nextQuest'),
                    result = document.getElementById('result');

                if (nextQuestion) {
                    nextQuestion.addEventListener('click', function(event) {
                        control.count++;
                        display.removeAnswer(event);
                        control.update();
                    }, false);
                } else {
                    result.addEventListener('click', function() {
                        display.resultPage();
                        control.init();
                        control.count = 0;
                        data.points = 0;
                    }, false);
                }
            }
        },

        // Used for incrementing/looping through the quiz questions and answers
        count: 0
    };

    control.init();

})();
