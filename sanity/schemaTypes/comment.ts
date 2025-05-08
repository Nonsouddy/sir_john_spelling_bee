import { AddCommentIcon } from '@sanity/icons'

const comment = {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    icon: AddCommentIcon,
    fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'comment', title: 'Comment', type: 'text' },
        {
            name: 'post',
            title: 'Post',
            type: 'reference',
            to: [{ type: 'post' }],
        },
        {
            name: 'approved',
            title: 'Approved',
            type: 'boolean',
            initialValue: true,
        },
    ],
};

export default comment;
