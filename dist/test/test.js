"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var chai_1 = require("chai");

var lib_1 = require("../lib");

var lib_2 = require("../lib");

var lib_3 = require("../lib");

var lib_4 = require("../lib");

var lib_5 = require("../lib");

var lib_6 = require("../lib");

var lib_7 = require("../lib");

var lib_8 = require("../lib");

var lib_9 = require("../lib");

var lib_10 = require("../lib");

require("mocha");

describe("after", function () {
  it("should exist", function () {
    chai_1.expect(lib_1.after).to.not.be.an("undefined");
  });
  it("should be a function", function () {
    chai_1.expect(lib_1.after).to.be.a("function");
  });
  it("should have a decorator", function () {
    chai_1.expect(lib_1.after.decorator).to.be.a("function");
  });
});
describe("before", function () {
  it("should exist", function () {
    chai_1.expect(lib_2.before).to.not.be.an("undefined");
  });
  it("should be a function", function () {
    chai_1.expect(lib_2.before).to.be.a("function");
  });
  it("should have a decorator", function () {
    chai_1.expect(lib_2.before.decorator).to.be.a("function");
  });
});
describe("buffered", function () {
  it("should exist", function () {
    chai_1.expect(lib_3.buffered).to.not.be.an("undefined");
  });
  it("should be a function", function () {
    chai_1.expect(lib_3.buffered).to.be.a("function");
  });
  it("should have a decorator", function () {
    chai_1.expect(lib_3.buffered.decorator).to.be.a("function");
  });
});
describe("array2tree", function () {
  it("should exist", function () {
    chai_1.expect(lib_4.array2tree).to.not.be.an("undefined");
  });
  it("should be a function", function () {
    chai_1.expect(lib_4.array2tree).to.be.a("function");
  });
});
describe("object2tree", function () {
  it("should exist", function () {
    chai_1.expect(lib_4.object2tree).to.not.be.an("undefined");
  });
  it("should be a function", function () {
    chai_1.expect(lib_4.object2tree).to.be.a("function");
  });
});
describe("partial", function () {
  it("should exist", function () {
    chai_1.expect(lib_5.partial).to.not.be.an("undefined");
  });
  it("should be a function", function () {
    chai_1.expect(lib_5.partial).to.be.a("function");
  });
});
describe("Function.partial", function () {
  it("should exist", function () {
    chai_1.expect(Function.partial).to.not.be.an("undefined");
  });
  it("should be a function", function () {
    chai_1.expect(Function.partial).to.be.a("function");
  });
});
describe("random", function () {
  it("should exist", function () {
    chai_1.expect(lib_7.random).to.not.be.an("undefined");
  });
  it("should be a function", function () {
    chai_1.expect(lib_7.random).to.be.a("function");
  });
});
describe("queued", function () {
  it("should exist", function () {
    chai_1.expect(lib_6.queued).to.not.be.an("undefined");
  });
  it("should be a function", function () {
    chai_1.expect(lib_6.queued).to.be.a("function");
  });
});
describe("queued.auto", function () {
  it("should exist", function () {
    chai_1.expect(lib_6.queued.auto).to.not.be.an("undefined");
  });
  it("should be a function", function () {
    chai_1.expect(lib_6.queued.auto).to.be.a("function");
  });
});
describe("String.random", function () {
  it("should exist", function () {
    chai_1.expect(String.random).to.not.be.an("undefined");
  });
  it("should be a function", function () {
    chai_1.expect(String.random).to.be.a("function");
  });
});
describe("trace", function () {
  it("should exist", function () {
    chai_1.expect(lib_8.trace).to.not.be.an("undefined");
  });
  it("should be a decorator", function () {
    chai_1.expect(lib_8.trace).to.be.a("function");
  });
});
describe("traceable", function () {
  it("should exist", function () {
    chai_1.expect(lib_9.traceable).to.not.be.an("undefined");
  });
  it("should be a decorator", function () {
    chai_1.expect(lib_9.traceable).to.be.a("function");
  });
});
describe("tree2array", function () {
  it("should exist", function () {
    chai_1.expect(lib_10.tree2array).to.not.be.an("undefined");
  });
  it("should be a function", function () {
    chai_1.expect(lib_10.tree2array).to.be.a("function");
  });
});
describe("tree2object", function () {
  it("should exist", function () {
    chai_1.expect(lib_10.tree2object).to.not.be.an("undefined");
  });
  it("should be a function", function () {
    chai_1.expect(lib_10.tree2object).to.be.a("function");
  });
});
//# sourceMappingURL=test.js.map