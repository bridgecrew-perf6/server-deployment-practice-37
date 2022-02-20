"use strict";
const server = require("../server.js");
const supertest = require("supertest");

//faking running the server inorder to test it
const request = supertest(server.app);

//testing method
describe("testing API server", () => {
  //here the code will need time to return data so we will use async/await
  it("testing /", async() => {
    const response =  await request.get("/");
    expect(response.text).toEqual('the home route.');
    expect(response.status).toEqual(200);
  });

  it("test /data", async() => {
    const response =  await request.get("/data");
    expect(typeof response.body).toEqual('object');
    expect(response.status).toEqual(200);
  });
});
