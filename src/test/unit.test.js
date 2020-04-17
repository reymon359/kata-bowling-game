/* global describe, it, beforeEach  */
require('chai').should();
const { expect } = require('chai');
const { BowlingGame } = require('../bin/BowlingGame');


describe('Bowling tests', () => {


  beforeEach(() => {
    
  });

  describe('Create a instance of Bowling Game', () => {
    it('Return a Instance', () => {
      const bowlingGame = new BowlingGame();

    });
    it('Has a methos and return currentFrame', () => {
      const bowlingGame = new BowlingGame();
      const frames = bowlingGame.getCurrentRound();
      expect(frames).to.equal(0);
    });
  });

  describe('BowlingGame methods', () => {
    let bowlingGame;

    beforeEach(() => {
      bowlingGame = new BowlingGame();
    });

    it('getScore return current score object', () => {
      expect( typeof(bowlingGame.getScore()) === 'object').to.be.equal(true);
    });

    it('getScoreValue return current score value', () => {
      expect( typeof(bowlingGame.getScoreValue()) === 'number').to.be.equal(true);
    });

    it('roll method modify score', () => {
      let rolVal = 6;
      bowlingGame.roll(rolVal);
      expect( bowlingGame.getScoreValue()).to.be.equal(rolVal);
    });

    it('current Frame must raise one for each 2 roll calls', () => {
      let prevFrame = bowlingGame.getCurrentRound();
      bowlingGame.roll(4);
      bowlingGame.roll(2);
      expect(bowlingGame.getCurrentRound()).to.be.equal(prevFrame + 1);
    });
  });

  describe('BowlingGame handling scores', () => {
    let bowlingGame;
    
    beforeEach(() => {
      bowlingGame = new BowlingGame();
    });

    it('getScore with normal rolls return correct score', () => {
      bowlingGame.roll(7);
      bowlingGame.roll(1);
      expect(bowlingGame.getScoreValue()).to.be.equal(8);
    });

    it('lastRoll return spare when score is 10', () => {
      bowlingGame.roll(7);
      bowlingGame.roll(3);
      expect((bowlingGame.getFrame(bowlingGame.getCurrentRound() - 1)).spare).to.be.equal(true);
    });
    it('lastRoll return strike when score is 10 in first attemp', () => {
      bowlingGame.roll(10);
      expect((bowlingGame.getFrame(bowlingGame.getCurrentRound() - 1)).strike).to.be.equal(true);
    });;

    it('get double score after spare', () => {
        bowlingGame.roll(7);
        bowlingGame.roll(3);
        //spare
        expect(bowlingGame.getScoreValue()).to.be.equal(10);

        bowlingGame.roll(5);
        expect(bowlingGame.getScoreValue()).to.be.equal(20);
    });

  });

}); 
