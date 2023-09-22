import report from '../../tests/vrt/json-report/report.json'

report.suites.forEach(suite => {
  suite.suites.forEach(suite => {
    const isOk = suite.specs.every(spec => spec.ok)
    if (!isOk) {
      console.log(`- ${suite.title}`)
      suite.specs.forEach(spec => {
        if (!spec.ok) {
          const isNotExists = spec.tests.some(test => {
            return test.results.some(result => result.error.message.startsWith('A snapshot doesn\'t exist'))
          })
          console.log(`    - [${spec.title}](${process.env.REPORT_URL}?testId=${spec.id}&run=1)${isNotExists ? ' :sparkles:' : ''}`)
        }
      })
    }
  })
})
