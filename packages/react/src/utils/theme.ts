export type ColorSchema =
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'cyan'
  | 'teal'

const colorSchema: Record<
  ColorSchema,
  [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ]
> = {
  gray: [
    '#f9fafb',
    '#f3f4f6',
    '#e5e7eb',
    '#d1d5db',
    '#9ca3af',
    '#6b7280',
    '#4b5563',
    '#374151',
    '#1f2937',
    '#111827',
    '#030712',
  ],
  red: [
    '#fef2f2',
    '#fee2e2',
    '#fecaca',
    '#fca5a5',
    '#f87171',
    '#ef4444',
    '#dc2626',
    '#b91c1c',
    '#991b1b',
    '#7f1d1d',
    '#450a0a',
  ],
  orange: [
    '#fff7ed',
    '#ffedd5',
    '#fed7aa',
    '#fdba74',
    '#fb923c',
    '#f97316',
    '#ea580c',
    '#c2410c',
    '#9a3412',
    '#7c2d12',
    '#431407',
  ],
  yellow: [
    '#fefce8',
    '#fef9c3',
    '#fef08a',
    '#fde047',
    '#facc15',
    '#eab308',
    '#ca8a04',
    '#a16207',
    '#854d0e',
    '#713f12',
    '#422006',
  ],
  green: [
    '#f0fdf4',
    '#dcfce7',
    '#bbf7d0',
    '#86efac',
    '#4ade80',
    '#22c55e',
    '#16a34a',
    '#15803d',
    '#166534',
    '#14532d',
    '#052e16',
  ],
  blue: [
    '#eff6ff',
    '#dbeafe',
    '#bfdbfe',
    '#93c5fd',
    '#60a5fa',
    '#3b82f6',
    '#2563eb',
    '#1d4ed8',
    '#1e40af',
    '#1e3a8a',
    '#172554',
  ],
  indigo: [
    '#eef2ff',
    '#e0e7ff',
    '#c7d2fe',
    '#a5b4fc',
    '#818cf8',
    '#6366f1',
    '#4f46e5',
    '#4338ca',
    '#3730a3',
    '#312e81',
    '#1e1b4b',
  ],
  purple: [
    '#faf5ff',
    '#f3e8ff',
    '#e9d5ff',
    '#d8b4fe',
    '#c084fc',
    '#a855f7',
    '#9333ea',
    '#7e22ce',
    '#6b21a8',
    '#581c87',
    '#3b0764',
  ],
  pink: [
    '#fdf2f8',
    '#fce7f3',
    '#fbcfe8',
    '#f9a8d4',
    '#f472b6',
    '#ec4899',
    '#db2777',
    '#be185d',
    '#9d174d',
    '#831843',
    '#500724',
  ],
  cyan: [
    '#ecfeff',
    '#cffafe',
    '#a5f3fc',
    '#67e8f9',
    '#22d3ee',
    '#06b6d4',
    '#0891b2',
    '#0e7490',
    '#155e75',
    '#164e63',
    '#083344',
  ],
  teal: [
    '#f0fdfa',
    '#ccfbf1',
    '#99f6e4',
    '#5eead4',
    '#2dd4bf',
    '#14b8a6',
    '#0d9488',
    '#0f766e',
    '#115e59',
    '#134e4a',
    '#042f2e',
  ],
}

const transitionProperty = {
  common:
    'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
  color:
    'color, background-color, border-color, text-decoration-color, fill, stroke',
}

const transitionDuration = {
  fastest: '75ms',
  faster: '100ms',
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
  slower: '500ms',
  slowest: '700ms',
}

export const getCssVariable = (
  property: 'transition-property-common' | 'transition-duration-normal'
) => {
  return `var(--cy-${property})`
}

export const generateCssVariables = () => {
  Object.keys(colorSchema).forEach((key) => {
    const colors = colorSchema[key as keyof typeof colorSchema]
    colors.forEach((color, index) => {
      document.documentElement.style.setProperty(
        `--cy-colors-${key}-${index === 0 ? 50 : index * 100}`,
        color
      )
    })
  })

  Object.keys(transitionProperty).forEach((key) => {
    document.documentElement.style.setProperty(
      `--cy-transition-property-${key}`,
      transitionProperty[key as keyof typeof transitionProperty]
    )
  })

  Object.keys(transitionDuration).forEach((key) => {
    document.documentElement.style.setProperty(
      `--cy-transition-duration-${key}`,
      transitionDuration[key as keyof typeof transitionDuration]
    )
  })
}
