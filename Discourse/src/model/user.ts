/**
 * User is Discourse's representation of a user
 */
export class User {
    id?: number
    username?: string
    name?: string
    avatar_template?: string
    email?: string
    secondary_emails?: string[]
    active?: boolean
    admin?: boolean
    moderator?: boolean
    last_seen_at?: string
    last_emailed_at?: string
    created_at?: string
    last_seen_age?: number
    last_emailed_age?: number
    created_at_age?: number
    trust_level?: number
    manual_locked_trust_level?: string
    flag_level?: number
    title?: string
    time_read?: number
    staged?: boolean
    days_visited?: number
    posts_read_count?: number
    topics_entered?: number
    post_count?: number
}