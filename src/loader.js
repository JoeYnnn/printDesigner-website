function mdLoader(content) {
  return `
      const content = '${JSON.stringify(content)}'
      export default { content };
  `;
}
module.exports = mdLoader;
