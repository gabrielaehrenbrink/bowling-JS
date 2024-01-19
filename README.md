# Bowling js

Makers Academy bowling scorecard challenge

This JavaScript code defines a ScoreCard class to manage and calculate scores for a bowling game. The class includes methods for adding frames with first and second rolls, handling bonus rolls for strikes, and retrieving the total score. It incorporates logic for strikes, spares, and special game outcomes such as a "Gutter Game" or a "Perfect Game." The class is designed to follow the rules of bowling, providing informative messages for different game scenarios. Additionally, it supports tracking bonus scores and includes a check for the completion of the game. This code encourages test-driven development practices and aims for an elegant, readable, and maintainable structure.

## Learning objectives

- Bowling Scoring System:

Grasp the key rules of bowling scoring.
Understand strikes, spares, and 10th frame intricacies.

- JavaScript Proficiency:

Implement a Scorecard class in JavaScript.
Develop methods for scoring calculations.

- Test-Driven Development (TDD):

Apply TDD principles with comprehensive test coverage.

- Git and GitHub Workflow:

Fork, branch, commit, and push changes on GitHub.
Submit a pull request by the deadline.


## An example of how your to run the code:

```
node
const ScoreCard = require('./ScoreCard');

let scorecard = new ScoreCard();
scorecard.addFrame(2, 5);
scorecard.addFrame(3, 5);
console.log(scorecard.getScore()); // Returns the calculated score

```

