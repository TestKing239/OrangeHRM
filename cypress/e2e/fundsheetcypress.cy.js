describe('fundsheetcypress', function() {

    
    function getRandomName() {
        const letters = "JHGFD";  // Allowed characters
        let name = "";
        for (let i = 0; i < 5; i++) {
            name += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        return name;
    }    
    const RandomName = getRandomName();
    const Email = RandomName+"@mailinator.com";
    const fileType = 'cypress\fixtures\logo.png';
    const companyName = "Company "+RandomName;
    it("Register", function(){

        cy.visit('https://test.fundsheet.app/')      
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/nav[1]/div[3]/button[1]/a[1]/h3[1]').click()
        cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/form[1]/div[1]/input[1]").type("Abhay"+RandomName)
        cy.get('form > :nth-child(3) > input').type("Tester")
        cy.get(':nth-child(4) > input').type(RandomName+"@mailinator.com")
        cy.get(':nth-child(5) > div > #password').type("Abhay@123")
        cy.get(':nth-child(6) > #password').type("Abhay@123")
        cy.get('#checkbox').click()
        cy.xpath('/html[1]/body[1]/div[1]/div[3]/div[1]/form[1]/button[1]').click()
    //  -------------


        // 21205762

    })
    
    it("Login", function(){
        cy.visit('https://test.fundsheet.app/login')        
        cy.get("input[placeholder='e.g. Johndoe@fund.vs']").type(Email)  //css locater   //input[naml']
        cy.get('#password').type("Abhay@123")  //css locater   //input[name='password']
        cy.xpath('/html[1]/body[1]/div[1]/div[3]/div[1]/form[1]/button[1]').click()

       
        cy.wait(5000)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Prevent test failure due to application errors
          });

          cy.get('#upgradePlanForm > .btn').click()
          cy.get('h2').should('have.text', 'Payment Successful!')
    

    })


    


    it("Add Fund", function(){

        cy.visit('https://test.fundsheet.app/login')        
        cy.get("input[placeholder='e.g. Johndoe@fund.vs']").type(Email)  //css locater   //input[naml']
        cy.get('#password').type("Abhay@123")  //css locater   //input[name='password']
        cy.xpath('/html[1]/body[1]/div[1]/div[3]/div[1]/form[1]/button[1]').click()
        cy.wait(3000)
        cy.get('#onboardingHelpModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()


  //add compnaies      
        cy.get(':nth-child(1) > .text-end > .d-block > .bi').click()
          cy.get('#name').type("Fund "+ RandomName)
          cy.get('.form-select').select('INR-Indian Rupee')
          cy.get('#total_commitment').type("300000")
          cy.scrollTo('center'); 
          const filePath = 'cypress/fixtures/logo.png';
          cy.get('#logo').selectFile(filePath);
          cy.get('.card-body > .btn-primary').click()
          cy.get('#congratulationsPopupLabel').should('have.text', 'Congratulations!')

    })


it("Add Companies", function(){

    cy.visit('https://test.fundsheet.app/login')        
        cy.get("input[placeholder='e.g. Johndoe@fund.vs']").type(Email)  //css locater   //input[naml']
        cy.get('#password').type("Abhay@123")  //css locater   //input[name='password']
        cy.xpath('/html[1]/body[1]/div[1]/div[3]/div[1]/form[1]/button[1]').click()
        cy.wait(3000)
        cy.get('#onboardingHelpModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
//Add compnaies
        cy.get(':nth-child(2) > .text-end > .d-block > .bi').click()
//         cy.scrollTo('bottom'); // Scroll to the bottom of the page
// cy.scrollTo('top');    // Scroll to the top of the page
// cy.scrollTo('center'); // Scroll to the center of the page
        cy.scrollTo('center'); 

        cy.get('#name').type("Company "+ RandomName)
        cy.get('#currency').select('INR-Indian Rupee')
        cy.scrollTo('center'); 
        
        const filePath = 'cypress/fixtures/logo.png';

        cy.get('#company_logo').selectFile(filePath);
        cy.scrollTo('top'); 
        cy.xpath("//button[@id='assetCreate']").click()
        cy.get('#congratulationsPopupLabel').should('have.text', 'Congratulations!')
        

      
    })
it  ("Add Asset", function(){


    cy.visit('https://test.fundsheet.app/login')        
        cy.get("input[placeholder='e.g. Johndoe@fund.vs']").type(Email)  //css locater   //input[naml']
        cy.get('#password').type("Abhay@123")  //css locater   //input[name='password']
        cy.xpath('/html[1]/body[1]/div[1]/div[3]/div[1]/form[1]/button[1]').click()
        cy.wait(3000)
        cy.get('#onboardingHelpModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()



        //Add Asset

        cy.get(':nth-child(3) > .text-end > .d-block > .bi').click()
        cy.xpath("//a[normalize-space()='Manage Metrics']").click()
        cy.xpath("//button[normalize-space()='Set-up Metrics']").click()
        cy.wait(3000)
        cy.get('.multiSelect_dropdown').click
        .select('Cost Of Sales (COS)')
        cy.xpath("//div[@class='multiSelect_dropdown -hasValue']").click()
        cy.xpath("//form[@id='preMetricModal']//button[@type='submit'][normalize-space()='Add']").click()


       

   
})


})