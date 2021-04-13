import Firebase from './Firebase';

/* Add New Data  */ /* (public) */
const addNewData = (table, id, data) => {
    return new Promise(function(resolve, reject) {
        Firebase.database.ref(`${table}/${id}`).set({
            ...data
        },function(error) {
            if (error) {
                reject({message: `Database error. '${table} Add' data! ${error?.message}`});
            } else {
                resolve({message: true});
            }
        }).catch(error => {
            reject({message: `Database error. '${table} Add' data! ${error?.message}`});
        });
    })
}

/* Add data with image  */ /* (public) */
const addNewDataWithImage = (table, image, id, data) => {
    return new Promise(function(resolve, reject) {
        uploadImage(image).then(newImage => {
            if(newImage.downloadURL !== ""){
                data.image = newImage.downloadURL;
                addNewData(table, id, data)
                    .then(response => {
                        if(response.message){
                            resolve({message: true, imgUrl: data.image});
                        }else {
                            reject({message: `Database error. '${table} Add' data! `});
                        }
                    }).catch(error => {
                        reject({message: `Database error. '${table} Add' data! ${error?.message}`});
                    });
            }
        }).catch(error => {
            reject({message: `Storage error! ${error.message}`});
        })
    })
}

/* Upload Image  */ /* (static) */
const uploadImage = (data) => {
    return new Promise((resolve, reject) => {
        let url = ""
        if(data.file){
            data.name = `${Date.now()}_${data.name}`;
            let storageRef = Firebase.storage.ref(`storage/images/products`);
            let uploadTask = storageRef.child(`/${data.name}`).put(data.file);
            uploadTask.on('state_changed', function(snapshot){
                // 😷 handling promise
            }, function(error) {
                reject({message:`Failed to upload image: ${error.message}`})
            }, function() {
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    if(downloadURL){
                        resolve({downloadURL})
                    }else{
                        reject({message:`Failed to load image's URL: ${url}`})
                    }
                });
            });
        }
    });
}

/* Get all Data from table */ /* (public) */
const getAllData = (table) => {
    return new Promise(function(resolve, reject) {
        Firebase.database.ref(`/${table}`).once('value').then(function(snapshot) {
            let resultData = snapshot.val();
            if(resultData && Object.keys(resultData).length !== 0 && resultData.constructor === Object){
                resolve(resultData)
            }else if(resultData === null){
                reject({message: `Database Info. Empty ${table} data!`});
            }
        }).catch(error => {
            reject({message: `Database error. ${table} data! ${error.message}`});
        })
    })
}

const FirebaseFunctions = {
    addNewData, // add new data in firebase db
    addNewDataWithImage, // add new data with image in firebase db
    getAllData, // get all data from firebase db
}

export default FirebaseFunctions;