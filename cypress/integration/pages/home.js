const url = "http://automationpractice.com/index.php";

const openPage = () => {
  cy.visit(url);
};

module.exports = openPage;
