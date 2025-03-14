import { postgresDb } from './postgres-db';

describe('postgresDb', () => {
  it('should work', () => {
    expect(postgresDb()).toEqual('postgres-db');
  });
});
