"use strict"

const test = require("tape")
const request = require("supertest")
const { expect } = require("chai")
const app = require("../routes.js")



describe("API tests", () => {
    describe("GET /groot tests", () => {
        it("should return HTTP 200 when GET /groot?message=somemessage is called", done => {
            request(app)
                .get("/groot?message=somemessage")
                .expect(200)
                .end(function (err, res) {
                    done()
                    if (err) throw err
                })
        })

        it("should return JSON when GET /groot?message=somemessage is called", done => {
            request(app)
                .get("/groot?message=somemessage")
                .expect("Content-Type", /json/)
                .end(function (err, res) {
                    expect(res.body.received).to.be.equal("somemessage")
                    expect(res.body.translated).to.be.equal("I am Groot!")
                    done()
                    if (err) throw err
                })
        })
    
        it("should return HTTP 400 when GET /groot is called", done => {
            request(app)
                .get("/groot")
                .expect(400)
                .end(function (err, res) {
                    done()
                    if (err) throw err
                })
        })

        it("should return JSON error when GET /groot is called", done => {
            request(app)
                .get("/groot")
                .expect("Content-Type", /json/)
                .end(function (err, res) {
                    expect(res.body.error).to.be.equal("I am Groot!")
                    done()
                    if (err) throw err
                })
        })
    })
})
