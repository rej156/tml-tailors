import {loader, CSS, extractCSS, injectCSS} from 'sitegen/config'
import {page, collection} from 'sitegen/routing'
import autoprefixer from 'autoprefixer'

export function configure({env}) {
  let deployCSS = env.development ? injectCSS : extractCSS;
  // We need to minimize both for production and content because of inlineCSS
  // option and content uses its own build to inline bundle.css.
  let minimize = env.production || env.content;
  let CSSModule = CSS({modules: true, minimize});
  let CSSComponent = loader(require.resolve('react-css-components/webpack'));
  return {
    globalLoaders: {
      '**/*.css': CSSComponent({loadCSS: deployCSS(CSSModule, 'postcss-loader')}),
    },

    postcss() {
      return [
        require('lost'),
        require('postcss-include')(),
        require('postcss-simple-vars'),
        require('postcss-url')(),
        require('postcss-responsive-type')(),
        require('postcss-cssnext')({ browsers: ['iOS >= 7', 'Android >= 4', 'Chrome >= 43'] }),
      ]
    },
  };
}

// export let url = loader(require.resolve('url-loader'));
// export let img = url({limit: 10000});

// export function configure({env}) {
//   let deployCSS = env.development ? injectCSS : extractCSS
//   return {
//     globalLoaders: {
//       '**/*.css': deployCSS(CSS, 'postcss-loader'),
//       '**/*.png': img,
//       '**/*.jpg': img,
//       '**/*.jpeg': img,
//       '**/*.gif': img,
//       '**/*.ico': img,
//     },

//   }
// }

export let route = page('./components/Site/Site.js', undefined, {
  index: page('./components/Homepage/Homepage.js'),
  about: page('./components/About/About.js'),
  alterations: page('./pages/alterations.md'),
  contact: page('./components/Contact/Contact.js')
  // portfolio: page('./pages/portfolio.md'),
  // clients: page('./pages/clients.md'),
})
