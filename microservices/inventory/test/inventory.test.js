
const supertest = require('supertest');
const { describe } = require('../models/Inventory');

const client = supertest(require('../app'));

beforeEach(async () => {
  sequelize.constructor._cls = new Map();
  sequelize.constructor._cls.set("transaction", await sequelize.transaction());
});

afterEach(async () => {
  await sequelize.constructor._cls.get("transaction").rollback();
  sequelize.constructor._cls.delete("transaction");
});

afterAll(async () => {
  await sequelize.close();
});
 
describe("inventory", () => {
  it("", async ()=>{
  // Given

  // when 
  // then 

  })
})

