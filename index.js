const { YOUR_VOCAB } = require("@inrupt/vocab-linked-data-tutorial-bundle-all-solidcommonvocab");

console.log(`My class has IRI (as a string) [${YOUR_VOCAB.SolutionClass.iriAsString}]`);
console.log(`My class has IRI (as the 'value' of the RDF/JS Named Node we extend) [${YOUR_VOCAB.SolutionClass.value}]`);
console.log();
console.log(`My class should have an English label (by default) [${YOUR_VOCAB.SolutionClass.label}]`);
console.log();
console.log(`My class might have a Spanish comment (but will default back to English if not) [${YOUR_VOCAB.SolutionClass.asLanguage("es").comment}]`);
console.log(`My class should an English comment (by default) [${YOUR_VOCAB.SolutionClass.comment}]`);
console.log();


const { FOAF, DCTERMS } = require("@inrupt/vocab-common-rdf-solidcommonvocab");
console.log(`FOAF has English comments, for example FOAF.Agent [${FOAF.Agent.comment}]`);
console.log();

console.log(`What is DCTERMS.ISO3166? [${DCTERMS.ISO3166.comment}]`);
// The DCTERMS term for ISO3166 has `rdfs:seeAlso` links... 
DCTERMS.ISO3166.seeAlso.forEach((link)  => {
    console.log(`Also has the following 'seeAlso' link: [${link.value}]`);
});

