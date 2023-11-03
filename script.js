
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");


const options = ["Rock", "Paper", "Scissors", "Lizard"];

optionImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Wait...";

    optionImages.forEach((image2, index2) => {

      if (index !== index2) {
        image2.classList.remove("active");
      }
    });

    gameContainer.classList.add("start");

    
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

     
      let imageSrc = image.querySelector("img").src;
      
      userResult.src = imageSrc;

     
      let randomNumber = Math.floor(Math.random() * options.length);
    
      let cpuImages = options.map((option) => `images/${option.toLowerCase()}.png`);

      cpuResult.src = cpuImages[randomNumber];

     
      let cpuValue = options[randomNumber].charAt(0);

      let userValue = options[index].charAt(0);


      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        RL: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        PL: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
        SL: "User",
        LL: "Draw",
        LR: "User",
        LP: "Cpu",
        LS: "Cpu",
      };

   
      let outcomeValue = outcomes[userValue + cpuValue];

      
      result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomeValue} Won!!`;
    }, 2500);
  });
});
