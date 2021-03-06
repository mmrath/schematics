import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { StoreSchema } from '../../../src/factories/store/store.schema';
import { FACTORIES } from '../../../src/utils';

describe('NGXS Store', () => {
    const runner: SchematicTestRunner = new SchematicTestRunner('.', path.join(process.cwd(), 'src/collection.json'));
    it('should manage name only', () => {
        const options: StoreSchema = {
            name: 'todos',
            spec: false
        };
        const tree: UnitTestTree = runner.runSchematic(FACTORIES.STORE, options);
        const files: string[] = tree.files;
        expect(files).toEqual([
            '/src/todos/todos.actions.ts',
            '/src/todos/todos.state.ts',
        ]);
    });

    it('should manage name with spec', () => {
        const options: StoreSchema = {
            name: 'auth',
            spec: true
        };
        const tree: UnitTestTree = runner.runSchematic('store', options);
        const files: string[] = tree.files;
        expect(files).toEqual([
            '/src/auth/auth.actions.ts',
            '/src/auth/auth.state.spec.ts',
            '/src/auth/auth.state.ts',
        ]);
    });
});
