/**
 * cycle through each keys and throw error if the specified value is undefined
 *
 */
export function mandatoryEnvVariables<
  T extends Record<string, string | undefined>,
>(values: T): { [K in keyof T]: NonNullable<T[K]> } {
  return Object.keys(values).reduce(
    (prev, key) => {
      if (!values[key]) throw Error(`Missing config: ${key}`);

      return {
        ...prev,
        [key]: values[key]!,
      };
    },
    {} as { [K in keyof T]: NonNullable<T[K]> },
  );
}

const config = {
  basepath: process.env.NEXT_PUBLIC_BASEPATH || "",

  giscusRepo: process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}`,
  giscusRepoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID,
  giscusCategory: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
  giscusCategoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,

  gtmId: process.env.NEXT_PUBLIC_GTM_ID,
};

export default config;
