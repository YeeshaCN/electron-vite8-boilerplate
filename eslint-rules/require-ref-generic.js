export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'require generic type for ref() calls',
      category: 'Best Practices',
      recommended: false
    },
    fixable: null,
    schema: []
  },

  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.type === 'Identifier' && node.callee.name === 'ref') {
          const typeParams = node.typeParameters || node.typeArguments
          const hasTypeParams =
            !!typeParams &&
            ((Array.isArray(typeParams.params) && typeParams.params.length > 0) ||
              (Array.isArray(typeParams) && typeParams.length > 0))

          if (!hasTypeParams) {
            // 获取第一个参数的类型名
            let argType = 'T'
            if (node.arguments && node.arguments.length > 0) {
              const arg = node.arguments[0]
              if (arg.type === 'Literal' && typeof arg.value === 'string') {
                argType = 'string'
              } else if (arg.type === 'Literal' && typeof arg.value === 'number') {
                argType = 'number'
              } else if (arg.type === 'Literal' && typeof arg.value === 'boolean') {
                argType = 'boolean'
              } else if (arg.type === 'ArrayExpression') {
                argType = 'Array<any>'
              } else if (arg.type === 'ObjectExpression') {
                argType = 'object'
              }
            }
            context.report({
              node,
              message: `ref() must include generic type parameter, e.g., ref<${argType}>(...)`
            })
          }
        }
      }
    }
  }
}
