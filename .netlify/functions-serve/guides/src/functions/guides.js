var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });

// functions/guides.ts
__markAsModule(exports);
exports.handler = async (event, context) => {
  const guides = [
    { title: "Beat all Zelda Bosses Like a Boss", author: "mario" },
    { title: "Mario Kart Shortcuts You Never Knew Existed", author: "luigi" },
    { title: "Ultimate Street Fighter Guide", author: "chun-li" }
  ];
  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guides)
    };
  }
  return {
    statusCode: 401,
    body: JSON.stringify({ mssg: "ah ah ah, you must be logged into see this" })
  };
};
//# sourceMappingURL=guides.js.map
