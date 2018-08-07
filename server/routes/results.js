const mockResponse = require('../mock/mock-response');

const results = (req, res, next) => {
    res.render('results', {
        data: mockResponse,
        title: 'Search Results'
    });
};

module.exports = results;
