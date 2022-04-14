const AbsolutePaths = {
    home: '/',
    login: '/login',
    register: '/register',
    authenticated: '/auth',
    authenticatedHome: '/auth',
    products: '/auth/products',
    productDetails: '/auth/product/:productId',
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
    productDetails: 'product/:productId',
    logout: 'logout',
    notFound: '*'
}

export {
    AbsolutePaths,
    RelativePaths
};