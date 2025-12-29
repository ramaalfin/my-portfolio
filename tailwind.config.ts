import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
	prefix: "",
	theme: {
    	container: {
    		center: true,
    		padding: '2rem',
    		screens: {
    			'2xl': '1400px'
    		}
    	},
    	extend: {
    		fontFamily: {
    			serif: [
    				'Instrument Serif',
    				'Georgia',
    				'serif'
    			],
    			sans: [
    				'Inter',
    				'system-ui',
    				'sans-serif'
    			],
    			mono: [
    				'JetBrains Mono',
    				'monospace'
    			]
    		},
    		colors: {
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))',
    				glow: 'hsl(var(--primary-glow))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))',
    				glow: 'hsl(var(--accent-glow))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			forest: {
    				DEFAULT: 'hsl(var(--forest))',
    				foreground: 'hsl(var(--forest-foreground))'
    			},
    			sunset: {
    				DEFAULT: 'hsl(var(--sunset))',
    				foreground: 'hsl(var(--sunset-foreground))'
    			},
    			cream: {
    				DEFAULT: 'hsl(var(--cream))',
    				foreground: 'hsl(var(--cream-foreground))'
    			},
    			sand: {
    				DEFAULT: 'hsl(var(--sand))',
    				foreground: 'hsl(var(--sand-foreground))'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)',
    			'2xl': '1rem',
    			'3xl': '1.5rem',
    			'4xl': '2rem'
    		},
    		boxShadow: {
    			glass: '0 8px 32px hsl(var(--foreground) / 0.08)',
    			'glass-lg': '0 16px 48px hsl(var(--foreground) / 0.12)',
    			glow: '0 0 40px hsl(var(--primary-glow) / 0.3)',
    			'glow-lg': '0 0 60px hsl(var(--primary-glow) / 0.4)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			'fade-in': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(20px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			'fade-in-up': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(40px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			'fade-in-down': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(-20px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			'fade-in-left': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateX(-40px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateX(0)'
    				}
    			},
    			'fade-in-right': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateX(40px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateX(0)'
    				}
    			},
    			'scale-in': {
    				'0%': {
    					opacity: '0',
    					transform: 'scale(0.9)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'scale(1)'
    				}
    			},
    			float: {
    				'0%, 100%': {
    					transform: 'translateY(0px)'
    				},
    				'50%': {
    					transform: 'translateY(-20px)'
    				}
    			},
    			'float-slow': {
    				'0%, 100%': {
    					transform: 'translateY(0px)'
    				},
    				'50%': {
    					transform: 'translateY(-10px)'
    				}
    			},
    			shimmer: {
    				'0%': {
    					backgroundPosition: '-200% 0'
    				},
    				'100%': {
    					backgroundPosition: '200% 0'
    				}
    			},
    			'gradient-shift': {
    				'0%': {
    					backgroundPosition: '0% 50%'
    				},
    				'50%': {
    					backgroundPosition: '100% 50%'
    				},
    				'100%': {
    					backgroundPosition: '0% 50%'
    				}
    			},
    			'slide-up': {
    				'0%': {
    					transform: 'translateY(100%)',
    					opacity: '0'
    				},
    				'100%': {
    					transform: 'translateY(0)',
    					opacity: '1'
    				}
    			},
    			'slide-down': {
    				'0%': {
    					transform: 'translateY(-100%)',
    					opacity: '0'
    				},
    				'100%': {
    					transform: 'translateY(0)',
    					opacity: '1'
    				}
    			},
    			'text-reveal': {
    				'0%': {
    					clipPath: 'inset(0 100% 0 0)'
    				},
    				'100%': {
    					clipPath: 'inset(0 0% 0 0)'
    				}
    			},
    			'letter-spacing': {
    				'0%': {
    					letterSpacing: '0em'
    				},
    				'100%': {
    					letterSpacing: '0.1em'
    				}
    			},
    			pulse: {
    				'0%, 100%': {
    					opacity: '1'
    				},
    				'50%': {
    					opacity: '0.5'
    				}
    			},
    			'bounce-subtle': {
    				'0%, 100%': {
    					transform: 'translateY(0)'
    				},
    				'50%': {
    					transform: 'translateY(-5px)'
    				}
    			},
    			wiggle: {
    				'0%, 100%': {
    					transform: 'rotate(-1deg)'
    				},
    				'50%': {
    					transform: 'rotate(1deg)'
    				}
    			},
    			'spin-slow': {
    				'0%': {
    					transform: 'rotate(0deg)'
    				},
    				'100%': {
    					transform: 'rotate(360deg)'
    				}
    			},
    			blob: {
    				'0%': {
    					transform: 'translate(0px, 0px) scale(1)'
    				},
    				'33%': {
    					transform: 'translate(30px, -50px) scale(1.1)'
    				},
    				'66%': {
    					transform: 'translate(-20px, 20px) scale(0.9)'
    				},
    				'100%': {
    					transform: 'translate(0px, 0px) scale(1)'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'fade-in': 'fade-in 0.6s ease-out forwards',
    			'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
    			'fade-in-down': 'fade-in-down 0.6s ease-out forwards',
    			'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
    			'fade-in-right': 'fade-in-right 0.6s ease-out forwards',
    			'scale-in': 'scale-in 0.5s ease-out forwards',
    			float: 'float 6s ease-in-out infinite',
    			'float-slow': 'float-slow 8s ease-in-out infinite',
    			shimmer: 'shimmer 2s linear infinite',
    			'gradient-shift': 'gradient-shift 15s ease infinite',
    			'slide-up': 'slide-up 0.6s ease-out forwards',
    			'slide-down': 'slide-down 0.6s ease-out forwards',
    			'text-reveal': 'text-reveal 1s ease-out forwards',
    			'letter-spacing': 'letter-spacing 1s ease-out forwards',
    			pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    			'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
    			wiggle: 'wiggle 2s ease-in-out infinite',
    			'spin-slow': 'spin-slow 20s linear infinite',
    			blob: 'blob 7s infinite'
    		},
    		backgroundImage: {
    			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
    		},
    		transitionTimingFunction: {
    			smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
    			bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    		},
    		transitionDuration: {
    			'400': '400ms',
    			'600': '600ms',
    			'800': '800ms',
    			'900': '900ms'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;