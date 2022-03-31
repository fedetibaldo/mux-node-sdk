import { expect } from 'chai';
import Mux from '../../esm/index.js';

/** @test {Mux} */
describe('Unit::Mux', () => {
  /** @test {Mux} */
  describe('Mux', () => {
    /** @test {Mux} */
    it('exposes Mux via ESM default', () => {
      const muxClient = new Mux('testKey', 'testSecret');

      expect(muxClient).to.to.be.an.instanceof(Mux);
    });
  });
});
