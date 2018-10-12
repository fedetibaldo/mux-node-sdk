const { expect } = require('chai');
const Video = require('../../../src/video/video');
const Assets = require('../../../src/video/resources/assets');
const LiveStreams = require('../../../src/video/resources/liveStreams');

/** @test {Video} */
describe('Unit::Video', () => {
  const testApiKey = 'testApiKey';
  const testSecret = 'testSecret';

  /** @test {Video} */
  describe('Video', () => {
    /** @test {Video} */
    it('throws an error if an api key is not given', () => {
      expect(() => new Video()).to.throw('API Access Token must be provided.');
    });

    /** @test {Video} */
    it('throws an error if a secret key is not given', () => {
      expect(() => new Video('testKey')).to.throw('API secret key must be provided');
    });

    /** @test {Video} */
    it('creates a new Video instance', () => {
      const TestVideo = new Video(testApiKey, testSecret);
      expect(() => new Video(testApiKey, testSecret)).to.not.throw();
      expect(TestVideo.assets).to.be.an.instanceof(Assets);
      expect(TestVideo.liveStreams).to.be.an.instanceof(LiveStreams);
    });
  });
});
