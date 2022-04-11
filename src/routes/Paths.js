const AbsolutePaths = {
    home: '/',
    login: '/login',
    register: '/register',
    authorized: '/authorized',
    dashboard: '/authorized/dashboard',
    logout: '/authorized/logout',
    notFound: '*'
}

const RelativePaths = {
    home: '/',
    login: 'login',
    register: 'register',
    authorized: '/authorized',
    dashboard: 'dashboard',
    logout: 'logout',
    notFound: '*'
}

export {
    AbsolutePaths,
    RelativePaths
};