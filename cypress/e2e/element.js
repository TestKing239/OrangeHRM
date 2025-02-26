// const { Hook } = require("mocha");

// describe('My First Test', () => {
//     // Test cases will go here
// });


// it('should visit the homepage and verify title', () => {
//     // Test logic will go here
// });


// cy.visit('https://example.com'); // Navigate to a URL
// cy.title().should('include', 'Example Domain'); // Verify the title


// cy.get('.btn-primary').click(); // Click a button with class 'btn-primary'

// cy.get('input[name="email"]').type('test@example.com'); // Type email into the input


// cy.get('.alert').should('be.visible'); // Assert that the alert element is visible



// cy.log('STM 123')




// cy.visit('https://sdetunicorns.com');
// cy.get('a[target="_blank"]').invoke('removeAttr', 'target').click(); // Remove target attribute and click the link
// cy.url().should('include', '/expected-page'); // Check that the new page URL is as expected


// Hook  ('beforeEach', () => {})
// Hook  ('before', () => {})
// Hook  ('afterEach', () => {})
// Hook  ('after', () => {})   



// Selector In cypress
// css_selecteor
// attribute
// text
// value
// xpath



// NPX (Node Package Execute) 

// NPX (Node Package Manager) 


// Cypress defalut time out  4-5 sec








// -------------------------------------
// Wait element visible

// cy.get('.my-element', { timeout: 10000 }).should('be.visible'); 
// -------------------------
// mulitple Execute file in cypress

// npx cypress run --record --key <your-record-key> --parallel
// ----------------------------
// HANDLESS MODE IN Cypress. 
// cypress run

// --------------------------
// Run with sepcific browser

// npx cypress run --browser chrome


// -------------------

// cy.get('button.submit').click().debug();


// ------------------------


// cy.get('input[name="username"]').type('myUsername').pause();


// -------------------------------

// cy.get(‘.active’).should(‘be.visible’).and(‘have.class’, ‘active’).and(‘contain’, ‘Services’)`



// ------------------
// API cypress 


// describe('API Testing', () => {
//   it('should retrieve a list of users', () => {
//     cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
//       .then((response) => {
//         expect(response.status).to.eq(200);
//         expect(response.body).to.be.an('array');
//         expect(response.body.length).to.be.greaterThan(0);
//       });
//   });
//   it('should create a new user', () => {
//     const newUser = {
//       name: 'John Doe',
//       email: 'john@example.com'
//     };
//     cy.request('POST', 'https://jsonplaceholder.typicode.com/users', newUser)
//       .then((response) => {
//         expect(response.status).to.eq(201);
//         expect(response.body).to.have.property('name', newUser.name);
//         expect(response.body).to.have.property('email', newUser.email);
//       });
//   });
// });


// ------------------------



// Read file in cypress

// cy.readFile('cypress/fixtures/data.json').then((data) => {
//   cy.log(data);
// });

// and 

// cy.readFile('cypress/fixtures/data.json').then((data) => {
// // Access data from the JSON file
// cy.log(data.key);
// });

// ------------------------------


// Browser prperty in cyprss  

//  cy.log(Cypress.browser);

//  -------------------
//    overmouser 

//    cy.get('.your-element-selector').trigger('mouseover');
// -----------
// Drang drop 


// cy.get('.draggable-element')
// .trigger('mousedown', { which: 1 });
// cy.get('.drop-zone')
// .trigger('mousemove')
// .trigger('mouseup', { force: true });


// --------------------------


// hidden element 

// cy.get('selector-for-hidden-element').click({ force: true });
// --------------------------


// cy.get('#submit').trigger('click');


// -------------------------


// cy.title().then((title) => {
// cy.log(title);
// });


// -----------

// key press 

// cy.get('input').type('Hello{enter}');
// -------------------------


// describe ('abc', function() {
//  it 

// })



