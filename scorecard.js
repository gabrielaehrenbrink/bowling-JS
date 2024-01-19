class ScoreCard {
    constructor() {
        this.score = 0;
        this.frame = 0;
        this.strikeBonusRolls = 0; // Number of bonus rolls due to a previous strike
        this.Bonus = 0; // Bonus for a previous strike
    }

    getScore() {
        return this.score;
    }

    addFrame(firstRoll, secondRoll) {
        if (this.frame < 10, this.strikeBonusRolls == 0) {
            this.frame++;

            // Apply bonus for previous strike
            if (this.strikeBonusRolls > 0) {
                this.score += firstRoll + secondRoll;
                this.strikeBonusRolls--;

                // Check if the bonus for the previous strike is fully applied
                if (this.strikeBonusRolls === 0) {
                    this.Bonus = 0;
                }
            }

            // Check for a strike
            if (firstRoll === 10) {
                this.score += 10;
                this.strikeBonusRolls = 2; // Two bonus rolls for a strike
                this.Bonus = 10; // Bonus is the score of the strike
                return "You got a strike!";
            }

            // Check for a spare
            if (firstRoll + secondRoll === 10) {
                this.score += 10;
                // figure out how to add bonus here!
                return "You got a spare!";
            }

            // Regular frame without bonus
            this.score += firstRoll + secondRoll;

            return this.frame;
        } else {
            return "Game is finished!";
        }
    }
}

module.exports = ScoreCard;