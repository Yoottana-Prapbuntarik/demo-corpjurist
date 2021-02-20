export interface ListViewItem {
	readonly imagePath: string;
	readonly keyTitle: string;
	readonly keyDescription: string;
}

export interface ListViewPresenter {
	readonly keyHeader: string;
	readonly listViewItems: ListViewItem[];
}
