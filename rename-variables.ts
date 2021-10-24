import type { API, FileInfo, Options } from 'jscodeshift';

export default function(fileInfo: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  // transform `fileInfo.source` here
  // const changedSource = j(fileInfo.source)
  //   .find(j.Identifier)
  //   .replaceWith(p => j.identifier(p.node.name.split('').reverse().join('')))
  //   .toSource();
  const changedSource = j(fileInfo.source)
    .findVariableDeclarators('foo')
    .renameTo('bar')
    .toSource();
  
  // return changed source
  return changedSource
}

// use the flow parser
const parser = 'flow';

export {
  parser
}
