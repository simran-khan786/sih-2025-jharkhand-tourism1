/**
 * Props for the ReviewCard component
 */

export type Author = {
	/** Full display name of the review author */
	name: string;
	/** Optional avatar image URL; null/undefined means use initials */
	avatarUrl?: string | null;
	/** Optional small role/label (e.g., 'Host', 'Traveler') */
	role?: string;
};

export interface ReviewCardProps {
	/** Author information (name, optional avatar and role) */
	author: Author;
	/** Rating value from 0 to 5 (supports halves, e.g., 4.5) */
	rating: number;
	/** The textual review content */
	content: string;
	/** Optional review date (string or Date) */
	date?: string | Date;
	/** Optional extra CSS classes to apply to the root element */
	className?: string;
}

