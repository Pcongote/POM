const autSelectors = {
  singin: ".login",
  email: "#email_create",
  "create an account": "#SubmitCreate > span",
};

function singinButtom(elementName) {
  cy.get(autSelectors[elementName]).click();
}

function typeEmail(text, elementName) {
  const email =
    "falseff_" + Math.floor(Math.random() * 1000) + 1 + "@gmail.com";

  if (text.includes("email")) {
    cy.get(autSelectors[elementName]).type(email);
  } else {
    cy.get(autSelectors[elementName]).type(text);
  }
}

module.exports = { singinButtom, typeEmail };
