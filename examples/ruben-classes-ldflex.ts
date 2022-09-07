// @ts-ignore
import { PathFactory, defaultHandlers } from 'ldflex';
import ComunicaEngine from '@ldflex/comunica';
import iterationHandlers from '@ldflex/async-iteration-handlers';
import { QueryEngine } from '@comunica/query-sparql-reasoning';
import options from './ruben-classes-context'
import { NamedNode } from 'n3';

// The JSON-LD context for resolving properties
const context = {
  "@context": {
    "@vocab": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "a": "type",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "label": "rdfs:label",
    // "foaf": "http://xmlns.com/foaf/0.1/",
    // "friends": "foaf:friends"
  }
};

// The query engine and its source
const queryEngine = new ComunicaEngine('https://ruben.verborgh.org/profile/', {
  engine: new QueryEngine(),
  options,
});

// The object that can create new paths
const path = new PathFactory({ 
  context,
  queryEngine,
  handlers: {
    ...iterationHandlers,
    ...defaultHandlers
  }
});

const ruben = path.create({ subject: new NamedNode('https://www.rubensworks.net/#me') });

async function main() {
  
}

main();























// async function main() {
  // for await (const type of ruben.a) {
  //   console.log(`${type}`)
  //   // console.log(`${type}`, await type.label ? `\t\t\tLabel is: "${await type.label}"` : `\t\tFragment is: "${type.fragment}"`)
  // }
  // @see https://github.com/ldflex/async-iteration-handlers
  // ruben.a.forEach(async (type: any) => {
  //   console.log(`${type}`, await type.label ? `\t\t\tLabel is: "${await type.label}"` : `\t\tFragment is: "${type.fragment}"`)
  // })
// }

// main();
