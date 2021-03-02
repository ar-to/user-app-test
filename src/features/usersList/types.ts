export const groupsRef: string[] = ['marketing', 'engineering', 'admin'];
export const featuresRef: string[] = ['read-only-lists', 'read-only-forms', 'write-forms'];

export interface User {
  id: number;
  name: string;
  groups?: string[] | undefined;
  status: boolean;
  features?: string[] | undefined;
}
