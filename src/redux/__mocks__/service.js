const Service = {
  fetchPlatforms: jest.fn(() => Promise.resolve({ data: {sources: [{name: 'abc'}, {name: 'cnn'}]}})),
  fetchPlatformNews: jest.fn(() => Promise.resolve({ data: {articles: [{name: 'abc'}, {name: 'cnn'}]}}))
};

export default Service;
