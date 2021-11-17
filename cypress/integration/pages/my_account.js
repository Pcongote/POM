const mAselectors = {
  "header line": ".navigation_page",
};

function elementContain(title, elementName) {
  cy.log(title);
  cy.log(elementName);
  cy.get(mAselectors[elementName]).should("contain", title);
}

module.exports = elementContain;
