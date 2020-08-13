//CUSTOM COMMAND

var employeeCommand = {
    newEmployee: function(){
    this.useXpath()
    this.click('//li[text()="Dustin Henderson"]')
    this.useCss()
    return this
    },
}

//PAGE OBJECT MODEL

module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [employeeCommand],
    elements: {
        newEmployee: 'li[name="addEmployee"]',
        enterName: 'input[name="nameEntry"]',
        enterPhone: 'input[name="phoneEntry"]',
        enterEmail: 'input[name="emailEntry"]',
        enterTitle: 'input[name="titleEntry"]',
        idNumber: '#employeeID',
        saveButton: '#saveBtn',
        cancelButton: '[name="cancel"]',
        deleteButton: '[name="delete"]',
        okayPopUp: 'browser.Keys.ENTER',
        searchBox: '[name="searchBox"]',
        clearSearch: '[name="clearSearch"]',
        verifySearch: '[name="employee400"]',
        newEmployeeFile: {
            selector: '//li[text()="New Employee"]',
            locateStrategy: 'xpath'
        }
    }
}