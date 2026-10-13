import { lazy, type ComponentType, type LazyExoticComponent } from 'react';

// One React.lazy wrapper per loader function. Without this, every render would create a new lazy component
// and start the import again.
const wrappers = new WeakMap<object, unknown>();

export function lazyOnce<P>(loader: () => Promise<{ default: ComponentType<P> }>): LazyExoticComponent<ComponentType<P>> {
  const known = wrappers.get(loader) as LazyExoticComponent<ComponentType<P>> | undefined;
  if (known) return known;
  const wrapper = lazy(loader);
  wrappers.set(loader, wrapper);
  return wrapper;
}
