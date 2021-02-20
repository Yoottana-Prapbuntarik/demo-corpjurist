export enum SubscribeAction {
	SendEmail_Success = 'SendEnail_Success',
	SendEmail_Failed = 'SendEmail_Failed'
}

export const subscribe: any = (email: any) => {
	if (email) {
		return {
			type: SubscribeAction.SendEmail_Success,
			keyMessage: 'isFooterSubscrbe'
		};
	} else {
		return {
			type: SubscribeAction.SendEmail_Failed,
			keyMessage: 'footerSubscrbe'
		};
	}
};
