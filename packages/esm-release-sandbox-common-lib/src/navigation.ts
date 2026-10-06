import { type MouseEvent } from 'react';
import { navigate } from '@openmrs/esm-framework';

/**
 * Returns a click handler that navigates client-side on a plain left click, letting
 * modified clicks fall through to the anchor so they open a new tab or window as usual.
 */
export function handlePlainLeftClick(to: string) {
  return (event: MouseEvent) => {
    if (event.button === 0 && !event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey) {
      event.preventDefault();
      navigate({ to });
    }
  };
}
