export default function({types: t }) {
  return {
    visitor: {
      CatchClause(path, state) {
        const logKey = (state.opts || {}).logKey || '__elog'
        const pushNode = t.expressionStatement(t.callExpression(
          t.memberExpression(t.identifier(logKey), t.identifier('push')),
          [path.node.param]
        ))
        path.get('body').unshiftContainer('body', pushNode);
      }
    }
  };
}
