/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2021-04-24T09:04:01+02:00
 * @Copyright: Technology Studio
**/

import type { GraphQLResolveInfo } from 'graphql'
import { connectionPlugin, intArg } from 'nexus'
import { NexusPlugin } from 'nexus/dist/plugin'

const validationArgs = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  args: {
    skip?: number,
    take?: number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cursor?: Record<string, any>,
  } = {},
  info: GraphQLResolveInfo,
): void => {
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  if (!(args.skip || args.skip === 0) && !args.cursor) {
    throw new Error(`The ${info.parentType.name}.${info.fieldName} connection field requires a "skip" or "cursor" argument`)
  }
  if (args.skip && args.cursor) {
    throw new Error(`The ${info.parentType.name}.${info.fieldName} connection field requires a "skip" or "cursor" argument, not both`)
  }
}

export const prismaConnectionPlugin = (): NexusPlugin => connectionPlugin({
  disableForwardPagination: true,
  disableBackwardPagination: true,
  includeNodesField: true,
  validateArgs: validationArgs,
  additionalArgs: {
    take: intArg(),
    skip: intArg(),
  },
})
