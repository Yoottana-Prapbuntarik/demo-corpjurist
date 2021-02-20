export interface NavigationItem {
	readonly keyTitle: string;
	readonly routePath?: string;
}

export interface NavigationPresenter {
	readonly navigationItems: NavigationItem[];
}

export interface NavigationMemberItem {
    readonly keyTitleMemberMenu?: string;
    readonly routePathMemberMenu: string;
}

export interface NavigationMemberPresenter {
    readonly navigationMemberItem: NavigationMemberItem[];
    profile: any
}