const cAselectors = {
  gender: "#id_gender1",
  "first name": "#customer_firstname",
  "last name": "#customer_lastname",
  password: "#passwd",
  Day: "#days",
  Month: "#months",
  Year: "#years",
  "first name Adress": "#firstname",
  "last name Adress": "#lastname",
  company: "#company",
  aderess: "#address1",
  city: "#city",
  state: "#id_state",
  "zip code": "#postcode",
  information: "#other",
  phone: "#phone",
  "mobile phone": "#phone_mobile",
  register: "#submitAccount > span",
  search: "#search_query_top",
  lens: "#searchbox > .btn",
  "special yellow dress": "Printed Summer Dress",
  "black color": "#color_11",
  "Add to car": ".exclusive > span",
  "continue shopping": ".continue > span",
  "printed dress": '[title="Printed Dress"]',
  "Proceed to checkout": ".button-medium > span",
  eliminate: ".icon-trash",
  "next step": ".cart_navigation > .button > span",
  "I agree to the terms of service": "#cgv",
  "pay by bank wire": ".bankwire > span",
};

function genderButton(elementName) {
  cy.get(cAselectors[elementName]).click();
}

function typeInfo(text, elementName) {
  const email =
    "falseff_" + Math.floor(Math.random() * 1000) + 1 + "@gmail.com";

  if (text.includes("email")) {
    cy.get(cAselectors[elementName]).type(email);
  } else {
    cy.get(cAselectors[elementName]).type(text);
  }
}

function selectInfo(text, elementName) {
  cy.get(cAselectors[elementName]).select(text);
}

module.exports = { genderButton, typeInfo, selectInfo };
