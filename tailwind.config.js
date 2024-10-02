/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: "class",
   theme: {
    screens: {
      
      xsm:'300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',

      //  'mobile' : "300px  ",
       
      // 'tablet': '640px',
      // // => @media (min-width: 640px) { ... }

      // 'laptop': '1024px',
      // // => @media (min-width: 1024px) { ... }

      // 'desktop': '1280px',
      // // => @media (min-width: 1280px) { ... }
    },
    
    extend: {
      backgroundImage:{
        
        "banner-bg":"url('/src/components/imag/bannerBg.jpg')",
        "box-bg": "url(/src/components/imag/bg-box.jpg)"
      },
      fontSize: {
        '58': '58px',
        '46': '46px',
        '40': '40px',
        '32': '32px',
        '28': '28px',
        '26': '26px',
        '24': '24px',
        '21': '21px',
        '20': '20px',
        '19': '19px',
        '18': '18px',
        '16': '16px',
        '15': '15px',
        '14': '14px',
        '13': '13px',
        '12': '12px',
        '11': '11px',
        '10': '10px',
        '9': '9px',
      },

      colors: {
        white: '#FFFFFF',
        black: '#1E1E1E',
        // darkmode : "1F2937",
        primaryColor: '#001449',
        BtnColor : '#2F66B7',
        styleColor :'#012677',
        marquee : '#012677',
        darkmode : "#252525",
        darkborder : "#333333",
        success: '',
        gray: '#1E1E1E ',
        red: '#E6312A',
        lightgreen: '#34D126',
      },
      fontFamily: {
        'times-new-roman': ['Times New Roman', 'serif'],
        'arial': ['Arial', 'sans-serif'],
        'mono': ['monospace'],
        'agency': ['Agency'],
        'goudy-stout': ['Goudy Stout', 'cursive'],
        'Urdu':['Jameel Noori Nastaleeq'],
      },
      
    },
  },
  plugins: [],
};