// ‘cy.get(selector)‘ – Retrieves one or more DOM elements matching the specified selector.
// ‘cy.contains(text)’ – Finds a DOM element containing specific text.
// ‘cy.click()‘ – Simulates a mouse click on the selected element.
// ‘cy.dblclick()‘ – Simulates a double-click action on the selected element.
// ‘cy.rightclick()’ – Simulates a right-click action on the selected element.
// ‘cy.type(text)‘ – Types text into an input field.
// ‘cy.select(value)’ – Selects an option from a dropdown menu by its value.
// ‘cy.clear()’ – Clears the value of an input field.
// ‘cy.check()’ – Checks a checkbox or radio button by selecting it based on its value or label.
// ‘cy.uncheck()’ – Unchecks a checkbox or radio button that is currently selected.
// ‘cy.visible()‘ – Checks if an element is visible in the viewport.
// ‘cy.should(condition)’ – Asserts that a DOM element meets a specified condition (e.g., be.visible, exist).
// ‘cy.focus()‘ – Sets focus on the selected element.
// ‘cy.hover()’ – Simulates hovering over a DOM element.




// ----------------------

// cy.visit('http://example.com');
// To go back to the previous page in the browser history, you can simply call:

// cy.go('back');
// Conversely, to go forward, use:

// cy.go('forward');
// Furthermore, Cypress allows us to reload the current page using:

// cy.reload();
// These navigation commands can streamline your testing process by simulating user interactions more accurately, ensuring 


// --------------
// Keyboard in Cypress
// // Press the Enter key
// cy.get('input').type('{enter}');
// // Press the Escape key
// cy.get('input').type('{esc}');
// // Press the Tab key
// cy.get('input').type('{tab}');


// ----


// cy.on('window:alert', (text) => {
// // You can assert the alert message if needed
// expect(text).to.equal('Your alert message here');
// });



// -----------------


// --------------------------


// hidden element 

// cy.get('selector-for-hidden-element').click({ force: true });
// --------------------------


// cy.get('#submit').trigger('click');


// -------------------------


// cy.title().then((title) => {
// cy.log(title);
// });


// -----------

// key press 

// cy.get('input').type('Hello{enter}');
// -------------------------


// describe ('abc', function() {
//  it 

// })



// ‘cy.get(selector)‘ – Retrieves one or more DOM elements matching the specified selector.
// ‘cy.contains(text)’ – Finds a DOM element containing specific text.
// ‘cy.click()‘ – Simulates a mouse click on the selected element.
// ‘cy.dblclick()‘ – Simulates a double-click action on the selected element.
// ‘cy.rightclick()’ – Simulates a right-click action on the selected element.
// ‘cy.type(text)‘ – Types text into an input field.
// ‘cy.select(value)’ – Selects an option from a dropdown menu by its value.
// ‘cy.clear()’ – Clears the value of an input field.
// ‘cy.check()’ – Checks a checkbox or radio button by selecting it based on its value or label.
// ‘cy.uncheck()’ – Unchecks a checkbox or radio button that is currently selected.
// ‘cy.visible()‘ – Checks if an element is visible in the viewport.
// ‘cy.should(condition)’ – Asserts that a DOM element meets a specified condition (e.g., be.visible, exist).
// ‘cy.focus()‘ – Sets focus on the selected element.
// ‘cy.hover()’ – Simulates hovering over a DOM element.




// ----------------------

// cy.visit('http://example.com');
// To go back to the previous page in the browser history, you can simply call:

// cy.go('back');
// Conversely, to go forward, use:

// cy.go('forward');
// Furthermore, Cypress allows us to reload the current page using:

// cy.reload();
// These navigation commands can streamline your testing process by simulating user interactions more accurately, ensuring 


// --------------
// Keyboard in Cypress
// // Press the Enter key
// cy.get('input').type('{enter}');
// // Press the Escape key
// cy.get('input').type('{esc}');
// // Press the Tab key
// cy.get('input').type('{tab}');


// ----


// cy.on('window:alert', (text) => {
// // You can assert the alert message if needed
// expect(text).to.equal('Your alert message here');
// });



// -----------------


