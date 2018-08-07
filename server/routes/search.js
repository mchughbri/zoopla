const search = (req, res, next) => {
    res.render('search', {
        title: 'Search for houses and flats across the UK'
    });
};

module.exports = search;
