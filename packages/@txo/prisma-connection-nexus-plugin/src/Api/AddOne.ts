/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2021-04-24T10:04:37+02:00
 * @Copyright: Technology Studio
**/

export const addOne = (a: number | undefined | null): number | undefined => {
  return a != null ? a + 1 : undefined
}
