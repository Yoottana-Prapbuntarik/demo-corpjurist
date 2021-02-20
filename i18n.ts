const NextI18Next = require('next-i18next/dist/commonjs').default;

const NextI18NextInstance = new NextI18Next({
	defaultLanguage: 'en',
	otherLanguages: [ 'th' ],
	strictMode: false
});

module.exports = NextI18NextInstance;

export default NextI18NextInstance;

export const { appWithTranslation, withTranslation, i18n, Link } = NextI18NextInstance;
