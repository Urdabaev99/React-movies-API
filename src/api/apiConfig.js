const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '42d921d630cd2d5376f008c6a75e68f2',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;