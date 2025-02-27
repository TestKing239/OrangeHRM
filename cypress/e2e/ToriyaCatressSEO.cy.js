const { title } = require("process");


describe('ToriyaCaterssSEO', () => {

it('Login', () => {
cy.visit('https://www.justdial.com/')
cy.get('#main-auto').type('Toriya Cateress').type('{downarrow}').type('{enter}')

cy.scrollTo('center'); // Scroll to the center of the page


    })



    it('Website', () => {
  cy.visit('https://toriyacateringserviceakola.tiiny.site/')
  cy.wait(5000)
    })

    it('Login', () => {
        cy.visit('https://www.google.com/maps')
        cy.get('#searchboxinput').type('Toriya Cateress Akola').type('{enter}')
        cy.screenshot('home_page');

          })

})