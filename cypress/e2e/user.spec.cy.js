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
    it.only('User Info Update - Success', () => {
        loginPage.acessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        dashboardPage.checkDashboardPage()
        menuPage.accessMyInfo()
        myInfoPage.fillPersonalDetails('First Name', 'Middle Name', 'Last Name')
        myInfoPage.fillEmployeeId('EmployeeId', 'OtherId', 'DVNumber', '2025-01-01')
        myInfoPage.fillNationality()
        myInfoPage.saveForm()
    })
})