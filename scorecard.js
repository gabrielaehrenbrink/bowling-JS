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

    getBonusScore() {
        return this.Bonus
    }

    addFrame(firstRoll, secondRoll) {
        if (this.frame < 10) {
            this.frame++;

            if (this.pendingSpareBonus) {
                this.Bonus += firstRoll;
                this.pendingSpareBonus = false;
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
                this.pendingSpareBonus = true; // Set the flag for a pending spare bonus
                return "You got a spare!";
            }

            // Regular frame without bonus
            this.score += firstRoll + secondRoll;

            return this.frame;
        } else {
            return "Game is finished!";
        }
    }
    playBonusRoll(firstRoll, secondRoll) {
        if (this.strikeBonusRolls > 0) {
            this.Bonus = firstRoll + secondRoll;
            this.strikeBonusRolls--;
            return "Your Bonus score is " + this.Bonus;
        }
        else {
            return "You don't have a Bonus Roll, wait for your next frame to play!"
        }
    }
}

module.exports = ScoreCard;
