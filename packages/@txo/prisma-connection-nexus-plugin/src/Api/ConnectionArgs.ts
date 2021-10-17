/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2021-10-17T14:10:71+02:00
 * @Copyright: Technology Studio
**/

import { addOne } from './AddOne'

export const connectionArgs = <ARGS extends { take?: number | null }>(args: ARGS): ARGS => ({
  ...args,
  take: addOne(args.take),
})
