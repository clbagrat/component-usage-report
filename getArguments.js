// needed params
// target path
// import pattern
// html output
//

const args = {
  TARGET_PATH: {
    defaultValue: null,
    type: 'string',
  },
  IMPORT_PATTERN: {
    defaultValue: null,
    type: 'string'
  },
  OUTPUT: {
    defaultValue: 'html',
    type: 'oneOf',
    variants: ['html']
  }
}

export const getArguments = () => {

}
