import type { MyType } from '../types/MyType';

export class MyCls implements MyType {
    getString(): string {
        return 'Hello world!';
    }
}
