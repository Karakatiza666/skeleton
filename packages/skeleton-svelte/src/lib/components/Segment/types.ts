import type { Snippet } from 'svelte';

export interface SegmentControl {
	// Root ---
	/** Sets base classes. */
	base?: string;
	/** Set background classes. */
	background?: string;
	/** Set border classes. */
	border?: string;
	/** Set flex direction classes. */
	flexDirection?: string;
	/** Set gap classes. */
	gap?: string;
	/** Set padding classes. */
	padding?: string;
	/** Set rounded classes. */
	rounded?: string;
	/** Set width classes. */
	width?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Snippets ---
	/** The default child slot. */
	children?: Snippet;
}

export interface SegmentItemProps {
	/** Provide the shared group binding. */
	group: string;
	/** Provide the shared group name. */
	name: string;
	/** Provide a unique ID. */
	id: string;
	/** Provide the unique segment value. */
	value: string;
	/** Provide a hover title attribute. */
	title?: string;
	/** Set the disabled state. */
	disabled?: boolean;

	// Root ---
	/** Sets base classes. */
	base?: string;
	/** Sets active state classes. */
	active?: string;
	/** Sets hover state classes. */
	hover?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Input ---
	/* Set base classes for the hidden radio input */
	radioBase?: string;

	// Label ---
	/** Sets base classes for the label element. */
	labelBase?: string;
	/** Provide arbitrary CSS classes for the label element. */
	labelClasses?: string;

	// Events ---
	/** Triggers on change events. */
	onchange?: (group: string) => void;

	// Snippets ---
	/** The default child slot. */
	children?: Snippet;
}