var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });

// functions/superMario.ts
__markAsModule(exports);
exports.handler = async () => {
  console.log("function ran");
  const data = { name: "mario", age: 35, job: "plumber" };
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
//# sourceMappingURL=superMario.js.map
