const { IBM_VOCAB, YOUR_VOCAB } = require("../Generated/SourceCodeArtifacts/TypeScript-SolidCommonVocab");

//
// Here we show how to access the IRI and metadata from the 'SolutionClass'
// term we provided already in the local vocabulary.
//
console.log(`SolutionClass has IRI (as a string) [${YOUR_VOCAB.SolutionClass.iriAsString}]`);
console.log(`SolutionClass has IRI (as the 'value' of the RDF/JS Named Node we extend) [${YOUR_VOCAB.SolutionClass.value}]`);
console.log();
console.log(`SolutionClass should have a short English label (by default) [${YOUR_VOCAB.SolutionClass.label}]`);
console.log();
console.log(`SolutionClass should have a longer English comment (by default) [${YOUR_VOCAB.SolutionClass.comment}]`);
console.log(`SolutionClass might also have a Spanish comment (but will fallback to looking for an English one if not) [${YOUR_VOCAB.SolutionClass.asLanguage("es").comment}]`);
console.log();


//
// Here we're showing how to access the IRI and metadata from terms in common
// vocabularies that Inrupt provides bundles for.
//
const { FOAF, DCTERMS, AS, SCHEMA_INRUPT } = require("@inrupt/vocab-common-rdf-solidcommonvocab");

// Firstly just show the IRI's:
console.log(`IRI for FOAF ‘name’ property: [${FOAF.name}]`);
console.log(`IRI for Schema.org ‘Person’ class: [${SCHEMA_INRUPT.Person}]`);
console.log();

console.log(`AS.Activity IRI: [${AS.Activity.iriAsString}]`);
console.log(`AS.Activity comment: [${AS.Activity.comment}]`);

console.log(`The IRI for FOAF Agent is [${FOAF.Agent.iriAsString}]`);
console.log(`FOAF has English comments, for example FOAF.Agent [${FOAF.Agent.comment}]`);
console.log();

console.log(`What is the term ISO3166 defined in DCTERMS?`);
console.log(`Answer: [${DCTERMS.ISO3166.comment}]`);

// The DCTERMS term for ISO3166 includes `rdfs:seeAlso` links, so lets show
// them...
DCTERMS.ISO3166.seeAlso.forEach((link)  => {
    console.log(`Also has the following 'seeAlso' link: [${link.value}]`);
});



console.log(`What is the identifier for IBM's defintion of what a Mainframe is: [${IBM_VOCAB.Mainframe}]`);
