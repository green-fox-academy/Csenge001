"use strict"


const request = require("supertest")
const { expect } = require("chai")
const app = require("../index.js")


describe("API tests", () => {
    describe("GET /yondu tests", () => {
        it("should return HTTP 200 when parameters are given", done => {
            request(app)
                .get("/yondu?distance=100&time=10")
                .expect(200)
                .end(function(err, res) {
                    done()
                    if (err) throw err
                }) 
        })

        it("should return the correct values in json when parameters are given", done => {
            request(app)
                .get("/yondu?distance=100&time=10")
                .expect("Content-Type", /json/)
                .end(function(err, res) {
                    expect(res.body.distance).to.be.equal(100)
                    expect(res.body.time).to.be.equal(10)
                    expect(res.body.speed).to.be.equal(100 / 10)
                    done()
                    if (err) throw err
                }) 
        })

        it("should return HTTP 400 when parameters are not given", done => {
            request(app)
                .get("/yondu")
                .expect(400)
                .end(function(err, res) {
                    done()
                    if (err) throw err
                }) 
        })

        it("should return the expected json error message when parameters are not given", done => {
            request(app)
                .get("/yondu")
                .expect("Content-Type", /json/)
                .end(function(err, res) {
                    expect(res.body.error).to.be.equal("Please provide distance and time!")
                    done()
                    if (err) throw err
                }) 
        })

    })

})