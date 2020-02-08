const Service = {
  fetchPlatforms: jest.fn(() => Promise.resolve({ data: {sources: [{name: 'abc'}, {name: 'cnn'}]}}))
};

export default Service;
