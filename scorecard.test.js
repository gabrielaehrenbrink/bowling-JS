const ScoreCard = require('./scorecard');


describe('ScoreCard', () => {
    it('starting score is 0', () => {
    score = new ScoreCard();
    expect(score.getScore()).toEqual(0);
    });
    it('when frame is added it returns the frame', () => {
        score = new ScoreCard();
        expect(score.addFrame(2, 5)).toEqual(1);
        });
    it('when frame is added it adds rolls to the total score', () => {
        score = new ScoreCard();
        score.addFrame(2, 5)
        expect(score.getScore()).toEqual(7);
        });
    it('after 10 frames it returns game is finished if you try to add another frame', () => {
        score = new ScoreCard();
        for (let i = 0; i < 10; i++) {
            score.addFrame(2, 5);}
            expect(score.addFrame(2, 5)).toEqual("Game is finished!");
                });
    it('if 10 pins are knocked down on first rool, return strike', () => {
        score = new ScoreCard();
        expect(score.addFrame(10, 0)).toEqual("You got a strike!");
        });
    it('if 10 pins are knocked down after second roll, return spare', () => {
        score = new ScoreCard();
        expect(score.addFrame(3, 7)).toEqual("You got a spare!");
        });
    it('if have a strike, play bonus roll and return message with bonus score', () => {
        score = new ScoreCard();
        score.addFrame(10, 0);
        expect(score.playBonusRoll(3, 2)).toEqual("Your Bonus score is 5");
        });
    it('if have a strike, play 2 bonus roll, if you try a third bonus roll that you do not have bonus rolls', () => {
        score = new ScoreCard();
        score.addFrame(10, 0);
        score.playBonusRoll(3, 2)
        score.playBonusRoll(3, 2)
        expect(score.playBonusRoll(3, 2)).toEqual("You don't have a Bonus Roll, wait for your next frame to play!");
        });
});