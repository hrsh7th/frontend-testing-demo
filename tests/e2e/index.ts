import { rmSync } from 'node:fs'
import { basename, dirname, join } from 'node:path'
import { snapshot } from 'msw-snapshot'
import { test as base, expect } from 'next/experimental/testmode/playwright/msw'

const test = base.extend<{
  snapshot: () => void;
}>({
  snapshot: async ({ msw }, use) => {
    const state = { count: 0 }
    use(() => {
      const updateSnapshot = base.info().config.updateSnapshots !== 'none'
      const snapshotDir = join(
        dirname(test.info().file),
        '__snapshots__',
        basename(test.info().file),
        // TODO: Use `filenamify` after solving esm import problem.
        test.info().title.replace(/\W/g, '_')
      )
      if (updateSnapshot) {
        rmSync(snapshotDir, {
          recursive: true,
          force: true,
        })
      }
      msw.use(
        snapshot({
          updateSnapshot: updateSnapshot,
          snapshotDir: snapshotDir,
          createSnapshotName: async () => {
            return state.count++
          },
        })
      )
    })
  },
})

export { test, expect }
