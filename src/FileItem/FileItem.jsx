// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFileAlt, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons'
// import './FileItem.scss'

// const FileItem = ({ file, deleteFile }) => {
//     return (
//         <>
//             <li
//                 className="file-item"
//                 key={file.name}>
//                 <FontAwesomeIcon icon={faFileAlt} />
//                 <p>{file.name}</p>
//                 <div className="actions">
//                     <div className="loading"></div>
//                     {file.isUploading && <FontAwesomeIcon
//                         icon={faSpinner} className="fa-spin"
//                         onClick={() => deleteFile(file.name)} />
//                     }
//                     {!file.isUploading &&
//                         <FontAwesomeIcon icon={faTrash}
//                             onClick={() => deleteFile(file.name)} />
//                     }
//                 </div>
//             </li>
//         </>
//     )
// }

// export default FileItem










import React, {  } from 'react'
import './FileItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons'

const FileItem =  ({ file,setFiles,files }) => {
    const removeFile = (filename) => {
        setFiles(files.filter(file => file.name !== filename))
    }
    
    const display = () =>{
        
        if(!file.isUploading){
            return (<FontAwesomeIcon
                        icon={faSpinner} className="fa-spin" 
                        onClick={() => removeFile(file.name)} 
                        
                         />)
         }
         return (<FontAwesomeIcon
            icon={faTrash}
            onClick={() => removeFile(file.name)} />)

    }
   
    return (
        <li
            className='list-item'
            key={file.name}>
            <FontAwesomeIcon icon={faFileAlt} />
            <p>{file.name}</p>
            <div className="actions">
                { display()}
            </div>
        </li>
    )
}

export default FileItem