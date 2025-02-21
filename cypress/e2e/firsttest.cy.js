describe('My First Test', () => {




    it('Verfiy title positive test', () => {

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.title().should('eq', 'OrangeHRM')
    })




    it('Verify title nagetaive test', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM123')
      }) 



      it('Verify fundsheet title', () => {

        cy.visit('https://test.fundsheet.app/')
        cy.title().should('eq', 'Fundsheet')
      }) 



  })

  