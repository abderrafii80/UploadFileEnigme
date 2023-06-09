import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './FileUpload.scss'
// import axios from 'axios'

const FileUpload = ({ files, setFiles, removeFile }) => {
    const uploadHandler = (event) => {
        const file = event.target.files[0];
        if(!file) return;
        file.isUploading = true;
       
        setFiles([...files, file])
         console.log(files)
        // upload file
        // const formData = new FormData();
        // formData.append(
        //     file.name,
        //     file,
        //     file.name
        // )


      
    }

    return (
        <>
            <div className="file-card">

                <div className="file-inputs">
                    <input type="file" onChange={uploadHandler} />
                    <button>
                        <i>
                            <FontAwesomeIcon icon={faPlus} />
                        </i>
                        Upload
                    </button>
                </div>

                <p className="main">Supporte les fichiers</p>
                <p className="info">PDF, JPG, PNG ...</p>

            </div>
        </>
    )
}

export default FileUpload



















// import { faPlus } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React from 'react'
// import './FileUpload.scss'
// import axios from 'axios'

// const FileUpload = ({files, setFiles, removeFile}) => {
//     const uploadHandler = (event) => {
//         const file = event.target.files[0];
//         file.isUploading = true;
//         setFiles([...files, file])

//         //upload file
//         const formData = new FormData();
//         formData.append(
//             file.name,
//             file,
//             file.name
//         )
//         axios.post('http://localhost:8080/upload', formData)
//         .then((res) => {
//             file.isUploading = false;
//             setFiles([...files,file])
//         })
//         .catch((err) => {
//             //information the user
//             console.error(err)
//             removeFile(file.name)
//         });
//     }

//   return (
//     <>
//         <div className='file-card'>
//             <div className="file-inputs">
//                 <input type="file" onChange={uploadHandler}/>
//                 <button>
//                     <i>
//                         <FontAwesomeIcon icon={faPlus} />
//                     </i>
//                     Upload
//                 </button>
//             </div>

//             <p className="main">Support files</p>
//             <p className="info">PDF , JPEG , PNG </p>
//         </div>
//     </>
//   )
// }

// export default FileUpload