/**
 * Created by shubham on 12/6/17.
 */

var express = require('express');
var countryRouter = express.Router();

var router = function () {
    var countryController = require('../controllers/countryController')();
    countryRouter.route('/')
        .get(countryController.country);
    countryRouter.route('/:country')
        .get(countryController.regionsInCountry);
    countryRouter.route('/:country/:regionShort')
        .get(countryController.citiesInRegion);

    return countryRouter;
};

module.exports = router;