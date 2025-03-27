import { expect } from "chai";
import { describe, it } from "mocha";
import fetch from "node-fetch";
import Ajv from "ajv";  
const ajv = new Ajv(); 

const schema_createuser = {
    type: "object",
    properties: {
        name: { type: "string" },
        job: { type: "string" },
        id: { type: "string" },
        createdAt: { type: "string" },
    },
    required: ["name", "job", "id", "createdAt"],
};

describe("API Reqresin Testing", function () {
    it("Validasi HTTP status code harus 200", async function () {
        const base_Url = await fetch("https://reqres.in");
        expect(base_Url.status).to.equal(200);
    });

    it("Create user", async function () {
        const createuser = {
            name: "testing",
            job: "leader"
        };
        
        const result = await fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify(createuser)
        });

        expect(result.status).to.equal(201);
        
        const data = await result.json();
        const validasi = ajv.compile(schema_createuser); 
        const hasil = validasi(data);

        expect(hasil, "validasi json").to.be.true;
    });
});
