import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20260610_233039_add_subprocessors_collection from './20260610_233039_add_subprocessors_collection';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20260610_233039_add_subprocessors_collection.up,
    down: migration_20260610_233039_add_subprocessors_collection.down,
    name: '20260610_233039_add_subprocessors_collection'
  },
];
