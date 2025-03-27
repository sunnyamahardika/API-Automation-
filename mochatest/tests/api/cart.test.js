import { expect } from "chai";
import { describe, it } from "mocha";
import fetch from "node-fetch";
import Ajv from "ajv";
import schema_createcart from "/Users/sunnyamahardika/mochatest/tests/schema/dummySchema.js";

describe("API Dummyjson Testing", function () {
    this.timeout(20000); // 

    it("Validasi HTTP status code harus 200", async function () {
        const base_Url = await fetch("https://dummyjson.com");
        expect(base_Url.status).to.equal(200);
    });

    it("Create cart", async function () {
        const createcart = {
            "userId": 80,
            "products": [
                {
                    "id": 78,
                    "quantity": 1
                }
            ]
        };

        const result = await fetch("https://dummyjson.com/carts/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(createcart)
        });

        expect(result.status).to.equal(201); 

        const data = await result.json();

        // ✅ Inisialisasi AJV dengan benar
        const ajv = new Ajv();
        const validate = ajv.compile(schema_createcart);
        const valid = validate(data);

        expect(valid, "validasi json").to.be.true;
    });
});
