const plugins = [];
module.exports = {
  plugins: plugins,
  presets: [
    [
      "@vue/app",
      {
        useBuiltIns: "entry",
        polyfills: ["es6.promise", "es6.symbol"]
      }
    ]
  ],
  comments: false
};
