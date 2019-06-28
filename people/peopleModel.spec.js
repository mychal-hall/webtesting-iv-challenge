const db = require("../data/dbConfig.js");
const People = require("./peopleModel.js");

describe("people model", () => {
  describe("insert()", () => {
    afterEach(async () => {
      await db("people").truncate();
    });

    it("should add a person to the DB", async () => {
      await People.insert({ name: "Batman" });

      const people = await db("people");

      expect(people).toHaveLength(1);
      expect(people[0].name).toBe("Batman");
    });
  });
});
