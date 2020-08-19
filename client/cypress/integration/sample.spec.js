
describe("my first test", ()=>{
  it("to my app", ()=>{
    cy.visit('/')
    cy.contains("Team")
  })
})