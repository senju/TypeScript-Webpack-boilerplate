import {expect} from 'chai';
import Main from '../../../../app/Core/Main';

describe('Main class', () => {
  let sot: Main;

  beforeEach(() => {
    sot = new Main();
  });

  it('should return greeting in a promise', (done) => {
    sot.greet()
    .then((greeting) => {
      expect(greeting).to.equal('Hello, World!');
      done();
    });
  });

  it('should repeat 3times', (done) => {
    let hahaha = sot.three_times('ha');
    expect(hahaha).to.equal('hahaha');
    done();
  });
});
