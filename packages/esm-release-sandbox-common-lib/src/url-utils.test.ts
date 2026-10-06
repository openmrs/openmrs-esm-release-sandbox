import { describe, it, expect } from 'vitest';
import { trimTrailingSlash, versionedSubscriptionUrlSlashCount } from './url-utils';

describe('trimTrailingSlash', () => {
  it('removes a trailing slash', () => {
    expect(trimTrailingSlash('https://api.openconceptlab.org/users/u/collections/c/')).toBe(
      'https://api.openconceptlab.org/users/u/collections/c',
    );
  });

  it('leaves a URL without a trailing slash alone', () => {
    expect(trimTrailingSlash('https://api.openconceptlab.org/users/u/collections/c')).toBe(
      'https://api.openconceptlab.org/users/u/collections/c',
    );
  });

  it('handles an empty string', () => {
    expect(trimTrailingSlash('')).toBe('');
  });
});

describe('versionedSubscriptionUrlSlashCount', () => {
  it('matches the slash count of a versioned collection URL', () => {
    const { pathname } = new URL('https://api.openconceptlab.org/users/username/collections/collectionname/v1.0');
    expect(pathname.match(/\//g)?.length).toBe(versionedSubscriptionUrlSlashCount);
  });
});
