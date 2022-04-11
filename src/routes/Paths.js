const AbsolutePaths = {
    home: '/',
    login: '/login',
    register: '/register',
    authenticated: '/auth',
    authenticatedHome: '/auth',
    dashboard: '/auth/dashboard',
    logout: '/auth/logout',
    notFound: '*'
}

const RelativePaths = {
    home: '/',
    login: 'login',
    register: 'register',
    authenticated: '/auth',
    authenticatedHome: '',
    dashboard: 'dashboard',
    logout: 'logout',
    notFound: '*'
}

export {
    AbsolutePaths,
    RelativePaths
};