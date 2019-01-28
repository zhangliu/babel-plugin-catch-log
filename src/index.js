export default function({types: t }) {
  return {
    visitor: {
      CatchClause(path, state) {
        const logKey = (state.opts || {}).logKey || '__elog'
        const pushNode = t.expressionStatement(t.callExpression(
          t.memberExpression(t.identifier(logKey), t.identifier('push')),
          [path.node.param]
        ))
        try {
          const callee = path.get('body').node.body[0].expression.callee || {}
          const {object = {}, property = {}} = callee 
          if (object.name === logKey && property.name === 'push') return
        } catch (e) {}

        path.get('body').unshiftContainer('body', pushNode);
      }
    }
  };
}
