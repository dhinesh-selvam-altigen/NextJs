describe('Login Page',()=>{
    it('Should validate with correct credentials',()=>{
        cy.visit("/login");
        cy.get('input[name="email"]').should("be.visible").type("test@gmail.com")
        cy.get('input[name="password"]').should("be.visible").type("test123")
        cy.get('button[type="submit"]').click()
    })
})