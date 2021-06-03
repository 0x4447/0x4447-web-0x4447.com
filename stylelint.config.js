module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "function",
          "if",
          "each",
          "for",
          "include",
          "mixin",
          "return",
          "extend",
          "use",
          "forward",
        ],
      },
    ],
    "unit-allowed-list": ["em", "rem", "%", "px", "vw", "vh", "s", "deg", "fr"],
  },
};
