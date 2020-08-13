var manager = {}
var funky = require('../testAssets/employeev2Assets')
var fillField = require('../testAssets/employeev2Function')
var employeeCommand = require('../pageObjects/employeeV2Page')

// CALLBACK
var checkName = function (manager) {
    manager
        .getText('#employeeID', function (result) {
            console.log(result.value)
        })
}

module.exports = {
    beforeEach: browser => {
        manager = browser.page.employeeV2Page()
        manager.navigate()
    },

    after: browser => {
        browser.end()
    },

    'Add Employee': browser => {
        manager
        funky.forEach(test=>{
        fillField(manager, test)
        }
        )},

    'Employee ID Number Callback': browser => {
        manager
        .newEmployee()
        checkName(manager)
    },

}







// // COULD USE THIS FOR LINE 23-27
//     manager
//     fillField(browser, funky[0])
//     fillField(browser, funky[1])
//     fillField(browser, funky[2])
//     fillField(browser, funky[3])