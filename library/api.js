export const getPhoto = (params) => { 
  return `https://pixabay.com/api/?key=19323544-16a5578b0be625367b264af08&image_type=photo&category=nature&per_page=20&page=${params}`
}

export const getPhotoPotrait = (params) => {
  return `https://pixabay.com/api/?key=19323544-16a5578b0be625367b264af08&image_type=photo&per_page=20&orientation=vertical&category=people&page=${params}`
}

export const getPhotoLandscape = (params) => {
  return `https://pixabay.com/api/?key=19323544-16a5578b0be625367b264af08&image_type=photo&per_page=20&orientation=horizontal&category=buildings&page=${params}`
}

