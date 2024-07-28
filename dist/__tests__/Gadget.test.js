"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Gadget_1 = __importDefault(require("../domain/Gadget"));
test('should create a Gadget instance with correct properties', () => {
    const gadget = new Gadget_1.default(1, 'iPhone', 1000, 'iPhone 12', 'Apple');
    expect(gadget.id).toBe(1);
    expect(gadget.name).toBe('iPhone');
    expect(gadget.prise).toBe(1000);
    expect(gadget.model).toBe('iPhone 12');
    expect(gadget.manufacturer).toBe('Apple');
});
//# sourceMappingURL=Gadget.test.js.map