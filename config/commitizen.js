module.exports = {
  types: [
    { value: "feat", name: "feat:     A new feature" },
    { value: "fix", name: "fix:      A bug fix" },
    {
      value: "style",
      name: "style:    Changes that do not affect the meaning of the code"
    },
    {
      value: "refactor",
      name:
        "refactor: A code change that neither fixes a bug nor adds a feature"
    },
    {
      value: "chore",
      name: "chore:    Changes to the build process or tooling"
    },
    { value: "perf", name: "perf:     A performance improvement" },
    { value: "docs", name: "docs:     Documentation only changes" }
  ],
  scopes: ["repo", "component"],
  allowBreakingChanges: ["feat", "fix"]
};
