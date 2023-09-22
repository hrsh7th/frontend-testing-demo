import { expect, test } from '@playwright/test'
import stories from '../../storybook-static/stories.json'

for (const story of Object.values(stories.stories)) {
  if (story.tags?.includes('autodocs')) {
    continue
  }
  test.describe(story.importPath, () => {
    test(story.name, async ({ page }) => {
      await page.goto(`/iframe.html?id=${story.id}`)
      await page.waitForSelector('#storybook-root:not([hidden="true"])')
      await expect(page).toHaveScreenshot(`${story.id}.png`, {
        maxDiffPixelRatio: 0,
        maxDiffPixels: 0,
        threshold: 0,
      })
    })
  })
}

