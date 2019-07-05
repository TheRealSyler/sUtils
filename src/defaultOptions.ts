/**
 * This function Loops over every entry of the default options obj, if the entry is different in the options object the entry in the default obj will be set to the options entry.
 *
 * *`Note: if the entry is not in the default obj the entry will be ignored.`*
 * @param options Option object to check.
 * @param default Default options.
 * @returns The default obj with the entries from the options obj.
 */
export function defaultOptions(options: {}, defaultOptions: {}): any {
  if (options) {
    for (const [key] of Object.entries(defaultOptions)) {
      // @ts-ignore shut up ts
      if (options[key]) {
        // @ts-ignore you too
        defaultOptions[key] = options[key];
      }
    }
  }
  return defaultOptions;
}
