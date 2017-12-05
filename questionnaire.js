var windows, mac, linux, art, presentationAndVideo, coding, english; //BOOLS
var pageCount = 0;

var macButton = document.getElementById("macButton");
var windowsButton = document.getElementById("windowsButton");
var linuxButton = document.getElementById("linuxButton");
var artButton, presentationsButton, codingButton, englishButton, notEnglishButton;
var cSharpButton, cButton, javaButton, javascriptButton, phpButton, pythonButton, otherButton;

var questionsHtmlCode = [
  '<h1 id="question">What do you use?</h1> <div id="answers"> <button class="answer" id="macButton"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2000px-Apple_logo_black.svg.png" width="100px" height="100px"> <div class="shade"></div> <p class="labelOfAnswer">I use mac</p> </button> <button class="answer" id="windowsButton"> <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Windows_darkblue_2012_svg.svg" width="211px" height="52px"> <div class="shade"></div> <p class="labelOfAnswer">I use windows</p> </button> <button class="answer" id="linuxButton"> <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" width="140px" height="165px"> <div class="shade"></div> <p class="labelOfAnswer">I use linux</p> </button> </div>',
  '<h1 id="question">What do you want to do?</h1> <div id="answers"> <button class="answer" id="artButton"> <img src="http://www.publicdomainpictures.net/pictures/40000/velka/artists-palette-clipart.jpg" width="150px" height="150px"> <div class="shade"></div> <p class="labelOfAnswer">I love working with graphics</p> </button> <button class="answer" id="presentationsButton"> <img src="https://publicdomainvectors.org/photos/student_presenting.png" width="150px" height="210px"> <div class="shade"></div> <p class="labelOfAnswer">I create presentations and films quite well</p> </button> <button class="answer" id="codingButton"> <img src="https://publicdomainvectors.org/photos/Laptop.png" width="150px" height="150px"> <div class="shade"></div> <p class="labelOfAnswer">I prefer programming</p> </button> </div>',
  '<h1 id="question">Which language do you prefer for programming?</h1> <div id="answers"> <button class="answer" id="c#Button"> <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg" width="150px" height="150px"> <div class="shade"></div> <p class="labelOfAnswer">C#</p> </button> <button class="answer" id="cButton"> <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" width="150px" height="150px"> <div class="shade"></div> <p class="labelOfAnswer">C and C++</p> </button> <button class="answer" id="javaButton"> <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" width="150px" height="150px"> <div class="shade"></div> <p class="labelOfAnswer">Java</p> </button> <button class="answer" id="javascriptButton"> <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" width="150px" height="150px"> <div class="shade"></div> <p class="labelOfAnswer">Javascript, and generally front-end</p> </button> <button class="answer" id="phpButton"> <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" width="150px" height="150px"> <div class="shade"></div> <p class="labelOfAnswer">PHP</p> </button> <button class="answer" id="pythonButton"> <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Python_logo_and_wordmark.svg" width="250px" height="95px"> <div class="shade"></div> <p class="labelOfAnswer">Python</p> </button> <button class="answer" id="otherButton"> <img src="https://publicdomainvectors.org/photos/Laptop.png" width="150px" height="150px"> <div class="shade"></div> <p class="labelOfAnswer">Other</p> </button> </div>',
  '<h1 id="question">Are you good in English?</h1> <div id="answers"> <button class="answer" id="englishButton"> <img src="https://publicdomainvectors.org/photos/mcol_tick.png" width="150px" height="150px"> <div class="shade"></div> <p class="labelOfAnswer">I know English well</p> </button> <button class="answer" id="notEnglishButton"> <img src="https://publicdomainvectors.org/photos/mcol_cross.png" width="150px" height="150px"> <div class="shade"></div> <p class="labelOfAnswer">I do not know English very well</p> </button> </div>',
  '<h1>What tasks should I do?</h1> <p>Firstly, you have to do this task: <a href="https://gitlab.com/librehealth/gci/issues/12">Become a part of the community</a> </p> <p>Then you should claim any of the tasks below.</p> <div id="matchedTasks"></div>'
];

var optionalQuestions = [
  2
]

var placeToPasteTheTasks;

var forAllSystemsTasks = {
  code: [
    '<p><a href="https://gitlab.com/librehealth/gci/issues/35">Clone LibreHealth EHR from GitHub to your local PC or Mac</a></p>'
  ],
  presentationAndVideo: [
    '<p><a href="https://gitlab.com/librehealth/gci/issues/4">Make a presentation on LibreHealth</a></p>',
    '<p><a href="https://gitlab.com/librehealth/gci/issues/54">LibreHealth Radiology: Make a video tutorial showing how to install radiology-owa(new UI)</a></p>',
    '<p><a href="https://gitlab.com/librehealth/gci/issues/60">LibreHealth Toolkit: Create a video about creation of new concepts in the dictionary in LibreHealth Toolkit</a></p>'
  ],
  art: [
    '<p><a href="https://gitlab.com/librehealth/gci/issues/5">Design a new logo/ icon for librehealth</a></p>',
    '<p><a href="https://gitlab.com/librehealth/gci/issues/10">Create a promotional poster for LibreHealth</a></p>',
    '<p><a href="https://gitlab.com/librehealth/gci/issues/23">Create some artwork around our current slogan of "Healthcare for Humanity"</a></p>',
    '<p><a href="https://gitlab.com/librehealth/gci/issues/37">Review the patient summary screen and design a new look and feel</a></p>',
    '<p><a href="https://gitlab.com/librehealth/gci/issues/69">Librehealth Radiology: Design icons for the left side bar (highlighted in a red box)</a></p>'
  ],
  english: [
    '<p><a href="https://gitlab.com/librehealth/gci/issues/7">Identify typos and grammatical mistakes in README.md files in main 3 projects</a></p>'
  ]
}

