import { TestCase, Expect } from "alsatian";
import add from "../src/add"

export class AddTests {

    @TestCase(1, 2)
    @TestCase(5, 10)
    @TestCase(8, 3)
    public shouldNotThrow(a: number, b: number) {
        Expect(() => add(a, b)).not.toThrow();
    }

    @TestCase(1, 2, 3)
    @TestCase(5, 5, 10)
    @TestCase(7, 12, 19)
    public shouldAddCorrectly(a: number, b: number, expected: number) {
        Expect(add(a, b)).toBe(expected);
    }

}
