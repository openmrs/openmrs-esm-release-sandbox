/**
 * The number of forward slashes an Open Concept Lab subscription URL path has once a
 * collection version is included, e.g.
 * https://api.openconceptlab.org/users/username/collections/collectionname/v1.0
 */
export const versionedSubscriptionUrlSlashCount = 5;

/**
 * Removes a single trailing slash from `value`, if there is one.
 */
export function trimTrailingSlash(value: string): string {
  return value.endsWith('/') ? value.substring(0, value.lastIndexOf('/')) : value;
}
