export const SIZE_TEMPLATE = ["xs", "sm", "md", "lg", "xl"] as const
export type TemplateSize = (typeof SIZE_TEMPLATE)[number]

export const OS_TEMPLATE = {
  ubuntu: ["24.04"],
  debian: ["12"],
} as const
export type TemplateOSType = keyof typeof OS_TEMPLATE
export type TemplateOSVersion =
  (typeof OS_TEMPLATE)[keyof typeof OS_TEMPLATE][number]

export type Template<T extends TemplateOSType> = {
  name: string
  os: {
    type: T
    version: (typeof OS_TEMPLATE)[T][number]
  }
}

function capitalize(s: string) {
  return s.length === 0 ? s : s[0].toUpperCase() + s.slice(1)
}

export const VM_TEMPLATES_DERIVED: { [K in TemplateOSType]: Template<K>[] } =
  Object.fromEntries(
    (
      Object.entries(OS_TEMPLATE) as Array<
        [TemplateOSType, readonly TemplateOSVersion[]]
      >
    ).map(([type, versions]) => [
      type,
      versions.map((version) => ({
        name: `${capitalize(type)} ${version}`,
        os: { type, version },
      })),
    ]),
  ) as { [K in TemplateOSType]: Template<K>[] }

export const VM_TEMPLATES = VM_TEMPLATES_DERIVED
