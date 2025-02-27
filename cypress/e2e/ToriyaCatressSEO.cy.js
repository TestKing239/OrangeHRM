const { title } = require("process");


describe('ToriyaCaterssSEO', () => {

it('Login', () => {
cy.visit('https://www.justdial.com/')
cy.get('#main-auto').type('Toriya Cateress').type('{downarrow}').type('{enter}')
cy.wait(50000)
cy.scrollTo('center'); // Scroll to the center of the page


    })



    it('Website', () => {
  cy.visit('https://toriyacateringserviceakola.tiiny.site/')
  cy.wait(50000)
  y.scrollTo('top')
  cy.wait(50000)
  y.scrollTo('center')
  cy.wait(50000)
  cy.scrollTo('bottom')
    })

    it('Map', () => {
        cy.visit('https://www.google.com/maps')
        cy.get('#searchboxinput').type('Toriya Cateress Akola').type('{enter}')
        cy.wait(50000)
        cy.get('.G7m0Af').click()
        cy.scrollTo('top')
        cy.wait(50000)
        cy.screenshot('home_page');

          })

})