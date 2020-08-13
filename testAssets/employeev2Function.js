//FUNCTION

module.exports = (browser, data) => {
    browser
        .click('li[name="addEmployee"]')
        .useXpath()
        .click('//li[text()="New Employee"]')
        .useCss()
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', data.name)
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', data.phone)
        .clearValue('input[name="emailEntry"]')
        .setValue('input[name="emailEntry"]', data.email)
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="titleEntry"]', data.title)
        .click('#saveBtn')
        .pause(2000)
        .expect.element('#employeeTitle').text.equal(data.name)
}