import { QueryEngine } from '@comunica/query-sparql';
// import { QueryEngine } from '@comunica/query-sparql-reasoning';
import { Bindings } from '@comunica/types';
import context from './ruben-classes-context'

async function main() {
  
}

main();




















// async function main() {
//   const myEngine = new QueryEngine();
//   const bindingsStream = await myEngine.queryBindings(
//     'SELECT DISTINCT * WHERE { <https://www.rubensworks.net/#me> a ?o }',
//     context as any
//   );

//   // Consume results as a stream (best performance)
//   bindingsStream.on('data', (binding: Bindings) => {
//     // Obtaining values
//     console.log(binding.get('o')?.value);
//   });
//   bindingsStream.on('error', (error: Error) => {
//     console.error(error);
//   });
// }

// main();
