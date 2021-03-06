describe('Test all login functionalities', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('Login with valid email and password for a normal user', () => {
    cy.get('[data-cy=email-field]').type('user');
    cy.get('[data-cy=password-field]').type('user');
    cy.get('[data-cy=login_button]').click()
  });
});