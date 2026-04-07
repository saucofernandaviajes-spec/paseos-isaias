
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "tertiary-container": "#d5ad00",
                      "on-primary-fixed": "#2a1700",
                      "surface": "#fbf9f5",
                      "error-container": "#ffdad6",
                      "on-error-container": "#93000a",
                      "tertiary": "#735c00",
                      "surface-container-highest": "#e4e2de",
                      "surface-container": "#efeeea",
                      "background": "#fbf9f5",
                      "on-tertiary": "#ffffff",
                      "primary-fixed": "#ffddb8",
                      "tertiary-fixed": "#ffe083",
                      "error": "#ba1a1a",
                      "on-tertiary-container": "#534200",
                      "on-surface": "#1b1c1a",
                      "on-primary-container": "#613b00",
                      "on-secondary": "#ffffff",
                      "on-secondary-fixed-variant": "#264191",
                      "secondary-container": "#8fa7fe",
                      "surface-variant": "#e4e2de",
                      "surface-container-high": "#eae8e4",
                      "outline-variant": "#d8c3ad",
                      "tertiary-fixed-dim": "#eec200",
                      "surface-tint": "#855300",
                      "on-surface-variant": "#534434",
                      "on-secondary-container": "#1d3989",
                      "primary-container": "#f59e0b",
                      "surface-dim": "#dbdad6",
                      "surface-container-lowest": "#ffffff",
                      "inverse-primary": "#ffb95f",
                      "primary": "#855300",
                      "surface-container-low": "#f5f3ef",
                      "surface-bright": "#fbf9f5",
                      "inverse-surface": "#30312e",
                      "primary-fixed-dim": "#ffb95f",
                      "on-tertiary-fixed-variant": "#574500",
                      "secondary": "#4059aa",
                      "on-primary-fixed-variant": "#653e00",
                      "secondary-fixed": "#dce1ff",
                      "on-secondary-fixed": "#00164e",
                      "on-background": "#1b1c1a",
                      "inverse-on-surface": "#f2f0ed",
                      "secondary-fixed-dim": "#b6c4ff",
                      "on-tertiary-fixed": "#231b00",
                      "on-error": "#ffffff",
                      "outline": "#867461",
                      "on-primary": "#ffffff"
              },
              "borderRadius": {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "2xl": "1.5rem",
                      "full": "9999px"
              },
              "fontFamily": {
                      "headline": ["Plus Jakarta Sans"],
                      "body": ["Be Vietnam Pro"],
                      "label": ["Plus Jakarta Sans"]
              },
              "animation": {
                'pulse-gentle': 'pulse-gentle 2s infinite',
              },
              "keyframes": {
                'pulse-gentle': {
                  '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.4)' },
                  '50%': { transform: 'scale(1.05)', boxShadow: '0 0 0 10px rgba(37, 211, 102, 0)' },
                }
              }
            },
          },
        }
