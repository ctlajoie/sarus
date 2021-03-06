// File Dependencies
import { serialize, deserialize } from "../../src/lib/dataTransformer";

describe("#serialize", () => {
  describe("when passed a javascript variable", () => {
    it("should serialize the javascript variable into a JSON string", () => {
      const payload: object = { name: "Paul Jensen" };
      const serializedPayload: string = serialize(payload);
      expect(serializedPayload).toEqual(JSON.stringify(payload));
    });
  });
});

describe("#deserialize", () => {
  describe("when passed a JSON-stringified piece of data", () => {
    it("should return the deserialized data", () => {
      const payload: object = { name: "Paul Jensen" };
      const serialisedPayload: string = serialize(payload);
      expect(deserialize(serialisedPayload)).toEqual(payload);
    });
  });
  describe("when passed null", () => {
    it("should return null", () => {
      expect(deserialize(null)).toEqual(null);
    });
  });
});
