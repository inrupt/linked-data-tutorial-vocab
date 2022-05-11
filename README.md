# Inrupt Linked Data Tutorial

Simple tutorial demonstrating how to start working with Linked Data vocabs.

The intent here is to provide a template Linked Data vocabulary for the
developer to then extend themselves. 

## Generate multiple local modules from our local vocabulary

We use Inrupt's open-source Artifact Generator tool to generate very
convenient JavaScript/TypeScript source-code modules for use. These modules
contain constants for all the terms we define in our own vocabulary, including
one form of module that also provides programmatic access to much of the
common metadata we may have associated with terms in our vocabulary.

```bash
npx @inrupt/artifact-generator generate --vocabListFile "./src/resources/Vocab/vocab-linked-data-tutorial-bundle-all.yml" --noprompt --force --publish npmInstallAndBuild
```
