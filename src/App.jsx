import { useEffect, useState } from 'react'
import './App.scss';
import FileUpload from './FileUpload/FileUpload';
import FileList from './FileList/FileList';

function App() {
  const [scroll, setScroll] = useState(false)

  const [files, setFiles] = useState([
    // {
    //     name : 'myFile.pdf'
    // }, {
    //     name : 'myFile2.pdf'
    // }, {
    //     name : 'myFile3.pdf'
    // }
  ])

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }

  console.log(files)

  // scroll-bar
  useEffect(() => {
    if (files.length > 2) {
      const s = () => setScroll(true);
      s()
    }else {
      const s = () => setScroll(false);
      s()
    }
  }, [files])


  return (
    <div className='App'>
      <p className='title'>Upload File</p>
      <FileUpload files={files} setFiles={setFiles} removeFile={removeFile} />
      <br />
      <div className={`scroll-list ${scroll && 'scroll'}`}>
        <FileList files={files} setFiles={setFiles} />
      </div>
    </div>
  );
}

export default App;