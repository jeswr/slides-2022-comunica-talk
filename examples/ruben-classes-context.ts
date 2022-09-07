import { KeysRdfDereferenceConstantHylar, KeysRdfReason } from '@comunica/reasoning-context-entries';
import { Store } from 'n3';

export default {
  sources: [
    'https://www.rubensworks.net/',
    // 'http://xmlns.com/foaf/spec/index.rdf'
    // foaf is down (: so lets use this instead
    // 'https://raw.githubusercontent.com/rdfjs/N3.js/6b9bb01258138472863efac80d9fff360e122bbe/perf/data/foaf.ttl',
    'https://web.archive.org/web/20220614105937if_/http://xmlns.com/foaf/spec/20140114.rdf'
    // RDFS
    // 'http://www.w3.org/2000/01/rdf-schema'
  ],
  [KeysRdfReason.rules.name]: KeysRdfDereferenceConstantHylar.rdfs,
  [KeysRdfReason.implicitDatasetFactory.name]: () => new Store()
};
