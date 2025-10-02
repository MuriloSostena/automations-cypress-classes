import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {
    const selectorsList = {
        usernameField: '[name="username"]',
        passwordField: '[name="password"]', 
        loginButton: '[type="submit"]',
        dashboardGrid: '.orangehrm-dashboard-grid',
        myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
        firstNameField: '[name="firstName"]',
        middleNameField: "[name='middleName']",
        lastNameField: "[name='lastName']",
        generecField: ".oxd-input--active",
        dateField: "[placeholder='yyyy-dd-mm']",
        closeDateField: '.--close',
        submitButton: "[type='submit']"
    } 

    it('User Info Update - Success', () => {
        cy.visit('/auth/login')
        cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
        cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
        cy.get(selectorsList.loginButton).click()
        cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
        cy.get(selectorsList.dashboardGrid)
        cy.get(selectorsList.myInfoButton).click()
        cy.get(selectorsList.firstNameField).clear().type("João")
        cy.get(selectorsList.middleNameField).clear().type("Da")
        cy.get(selectorsList.lastNameField).clear().type("Silva")
        cy.get(selectorsList.generecField).eq(3).clear().type("Joãozinho")
        cy.get(selectorsList.generecField).eq(4).clear().type("123456789")
        cy.get(selectorsList.generecField).eq(5).clear().type("22 11 33 55")
        cy.get(selectorsList.dateField).eq(0).clear().type("1989-01-01")
        cy.get(selectorsList.closeDateField).click()
        cy.get(selectorsList.submitButton).eq(0).click()       
        cy.get('.oxd-toast-close')
    })

})