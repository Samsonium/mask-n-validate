import {describe, it, vi, expect} from 'vitest';
import rVar from './rVar';

describe('rVar', () => {
    it('should return initial value', () => {
        const var1 = rVar(123);
        expect(var1.value).toBe(123);
    });

    it('should update value', () => {
        const var1 = rVar(123);
        var1.subscribe(value => {
            expect(value).toBe(456);
        });
        var1.value = 456;
    });

    it('should call subscribers on value update', () => {
        const var1 = rVar(123);
        const spy = vi.fn();
        var1.subscribe(spy);
        var1.value = 456;
        expect(spy).toHaveBeenCalledWith(456);
    });
});
