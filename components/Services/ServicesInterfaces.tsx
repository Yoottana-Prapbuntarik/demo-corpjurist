export interface ServiceItem {
	readonly keyTitle: string;
	readonly imagePath: string;
	readonly style: string;
}

export interface ServicesPresenter {
	readonly keyHeader: string;
	readonly serviceItems: ServiceItem[];
}
