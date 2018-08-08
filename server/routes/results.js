const mockResponse = require('../mock/mock-response');

const results = (req, res, next) => { 
    let term = req.query.term.toUpperCase();
    //check for data
    mockResponse.noResults = (!term.length || mockResponse.area != term) ? true : false;
        
    res.render('results', {
        data: mockResponse,
        title: 'Search Results '+term,
        scriptsrc: '/javascript/search.js'
    });
};

module.exports = results;
