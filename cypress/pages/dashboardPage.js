class DashboardPage {
    selectorsList() {
        const selectors = {
            dashboardGrid: '.orangehrm-dashboard-grid',
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
        }
        return selectors
    }

    checkDashboardPage() {
        cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
        cy.get(this.selectorsList().myInfoButton).click({force: true})
    }
}

export default DashboardPage