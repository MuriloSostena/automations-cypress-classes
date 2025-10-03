import userData from '../fixtures/userData.json'
import LoginPage from '../Pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'  
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const dataAtual = new Date()
const dataFormatada = dataAtual.toISOString().split('T')[0]

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('Orange HRM Tests', () => {
    it('User Info Update - Success', () => {
        loginPage.acessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        dashboardPage.checkDashboardPage()
        menuPage.accessMyInfo()
        myInfoPage.fillPersonalDetails(chance.first(), chance.word(), chance.last())
        myInfoPage.fillEmployeeId(chance.first(), chance.cpf(), chance.cf(), dataFormatada)
        myInfoPage.fillNationality()
        myInfoPage.saveForm()
    })

})