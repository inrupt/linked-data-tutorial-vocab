# Inrupt Linked Data Tutorial

Simple tutorial demonstrating how to start working with Linked Data vocabs.

The intent here is to provide a template for your own Linked Data vocabulary
that you can then extend yourself. 

## Clone this repository

Clone down this repository to your local development machine.

```bash
$ git clone git@github.com:inrupt/linked-data-tutorial-vocab.git
$ cd linked-data-tutorial-vocab
```

Run install:

```bash
npm install
```

## Generate local modules from our local vocabulary

We use Inrupt's open-source [Artifact Generator](https://github.com/inrupt/artifact-generator)
tool to generate very convenient Java/JavaScript/TypeScript source-code
modules for use. These modules contain constants for all the terms we define
in our own vocabulary, including a form of module that also provides
programmatic access to a lot of the common metadata that you may have
associated with terms in your vocabulary.

```bash
npx @inrupt/artifact-generator generate --vocabListFile "./src/resources/Vocab/vocab-linked-data-tutorial-bundle-all.yml" --noprompt --force --publish npmInstallAndBuild
```

## Run simple code that uses our vocab terms...

Simply run our `index.js` code, that just attempts to output vocab term
metadata to the console.

```bash
node src/index.js
```

## Extend your vocab

Now you can play around and extend your vocab
(i.e., `./src/resources/Vocab/vocab.ttl`), and then re-run the Artifact
Generator to validate your changes and re-generate the associated source-code,
allowing you to easily access your updates from `./src/index.js`.

### Install the Artifact Generator locally

By design `npx` can be slow to execute, so if you're making regular updates to
your vocabs it can be much more convenient to install and run the Artifact
Generator locally.

```bash
npm install -g @inrupt/artifact-generator
```

Once this is done, you can re-generate much more quickly using:

```bash
artifact-generator generate --vocabListFile "./src/resources/Vocab/vocab-linked-data-tutorial-bundle-all.yml" --noprompt --force --publish npmInstallAndBuild
```

### Running the Artifact Generator in 'watcher' mode

You can also run the Artifact Generator in 'watcher' mode, which can
file-watch for edits to local vocab files, and that re-generates all
associated source-code for you automatically. This is extremely convenient
when making regular update to multiple vocabularies.

But for instructions on how to do that, see the documentation for the
[Artifact Generator](https://github.com/inrupt/artifact-generator) itself.