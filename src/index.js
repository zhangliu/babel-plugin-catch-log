const _ = require('lodash')

export default function({types: t }) {
  return {
    visitor: {
      CatchClause(path, state) {
        const logKey = (state.opts || {}).logKey || '__elog'
        const name = _.get(path, 'node.param.name', '')
        if (!name) return
        const pushNode = t.expressionStatement(
          t.callExpression(
            t.memberExpression(t.identifier(logKey), t.identifier('push')),
            [path.node.param]
          )
        )
        if (hasLog(path, logKey)) return
        if (hasThrow(path)) return

        path.get('body').unshiftContainer('body', pushNode);
      }
    }
  };
}

function hasLog(path, logKey) {
  const callee = _.get(path.get('body'), 'node.body[0].expression.callee', {})
  const {object = {}, property = {}} = callee
  return object.name === logKey && property.name === 'push'
}

function hasThrow(path) {
  const nodes = _.get(path.get('body'), 'node.body', [])
  for (const node of nodes) {
    if (node.type === 'ThrowStatement') return true
  }
  return false
}