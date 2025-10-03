import userData from '../fixtures/userData.json'
import LoginPage from '../Pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'  
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
    const selectorsList = {
        
        firstNameField: '[name="firstName"]',
        middleNameField: "[name='middleName']",
        lastNameField: "[name='lastName']",
        generecField: ".oxd-input--active",
        dateField: "[placeholder='yyyy-dd-mm']",
        closeDateField: '.--close',
        submitButton: "[type='submit']",
        dropDown: '.oxd-select-text--arrow'
    } 

    it.only('User Info Update - Success', () => {
        loginPage.acessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        dashboardPage.checkDashboardPage()
        menuPage.accessMyInfo()
        myInfoPage.inputMyInfo()

        // cy.get(selectorsList.firstNameField).clear().type("João")
        // cy.get(selectorsList.middleNameField).clear().type("Da")
        // cy.get(selectorsList.lastNameField).clear().type("Silva")
        // cy.get(selectorsList.generecField).eq(3).clear().type("Joãozinho")
        // cy.get(selectorsList.generecField).eq(4).clear().type("123456789")
        // cy.get(selectorsList.generecField).eq(5).clear().type("22 11 33 55")
        // cy.get(selectorsList.dateField).eq(0).clear().type("1989-01-01")
        // cy.get(selectorsList.closeDateField).click({force: true})
        // cy.get(selectorsList.dropDown).eq(0).click({force: true})
        // cy.get(':nth-child(27) > span').click({force: true})
        // cy.get(selectorsList.dropDown).eq(1).click({force: true})
        // cy.get(':nth-child(3) > span').click({force: true})
        // cy.get(selectorsList.submitButton).eq(0).click({force: true})       
        // cy.get('.oxd-toast-close')
    })

})