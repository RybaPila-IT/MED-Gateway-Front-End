const AbsolutePaths = {
    home: '/',
    login: '/login',
    register: '/register',
    authenticated: '/auth',
    authenticatedHome: '/auth',
    products: '/auth/products',
    productDetails: '/auth/product/:productId',
    submitPrediction: '/auth/product/:productId/submit',
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
    submitPrediction: 'product/:productId/submit',
    logout: 'logout',
    notFound: '*'
}

export {
    AbsolutePaths,
    RelativePaths
};