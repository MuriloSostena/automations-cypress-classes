class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            generecField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            closeDateField: '.--close',
            dropDown: '.oxd-select-text--arrow',
            submitButton: "[type='submit']"
        }
        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeId(employeeId, otherId, driversLicenceNumber, licenceExpireDate) {
        cy.get(this.selectorsList().generecField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().generecField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().generecField).eq(5).clear().type(driversLicenceNumber)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(licenceExpireDate)
        cy.get(this.selectorsList().closeDateField).click({force: true})
    }

    fillNationality() {
        cy.get(this.selectorsList().dropDown).eq(0).click({force: true})
        cy.get(':nth-child(27) > span').click({force: true})
        cy.get(this.selectorsList().dropDown).eq(1).click({force: true})
        cy.get(':nth-child(3) > span').click({force: true})
    }
              
    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true}) 
        cy.get('.oxd-toast-close')
    }
    
}

export default MyInfoPage