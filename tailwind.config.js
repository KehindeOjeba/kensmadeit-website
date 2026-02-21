/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
  	container: {
  		center: 'true',
  		padding: '15px'
  	},
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '960px',
  		xl: '1280px'
  	},
  	fontFamily: {
  		primary: 'var(--font-poppins)'
  	},
  	extend: {
  		colors: {
  			background: 'radial-gradient(circle, rgba(229,113,64,1) 28%, rgba(229,113,64,0.9585959383753502) 45%, rgba(229,83,64,1) 83%)',
  			dark: '#000C07',
  			light: '#FFFFFF',
  			bgSoft: '#FE9801',
  			veryDark: '#000000',
  			texts: {
  				DEFAULT: '#000000',
  				hover: '#00e187',
  				textWhite: '#FEFEFE',
  				textSoft: '#232323'
  			}
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
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		background: {
  			lightCircle: 'background: repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 50px);'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
  // theme: {
  //   extend: {
  //     colors: {
  //       background: "var(--background)",
  //       foreground: "var(--foreground)",
  //     },
  //   },
  // },
  // plugins: [],

  // --bg: radial-gradient(circle, rgba(229,113,64,1) 28%, rgba(229,113,64,0.9585959383753502) 45%, rgba(229,83,64,1) 83%);
  // --bgSoft: #FE9801;
  // --text: #000000;
  // --textWhite:#FEFEFE ;
  // --textSoft: #232323;
  // --btn: #000000;
};
