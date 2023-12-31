# Fantom Vue 3 Modules

Library of various Vue 3 components with focus on accessibility for Web3 CAD Tools.

## Installation
```bash
npm install
```

## Demo with docs
```bash
npm run storybook
```

## Test components
```bash
npm run test
```

## Localization

Localization files can be found in `src/locales` directory.

If you want to add your own translations or overwrite existing one, do something like:
```javascript
import { translations } from 'src/mixins/translations.js';
import { myTranlsations } from 'mytranslations.js';

// add new translations (follow structure of translation object from files in the `src/locales` directory)
translations.add('cs', myTranslations);
```

If you want to change locale, do something like:
```javascript
import { translations } from 'src/mixins/translations.js';

// change locale (default is 'en')
translations.setLocale('cs');
```
