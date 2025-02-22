

describe('locaters', () =>{




    function getRandomName() {
        const letters = "JHGFD";  // Allowed characters
        let name = "";
        for (let i = 0; i < 5; i++) {
            name += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        return name;
    }    
    const RandomName = getRandomName();
    




    it("css locater", function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        cy.get("input[name='username']").type("Admin")  //css locater   //input[name='username']            
        cy.get("input[name='password']").type("admin123")  //css locater   //input[name='password'] 
        cy.get("button[type='submit']").click()  //css locater   //input[name='Submit']
        cy.url().should('include', '/dashboard')
        cy.get("input[placeholder='Search']").type("Admin")
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)").click()
       
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
        cy.get("div[class='oxd-grid-2 orangehrm-full-width-grid'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1)").click().type('{downarrow}{enter}');

        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").click().type('{downarrow}{enter}');
        cy.get("div[class='oxd-form-row'] div[class='oxd-grid-2 orangehrm-full-width-grid'] div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").type(RandomName)
        cy.get("div[class='oxd-grid-item oxd-grid-item--gutters user-password-cell'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']").type("a12345678")
        cy.get("div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']").type("a12345678")
        cy.xpath("//input[@placeholder='Type for hints...']").type("Orange")
        cy.wait(3000)
        cy.xpath("//input[@placeholder='Type for hints...']").type('{downarrow}{enter}')

        cy.get("button[type='submit']").click()
        
        


        //Validation for check element visible or not.
        cy.wait(5000)
       cy.xpath("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").type(RandomName)
cy.xpath("//button[normalize-space()='Search']").click()


        //Validation for check element visible or not.
        // cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)").should('have.text', RandomName)
        // cy.xpath("//a").should('have.length', 15)

// radio or checkbox
        //  cy.wait(5000)
        // cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").should('be.visible')
        // cy.get("input.oxd-table-card-cell-checkbox[type=checkbox]").check().should('be.checked')

     // Validation for check element visible or not.   
    //    let expName="xyz";
    //    cy.get(".oxd-userdropdown-name").then(   (x)=>{
    //     let actName=x.text();
    //     expect(actName).to.equal(expName);   //explicit assertion
    //     expect(actName).not.equal(expName);   //explicit assertion 




        
        })

    
})    