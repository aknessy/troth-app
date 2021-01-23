import { NavigationInterface } from './navigation';

export const NavigationItems : NavigationInterface[] = [
    {
        name : 'dashboard',
        title: true
    },
    {
        name : 'monitor',
        url : 'dashboard',
        icon : 'dashboard-web'
    },
    {
        name : 'profile',
        url : 'user-profile',
        icon : 'user'
    },
    {
        name : 'subscriptions',
        url : 'subscriptions',
        icon : 'macbook'
    },
    {
        name : 'payments',
        icon : 'money',
        children : [
            {
                name : 'statistics',
                url : 'payments/statistics',
                icon : 'chart-line'
            },
            {
                name : 'invoices',
                url : 'payments/invoices',
                icon : 'coins'
            },
            {
                name : 'reports',
                url : 'payments/reports',
                icon : 'chart-line-alt'
            }
        ]
    },
    {
        name : 'chat',
        icon : 'live-messenger',
        children : [
            {
                name : 'contacts list',
                url : 'chats/contacts',
                icon : 'contacts'
            },
            {
                name : 'history',
                url : 'chat/history',
                icon : 'hour-glass'
            },
            {
                name : 'settings',
                url : 'chat/settings',
                icon : 'worker'
            }
        ]

    },
    {
        name: 'ecommerce',
        title : true,
    },
    {
        name : 'shop',
        icon : 'handshake-deal',
        children : [
            {
                name : 'shops',
                url : 'shops-list',
                icon : 'list'
            },
            {
                name : 'create',
                url : 'shop/create',
                icon : 'plus-circle'
            }
        ]
    },
    {
        name : 'apartment',
        icon : 'building-alt',
        children : [
            {
                name : 'apartments',
                url : 'apartment-lists',
                icon : 'map-pins'
            },
            {
                name : 'create',
                url : 'apartment/add',
                icon : 'plus-circle'
            },
            {
                name : 'agents',
                url : 'apartment/agents',
                icon : 'tie'
            },
            {
                name : 'add',
                url : 'apartment/add-agent',
                icon : 'contact-add'
            }
        ]
    },
    {
        name : 'services',
        title : true
    },
    {
        name : 'carnival bands',
        icon : 'bebo',
        children : [
            {
                name : 'bands',
                url : 'services/carnival-bands',
                icon : 'slidshare'
            },
        ]
    },
    {
        name : 'configuration',
        title : true,
    },
    {
        name : 'config',
        icon : 'architecture-alt',
        children : [
            {
                name : 'account',
                url : 'config/account',
                icon : 'gears'
            },
            {
                name : 'subscription',
                url : 'config/subscription',
                icon : 'tools-alt-2'
            },
            {
                name : 'merchant',
                url : 'config/merchant',
                icon : 'excavator'
            },
            {
                name : 'main',
                url : '',
                icon : 'plugin'
            }
        ]
    }
];