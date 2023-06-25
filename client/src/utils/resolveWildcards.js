export function resolveWildcards(path, ...values) {
  const wildcards = path.split('/').filter(x => x.startsWith(':'));

  if(wildcards.length !== values.length) {
    console.error(`You have to provide one value per wildcard. Wildcards count: "${wildcards.length}". Values count: "${values.length}".`);
    return path;
  }

  for(let i = 0; i < wildcards.length; i++) {
    path = path.replace(wildcards[i], values[i]);
  }

  return path;
}