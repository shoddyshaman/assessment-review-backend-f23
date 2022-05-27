let goals = [
  {
    goalId: 1,
    goal: "Finish coding assessment",
  },
  {
    goalId: 2,
    goal: "score 30 points in a basketball game",
  },
];

let globalId = 3;

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) =>{
    const fortunes = [
      "A beautiful, smart, and loving person will be coming into your life",
      "dubious friend may be an enemy in camouflage",
      "A golden egg of opportunity falls into your lap this month",
      "A good time to finish up old tasks",
      "A lifetime friend shall soon be made",
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];
    res.status(200).send(randomFortune);
  },
  getGoals: (req, res) => {
    res.status(200).send(goals);
  },
  addGoal: (req, res) => {
    let { goal } = req.body;
    let newGoal = {
      goalId: globalId,
      goal,
    };
    goals.push(newGoal);
    globalId++;
    res.status(200).send(goals);
  },
  deleteGoal: (req, res) => {
    const { id } = req.params;
    //find which goal has the goalId === id ansd splice it from the array
    const index = goals.findIndex(goal => goal.goalId === +id)
    goals.splice(index,1)
    res.status(200).send(goals)
  },
};
