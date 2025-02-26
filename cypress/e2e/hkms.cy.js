describe ('HKMS', () => {

it( 'Login' , ()=> {


cy.visit('https://hkms.hackerkernel.com/login')
cy.get('#email').type('abhaytoriya23@gmail.com')
cy.get('#password').type('Abha@123')
cy.get('.btn-primary').click()
cy.get(':nth-child(3) > .nav-link').click()
cy.get('.select2-search__field').type('Total Recall');
cy.get('.select2-results__option').contains('Total Recall').click();
cy.get('#description').type("Testing")
cy.get('.btn').click()
})




})