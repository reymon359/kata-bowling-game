class BowlingGame {
  constructor() {
    this.frames = new Array(10).fill().map(u => ({
      1: null,
      2: null,
      total: 0,
      strike: false,
      spare: false,
    }));
    this.currentRound = 0;
    // this.score = {
    //   value: 0,
    // };
  }

  getFrames() {
    return this.frames;
  }

  getCurrentRound() {
    return this.currentRound;
  }

  getFrame(ind) {
    return this.frames[ind];
  }

  getScore() {
    return this.score;
  }

  getScoreValue() {
    //return this.score.value;
    const val = this.frames.reduce((acc, curr) => {
      acc += curr.total;
      return acc;
    }, 0);
    console.log(val);
  }

  roll(pins) {
    const frame = this.frames[this.currentRound];
    const prevFrame = this.frames[this.currentRound - 1];

    if(!frame[1]) {
      if((prevFrame && (prevFrame.strike || prevFrame.spare))) {
        prevFrame.total += pins;
      }  
      frame[1] = pins;
      frame.total = frame[1]
      if(pins === 10) {
        frame.strike = true;
        this.currentRound ++;
      }
    } else {
      if(prevFrame && prevFrame.strike) {
        prevFrame.total += pins;
      } 
      frame[2] = pins;
      frame.total += frame[2];
      if(frame.total === 10) {
        frame.spare = true;
      }
      this.currentRound ++;
    }
    //this.score.value += pins;
  }


  

}

module.exports = {
  BowlingGame,
}