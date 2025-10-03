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

    inputMyInfo() {
        cy.get(this.selectorsList().firstNameField).clear().type("João")
        cy.get(this.selectorsList().middleNameField).clear().type("Da")
        cy.get(this.selectorsList().lastNameField).clear().type("Silva")
        cy.get(this.selectorsList().generecField).eq(3).clear().type("Joãozinho")
        cy.get(this.selectorsList().generecField).eq(4).clear().type("123456789")
        cy.get(this.selectorsList().generecField).eq(5).clear().type("22 11 33 55")
        cy.get(this.selectorsList().dateField).eq(0).clear().type("1989-01-01")
        cy.get(this.selectorsList().closeDateField).click({force: true})
        cy.get(this.selectorsList().dropDown).eq(0).click({force: true})
        cy.get(':nth-child(27) > span').click({force: true})
        cy.get(this.selectorsList().dropDown).eq(1).click({force: true})
        cy.get(':nth-child(3) > span').click({force: true})
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})       
        cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage