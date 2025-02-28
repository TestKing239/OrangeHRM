const { title } = require("process");


describe('ToriyaCaterssSEO', () => {

it('JustDial', () => {
cy.visit('https://www.justdial.com/',{timeout: 15000});
cy.get('#main-auto').type('Toriya Cateress').type('{downarrow}').type('{enter}')
cy.wait(5000)
cy.scrollTo('center'); // Scroll to the center of the page


    })



    it('Website', () => {
  cy.visit('https://toriyacateringserviceakola.tiiny.site/')
  cy.wait(5000)
  cy.scrollTo('top')
  cy.wait(5000)
  cy.scrollTo('center')
  cy.wait(5000)
  cy.scrollTo('bottom')
    })



    it('Google Map', () => {
        cy.visit('https://www.google.com/maps')
        cy.get('#searchboxinput').type('Toriya Cateress Akola').type('{enter}')
          cy.wait(5000)

       })

})