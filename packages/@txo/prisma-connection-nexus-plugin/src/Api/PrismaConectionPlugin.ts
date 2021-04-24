/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2021-04-24T09:04:01+02:00
 * @Copyright: Technology Studio
**/

import { connectionPlugin, intArg } from 'nexus'
import { NexusPlugin } from 'nexus/dist/plugin'

export const prismaConnectionPlugin = (): NexusPlugin => connectionPlugin({
  disableForwardPagination: true,
  disableBackwardPagination: true,
  additionalArgs: {
    take: intArg(),
    skip: intArg(),
  },
})
