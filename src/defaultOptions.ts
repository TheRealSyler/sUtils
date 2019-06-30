/**
 * This function Loops over every entry of the default options obj, if the entry is different in the options object the entry in the default obj will be set to the options entry.
 *
 * *`Note: if there are entries in the options obj that are not in the default obj the entry will be ignored.`*
 * @param options Option object to check.
 * @param defualt Default options.
 * @returns The default obj with the entries from the options obj.
 */
export function defualtOptions(options: {}, defualt: {}): {} {
  if (options) {
    for (const [key] of Object.entries(defualt)) {
      // @ts-ignore shut up ts
      if (options[key]) {
        // @ts-ignore you too
        defualt[key] = options[key];
      }
    }
  }
  return defualt;
}
