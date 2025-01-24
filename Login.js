describe('Test Login', function(){
    it('case positif', function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.wait(5000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.wait(2000)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.wait(2000)
        cy.get('.oxd-button').click()
        cy.wait(2000)

        cy.get('.oxd-userdropdown-tab').should('exist')
 
    })
    it('case negatif field kosong', function(){
        cy.wait(5000)
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.wait(5000)
        cy.get('.oxd-button').click()
        cy.wait(2000)

        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('exist')
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('exist')

    })
    it('case negatif username salah', function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.wait(5000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('abcde')
        cy.wait(2000)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.wait(2000)
        cy.get('.oxd-button').click()
        cy.wait(2000)

        cy.get('.oxd-alert').should('exist')
 
    })
    it('case negatif password salah', function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.wait(5000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.wait(2000)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('12345678')
        cy.wait(2000)
        cy.get('.oxd-button').click()
        cy.wait(2000)

        cy.get('.oxd-alert').should('exist')
 
    })

})
