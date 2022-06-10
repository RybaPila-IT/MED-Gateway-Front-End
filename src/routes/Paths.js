const AbsolutePaths = {
    home: '/',
    login: '/login',
    register: '/register',
    verify: '/verify',
    authenticated: '/auth',
    authenticatedHome: '/auth',
    products: '/auth/products',
    productDetails: '/auth/product/:productId',
    submitPrediction: '/auth/product/:productId/submit',
    productHistory: '/auth/product/:productId/history',
    logout: '/auth/logout',
    notFound: '*'
}

const RelativePaths = {
    home: '/',
    login: 'login',
    register: 'register',
    verify: 'verify',
    authenticated: '/auth',
    authenticatedHome: '',
    products: 'products',
    productDetails: 'product/:productId',
    submitPrediction: 'product/:productId/submit',
    productHistory: 'product/:productId/history',
    logout: 'logout',
    notFound: '*'
}

export {
    AbsolutePaths,
    RelativePaths
};