const AbsolutePaths = {
    home: '/',
    login: '/login',
    register: '/register',
    authenticated: '/auth',
    authenticatedHome: '/auth',
    products: '/auth/products',
    logout: '/auth/logout',
    notFound: '*'
}

const RelativePaths = {
    home: '/',
    login: 'login',
    register: 'register',
    authenticated: '/auth',
    authenticatedHome: '',
    products: 'products',
    logout: 'logout',
    notFound: '*'
}

export {
    AbsolutePaths,
    RelativePaths
};