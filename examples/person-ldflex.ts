// @ts-ignore
import { PathFactory, defaultHandlers } from 'ldflex';
import ComunicaEngine from '@ldflex/comunica';
import iterationHandlers from '@ldflex/async-iteration-handlers';
import { QueryEngine } from '@comunica/query-sparql-reasoning';
import { NamedNode, Quad, Store } from 'n3';
import { KeysRdfDereferenceConstantHylar, KeysRdfReason } from '@comunica/reasoning-context-entries';

// The JSON-LD context for resolving properties
const context = {
  "@context": {
    "@vocab": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "a": "type",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "label": "rdfs:label",
    "foaf": "http://xmlns.com/foaf/0.1/",
    "schema": "https://schema.org/",
    "owl": "http://www.w3.org/2002/07/owl#",
    // "friend": "foaf:knows"
    "friend": "schema:knows"
  }
};

const SAMEAS_DATA = new Store([
  new Quad(
    new NamedNode('https://schema.org/knows'),
    new NamedNode('http://www.w3.org/2002/07/owl#equivalentProperty'),
    new NamedNode('http://xmlns.com/foaf/0.1/knows')
    
    )
  ])

// The query engine and its source
const queryEngine = new ComunicaEngine('https://ruben.verborgh.org/profile/', {
  engine: new QueryEngine(),
  // options,
  options: {
    sources: [
      'https://www.rubensworks.net/',
      // 'http://xmlns.com/foaf/spec/index.rdf'
      // foaf is down (: so lets use this instead
      'https://raw.githubusercontent.com/rdfjs/N3.js/6b9bb01258138472863efac80d9fff360e122bbe/perf/data/foaf.ttl',
      SAMEAS_DATA
      // RDFS
      // 'http://www.w3.org/2000/01/rdf-schema'
    ],
    // [KeysRdfReason.rules.name]: KeysRdfDereferenceConstantHylar.owl2rl,
    // [KeysRdfReason.rules.name]: 'https://gist.githubusercontent.com/jeswr/60bdf7828650d0ef7ad67bfad4e188c8/raw/61066202255e857c4c7d4c51e701fc79bf54e3f5/custom_alignment.hylar',
    [KeysRdfReason.implicitDatasetFactory.name]: () => new Store()
  }
});

// The object that can create new paths
const path = new PathFactory({  context, queryEngine, handlers: {
  ...iterationHandlers,
  ...defaultHandlers
} });

const ruben = path.create({ subject: new NamedNode('https://www.rubensworks.net/#me'), distinct: true });

async function main() {

}

main();


// async function main() {
//   const seen: Record<string, boolean> = {};
//   for await (const person of ruben.friend) {
//     if (!seen[`${person}`]) {
//       seen[`${person}`] = true;
//       console.log(`${person}`)
//     }
//   }
// }

// main();
