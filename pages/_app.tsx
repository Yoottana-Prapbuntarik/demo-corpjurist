import React from 'react';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import initialStore from '../store/store';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { appWithTranslation } from '../i18n';

import '../public/styles/css/theme.min.scss';

interface Props {
	store: Store;
}

class MainApplication extends App<Props> {

	render() {
		const { Component, pageProps, store } = this.props;
		return (
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		);
	}
}

export default withRedux(initialStore)(appWithTranslation(MainApplication));