var windowsTasks = {
  code: [
    '<p><a href="https://gitlab.com/librehealth/gci/issues/87">Setup LibreHealth EHR Dev Environment and Document the process on Windows</a></p>',
    ''
  ],
  presentationAndVideo: [
    '<p><a href="https://gitlab.com/librehealth/gci/issues/6">Create a video for LibreHealth Toolkit installation on Windows</a></p>',
    ''
  ],
  art: [
    ''
  ]
}

var linuxTasks = {
  code: [
    '<p><a href="https://gitlab.com/librehealth/gci/issues/86">Setup LibreHealth EHR Dev Environment and Document the process in Linux</a></p>',
    ''
  ],
  presentationAndVideo: [
    '<p><a href="https://gitlab.com/librehealth/gci/issues/24">Create a video for LibreHealth Toolkit installation on a Linux system</a></p>',
    ''
  ],
  art: [
    ''
  ]
}

var macTasks = {
  code: [
    '<p><a href="https://gitlab.com/librehealth/gci/issues/91">Setup LibreHealth EHR Dev Environment and Document the process on Mac OSX</a></p>',
    ''
  ],
  presentationAndVideo: [
    '<p><a href="https://gitlab.com/librehealth/gci/issues/13">Create a video for LibreHealth Toolkit installation on Mac OSX</a></p>',
    ''
  ],
  art: [
    ''
  ]
}


window.onload = function() {
  setTimeout(function() {
    document.getElementById("logo").style.display = "none";
  }, 3000);
}

macButton.onclick = function() {
  mac = true;
  nextQuestion();
}

windowsButton.onclick = function() {
  windows = true;
  nextQuestion();
}

linuxButton.onclick = function() {
  linux = true;
  nextQuestion();
}

function nextQuestion() {
  pageCount++;
  checkOptionalQuestion();
  document.getElementById('content').innerHTML = questionsHtmlCode[pageCount];
  setButtonVariablesForNewQuestion();
}

function goToThisQuestion(questionNumber) {
  document.getElementById('content').innerHTML = questionsHtmlCode[questionNumber];
  pageCount = questionNumber;
    setButtonVariablesForNewQuestion();
}

function checkOptionalQuestion() {
  for (i = 0; i < questionsHtmlCode.length; i++) {
    if (pageCount == optionalQuestions[i]) {
      pageCount++;
    }
  }
}

function matchTasks() {
  placeToPasteTheTasks = document.getElementById("matchedTasks");

  checkAllCategories(forAllSystemsTasks);
  if (linux) {
    checkAllCategories(linuxTasks);
  } else if (windows) {
    checkAllCategories(windowsTasks);
  } else if (mac) {
    checkAllCategories(macTasks);
  }

  if (english) {
    addTasksToSite(forAllSystemsTasks.english);
  }

}

function addTasksToSite(tasks) {
  for (i = 0; i < tasks.length; i++) {
    placeToPasteTheTasks.innerHTML += tasks[i];
  }
}

function checkAllCategories(userPlatform) {
  if (coding) {
    addTasksToSite(userPlatform.code);
  } else if (art) {
    addTasksToSite(userPlatform.art);
  } else if (presentationAndVideo) {
    addTasksToSite(userPlatform.presentationAndVideo);
  }
}


function setButtonVariablesForNewQuestion() {
  if (pageCount == 1) {

    artButton = document.getElementById("artButton").addEventListener("click", function() {
      art = true;
      nextQuestion();
    });

    presentationsButton = document.getElementById("presentationsButton").addEventListener("click", function() {
      presentationAndVideo = true;
      nextQuestion();
    });

    codingButton = document.getElementById("codingButton").addEventListener("click", function() {
      coding = true;
      goToThisQuestion(2);
    });

  } else if (pageCount == 2) {

    cSharpButton = document.getElementById("c#Button").addEventListener("click", function() {
      nextQuestion();
    });

    cButton = document.getElementById("cButton").addEventListener("click", function() {
      nextQuestion();
    });

    javaButton = document.getElementById("javaButton").addEventListener("click", function() {
      nextQuestion();
    });

    javascriptButton = document.getElementById("javascriptButton").addEventListener("click", function() {
      nextQuestion();
    });

    phpButton = document.getElementById("phpButton").addEventListener("click", function() {
      nextQuestion();
    });

    pythonButton = document.getElementById("pythonButton").addEventListener("click", function() {
      nextQuestion();
    });

    otherButton = document.getElementById("otherButton").addEventListener("click", function() {
      nextQuestion();
    });

  } else if (pageCount == 3) {

    englishButton = document.getElementById("englishButton").addEventListener("click", function() {
      english = true;
      nextQuestion();
      matchTasks();
    });

    notEnglishButton = document.getElementById("notEnglishButton").addEventListener("click", function() {
      english = false;
      nextQuestion();
      matchTasks();
    });
  }
}
